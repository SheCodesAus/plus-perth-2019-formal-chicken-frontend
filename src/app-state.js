import React from 'react';
import { whoAmI } from './api/api'

const AppState = React.createContext({  user: null })

function getInitalAppState() {
    return {
        user: null
    }
}

function appStateReducer(state, action) {
    switch (action.type) {
        case 'set-state':
            return { ...state, ...action.payload };
        default:
            throw new Error('To change the app state you need to dispatch a real action');
    }
}

export function ProvideAppState(props) {
    
    const [state, dispatch] = React.useReducer(appStateReducer, getInitalAppState());

    React.useEffect(() => {

        const checkUser = async () => {
            const user = await whoAmI()
            if (user) {
                dispatch({
                    type: 'set-state',
                    payload: { user }
                })
            }
        }

        checkUser()
        
    }, [])

    return (
        <AppState.Provider value={{ state, dispatch }}>
            {props.children}
        </AppState.Provider>
    )
}

export function useAppState() {
    const { state } = React.useContext(AppState)
    return state
}

export function useSetAppState() {
    const { dispatch } = React.useContext(AppState)
    return (newState) => {
        dispatch({
            type: 'set-state',
            payload: newState
        })
    }
}