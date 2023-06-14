
import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useDetails } from '../hooks/useDetails'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
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
        nav('/RequestPage',{state:{name,number,bloodgroup,Location,latitude,longitude }})
        }
        else
        nav('/DonorMainpage')
    }
      
  return (
    <div>
      
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type={"text"} onChange={(e)=>setName(e.target.value)}></input>
            <label>PhoneNumber</label>
            <input type={"number"} onChange={(e)=>setNumber(e.target.value)}></input>
            <button>Submit</button>
        </form>
        <Link to="/RecipientMainpage">Register</Link>

    </div>
  )
}

export default SigninRecipient