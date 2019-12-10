

import React from 'react';
import {Link} from 'react-router-dom'
import "../components/swap";
export function Swap(props) {
//${props.matched.name}
    const { data } = props

    return (
        <li className="list-group-item">
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <h5 className="card-title">Your swap for:</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{data.giftName}</h6>
                    </div>
                    <div className="col-sm">
                        {data.status === 'pending-match' && 
                            <>
                                <h3>Pending Match 💌</h3>
                            </>
                        }
                        {data.status === 'matched' && 
                            <>
                                <h3>You've been matched with {data.matched.name} 👩🏾‍🦰</h3>
                                {data.giftSent === false && 
                                    <>
                                        <h3>Send her gift to: {data.matched.address} 🏡</h3>
                                    </>
                                }
                                {data.giftSent === true && 
                                    <>
                                        <h3>Your gift to {data.matched.name} has been sent! to {data.matched.address}🏡</h3>
                                    </>
                                }


                                {data.matched.yourGiftStatus === 'pending' && 
                                    <>
                                        <h3>{data.matched.name} has not posted her gift yet 🎀</h3>
                                    </>
                                }
                                {data.matched.yourGiftStatus === 'sent' && 
                                    <>
                                        <h3>{data.matched.name} has posted her gift! 🎀</h3>
                                        {data.matched.thanksSent === false && `Your gift from ${data.matched.name} is on it's way!`}
                                    </>
                                }
                                {data.matched.thanksSent === true && 
                                    <>
                                        <h3>You have sent a thanks! Awww nice.💞</h3>
                                    </>
                                }
                                {data.matched.thanksSent === false && 
                                    <>
                                        <h3>Received your gift? Send a thanks! 📫</h3>
                                        <form>
                                            <Link to={`/thankyou?`} >Send thnkx</Link>  
                                        </form>
                                    </>
                                }
                            </>
                        }

                    </div>
                </div>
            </div>
        </li>
    )
}