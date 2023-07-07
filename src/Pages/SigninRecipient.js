
import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useDetails } from '../hooks/useDetails'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './SigninRecipient.css'
const SigninRecipient = () => {
    const nav = useNavigate()
    const [name,setName] = useState(null)
    const [number,setNumber] =useState(null)
    let {recipientdetails}=useContext(useDetails)
    const handleSubmit=(e)=>{
        e.preventDefault()
        
        let found = recipientdetails.find((donor)=>donor.Name===name && donor.Contact===number)
        if(found){
          let bloodgroup=found.BloodGroup
          let Location =found.Location
          let latitude=found.lat
          let longitude = found.lon
        nav('/RequestBlood',{state:{name,number,bloodgroup,Location,latitude,longitude }})
        }
        else
        nav('/RecipientMainpage')
    }
      
  return (
    <div className='res-container'>
      <div className='res-sign'>
        <img className='res-icon' src='recepient.png'></img>
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input placeholder='Enter your name' type={"text"} onChange={(e)=>setName(e.target.value)}></input>
            <label>PhoneNumber</label>
            <input placeholder='Enter your Phone number' type={"number"} onChange={(e)=>setNumber(e.target.value)}></input>
            <button>Submit</button>
        </form>
        <Link to="/RecipientMainpage">Register</Link>
        </div>
    </div>
  )
}

export default SigninRecipient