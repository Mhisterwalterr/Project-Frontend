import React from 'react'
import './Address.css'
import { BsArrowLeftShort } from "react-icons/bs";
import Button from '../../Component/Button/Button';



function Address() {
  return (
    <div className='addressContainer'>
      <div className='addressHeader'>
      <BsArrowLeftShort className='addressArrow'/>
      <p>Address</p>
      </div>
      <div className='addressDelivery'>
        <h1>Delivery</h1>
      </div>
      <div className='addressChange'>
        <h3>Address details</h3>
        <p>Change</p>
      </div>
      <div className='addressInfo'>
        <div className='class'>
          <h3>Akaeme Chidera</h3>
        </div>
        <div className='class'>
          <h3>Alade close</h3>
        </div>
        <div className='class'>
          <h4>09029935318</h4>
        </div>
      </div>
      <div className='addressButton'>
      <Button name='Confirm Address' bgcolor='yellow' />
        
      </div>
    </div>
  )
}

export default Address