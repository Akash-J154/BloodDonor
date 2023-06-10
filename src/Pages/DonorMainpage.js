import React from 'react'
import Select from 'react-select'
import axios from 'axios'
import { useState,useEffect } from 'react';
import {useNavigate} from 'react-router-dom'


const DonorMainpage = () => {
    const [hidden,setHidden]=useState(true);
  
    const nav=useNavigate()
    const BloodGroup = [
        {id:'1', value: "O+",label:"O+"},
        {id:'2', value: "O-",label:"O-" },
        {id:'3', value: "A+",label:"A+" },
        {id:'4', value: "A-",label:"A-" },
      ];
      const [selectedbloodgroup, setBloodGroup] = useState("");
      const [name,setName]=useState()
     
      const [location,setLocation]=useState()
      const [contactnumber,setContactnumber]=useState()
      const [selectedsex, setSex] = useState();
      const handleBloodGroup = (selectedOption) => {
        setBloodGroup(selectedOption.value);
      }
    const Sex = [
        {id:'1', value: "F",label:"Female"},
        {id:'2', value: "M",label:"Male" },
        {id:'3', value: "O",label:"Other" },

       
      ];
      
      const handleSex = (selectedOption) => {
        setSex(selectedOption.value);
      }
      
      const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(e)
        try{
           let response=axios.post(' http://127.0.0.1:8000/api/user/', {
              'name':name,
              'location':location,
              'blood_group':selectedbloodgroup,
              'contact_number':contactnumber
   
            },
            {headers: {
              "Content-Type": "application/json",
            }}) 
            console.log(response)
             setHidden(false)
             nav('/Community')

         }
         catch(error)
         {
           console.log(error)
         }
      }
    
      
  return (
    <div className='requestpage-back'>
    <div className='requestpage-container'>
      

    <div className='donorcontainer'>
  <div className="donorbody">
    {hidden && (
      <form className="donor-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Enter your location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact-number">Contact Number:</label>
          <input
            type="tel"
            id="contact-number"
            name="contact-number"
            placeholder="Enter your phone number"
            onChange={(e)=>setContactnumber(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="blood-group">Blood Group:</label>
          <Select
            id="blood-group"
            name="blood-group"
            onChange={handleBloodGroup}
            options={BloodGroup}
            placeholder="Select your blood group"
          />
        </div>
        <button className="submit-btn" >Continue</button>
      </form>
    )}
  </div>
</div>

    </div>


    
  </div>
  )
}

export default DonorMainpage