import React from 'react';
import {Link} from 'react-router-dom'
import {Swap} from '../components/swap';
import "../pages/account.css";


// should come from django
const SwapData = [
  {
    id: 1,
    giftName: '3000 piece puzzle',
    status: 'matched',
    matched: {
      name: 'Hannah',
      yourGiftStatus: 'pending', // or "sent"
      thanksSent: false,
      address: 'this house on this street'
    },
    giftSent: false
  },
  {
    id: 2,
    giftName: 'Candle',
    status: 'pending-match',
  },
  {
    id: 3,
    giftName: 'Soap',
    status: 'matched',
    matched: {
      name: 'Raylene',
      yourGiftStatus: 'sent', // or "sent"
      thanksSent: true,
      address: 'Raylenes house'
    },
    giftSent: true
  },
  
]

export function Accountpage(){
    return(
      <div className="account">
        <h6>Regifting Status</h6>

        <Link to="/uploadgift"><h4>New Swap</h4></Link>

        {/* list of swaps */}
        <ul className="list-group">
          {SwapData.map(swap => {
            return (
              <Swap data={swap} key={swap.id} />
            )
          })}
        </ul>
      </div>  
    )
}