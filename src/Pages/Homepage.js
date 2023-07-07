import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BsDropletFill } from 'react-icons/bs'
import './Homepage.css';

const Homepage = () => {
   const nav=useNavigate()
  return (
    <div className='home-container'>
      <img src='logo.png' height={40} className='logospace'/>
      <div className='home-box'>

        <div className='descript'>
          <h1>Welcome to Bloodlink</h1>
          <p>We Introducing <span className='high'>BloodLink</span>, Your lifeline to timely blood donations. 
            Seamlessly connecting donors and recipients, our platform ensures swift assistance, 
            saving lives with just a few clicks. 
            Join us and be a part of this remarkable journey to make a difference in moments
             that matter</p>
        </div>
    <div className='option'>
      <button onClick={()=>{nav('/SigninRecipient')}}>Recipient</button>
      <button onClick={()=>{nav('/SigninDonor')}}>Donor</button>
    </div>
    </div>
  </div>

  )
}

export default Homepage