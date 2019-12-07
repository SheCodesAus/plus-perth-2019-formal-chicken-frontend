import axios from "axios"

export async function login(username, password) {
    try {
        const url = 'http://localhost:8000/api/token/';
        const data = { username, password }
        const response = await axios.post(url, data, getCommonConfig(true))
        localStorage.setItem(ACCESS_TOKEN, response.data.access)
        localStorage.setItem(REFRESH_TOKEN, response.data.refresh)

        // is there another way to get your current user in the api/token request?
        const users = await getUsers()
        const myuser = users.results.find(user => user.username === username)

        localStorage.setItem(ME, myuser.id)

        return myuser;
    } catch (error) {
        throwErrorDetail(error)
    }
}


export function logout() {
    localStorage.removeItem(ACCESS_TOKEN)
    localStorage.removeItem(REFRESH_TOKEN)
    localStorage.removeItem(ME)
}

export async function register(username, password, email, first_name, last_name, address) {
    try {
        const url = 'http://localhost:8000/sista_regifta/users/';
        const data = { username, password, email, first_name, last_name, address }
        const response = await axios.post(url, data, getCommonConfig(true))
        const user = response.data;        
        await login(username, password) // also log the user in
        return user
    } catch (error) {
        throwErrorDetail(error)
    }
}

export async function whoAmI() {
    try {
        const me = localStorage.getItem(ME)
        if (me) {
            const user = await getUsers(me)
            if (user) return user
        }

        localStorage.removeItem(ME)

    } catch (error) {
        throwErrorDetail(error)
    }
}

export async function getUsers(id) {
    try {
        const result = await doAuthenticatedRequest(async () => {
            const baseUrl = 'http://localhost:8000/sista_regifta/users/';
            const url = id ? `${baseUrl}${id}/` : baseUrl
            const response = await axios.get(url, getCommonConfig())
            return response.data;
        })
        return result
    } catch (error) {
        throwErrorDetail(error)
    }
}

export async function getGifts(id) {
    try {
        const result = await doAuthenticatedRequest(async () => {
            const baseUrl = 'http://localhost:8000/api/gift/';
            const url = id ? `${baseUrl}${id}/` : baseUrl
            const response = await axios.get(url, getCommonConfig())
            return response.data;
        })
        return result
    } catch (error) {
        throwErrorDetail(error)
    }
}

export async function getSwaps(id) {
    try {
        const result = await doAuthenticatedRequest(async () => {
            const baseUrl = 'http://localhost:8000/api/swap/';
            const url = id ? `${baseUrl}${id}/` : baseUrl
            const response = await axios.get(url, getCommonConfig())
            return response.data;
        })
        return result
    } catch (error) {
        throwErrorDetail(error)
    }
}

const ACCESS_TOKEN = 'ACCESS_TOKEN'
const REFRESH_TOKEN = 'REFRESH_TOKEN'
const ME = 'ME'

function getCommonConfig(excludeToken = false) {
    const headers = { 'Content-Type': 'application/json' }
    if (!excludeToken) {
        const token = localStorage.getItem(ACCESS_TOKEN)
        if (!token) throw new Error('You are not logged in!')
        headers['Authorization'] = `Bearer ${token}`
    }
    return { 
        headers 
    }
}

// handles refreshing tokens given the access one only lasts 5 min?
async function doAuthenticatedRequest(reqFn) {
    try {
        const result = await reqFn()
        return result
    } catch (e) {
        // https://simpleisbetterthancomplex.com/tutorial/2018/12/19/how-to-use-jwt-authentication-with-django-rest-framework.html
        const errorIsTokenError = e && typeof e === 'object' && (e.code === 'token_not_valid' || e.code === 'token_not_found')
        if (errorIsTokenError) {
            const refreshURL = 'http://127.0.0.1:8000/api/token/refresh/'
            const refresh = localStorage.getItem(REFRESH_TOKEN)
            try {
                const response = await axios.post(refreshURL, { refresh }, getCommonConfig(true))
                localStorage.setItem(response.data.access, ACCESS_TOKEN)
                localStorage.setItem(response.data.refresh, REFRESH_TOKEN)
                const result = await reqFn()
                return result
            } catch (error) {
                throwErrorDetail(error)
            }
        }
        throw e
    }
}

function throwErrorDetail(error) {
    if (error.response) {
        throw error.response.data
    }
    throw error
}