import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BsDropletFill } from 'react-icons/bs'

const Homepage = () => {
   const nav=useNavigate()
  return (
    <div className='home-container' >
    <div className='large-logo'><BsDropletFill size={50} color='#c21807'/><h1>Bloodlink</h1></div>
    <div className='option'>
      <button onClick={()=>{nav('/SigninRecipient')}}>Recipient</button>
      <button onClick={()=>{nav('/SigninDonor')}}>Donor</button>
    </div>
  </div>

  )
}

export default Homepage