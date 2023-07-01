
import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useDetails } from '../hooks/useDetails'
import { useNavigate,Link } from 'react-router-dom'
import { useDonateMonth } from '../hooks/useDonateMonth'
const SigninDonor = () => {
    const nav = useNavigate()
    const [name,setName] = useState(null)
    const [number,setNumber] =useState(null)
    let {donordetails}=useContext(useDetails)
    let {date,month}=useContext(useDonateMonth)
    var today = new Date();
    var referencedate=new Date();
    referencedate.setMonth(month)
    referencedate.setDate(date)
    const handleSubmit=(e)=>{
        e.preventDefault()
        if ((month===null || today>referencedate)){
        let found = donordetails.find((donor)=>donor.Name===name && donor.Contact===number)
        if(found ){
          let bloodgroup=found.BloodGroup
          let Location =found.Location
          let latitude=found.lat
          let longitude = found.lon
        nav('/RequestPage',{state:{name,number,bloodgroup,Location,latitude,longitude }})
        }
        else
        nav('/DonorMainpage')
      }
      else{
        alert("Considering your safety you cannot donate blood twice in a month");
        nav("/Homepage")
      }
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
        <Link to="/DonorMainpage">Register</Link>
    </div>
  )
}

export default SigninDonor