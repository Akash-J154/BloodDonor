import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import Select from 'react-select'
import {useNavigate} from 'react-router-dom'

const RecipientMainpage = () => {
  const [hidden,setHidden]=useState(true);
  const nav=useNavigate()
  const BloodGroup = [
      {id:'1', value: "O+",label:"O+"},
      {id:'2', value: "O-",label:"O-" },
      {id:'3', value: "A+",label:"A+" },
      {id:'4', value: "A-",label:"A-" },
    ];
    const [selectedbloodgroup, setBloodGroup] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [quantity, setQuantity] = useState("");
    const [hospitalName, setHospitalName] = useState("");
    const [location,setLocation]=useState()

    const handleBloodGroup = (selectedOption) => {
      setBloodGroup(selectedOption.value);
    }

    const handleSubmit=(e)=>{
      e.preventDefault()
      console.log(e)
      try{
         let response=axios.post(' http://127.0.0.1:8000/api/user/', {
            'name':name,
            'location':location,
            'age':age,
            'hospital':hospitalName,
            'blood_group':selectedbloodgroup,
            'quantity':quantity
          },
          {headers: {
            "Content-Type": "application/json",
          }}) 
          console.log(response)
           setHidden(false)

       }
       catch(error)
       {
         console.log(error)
       }
    }
  return (
    <div className='requestpage-back'>
    <div className='requestpage-container'>
    <div className='recipientcontainer'>
  <div className="recipientbody">
    {hidden && (
      <form className="recipient-form" onSubmit={handleSubmit}>
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
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            placeholder="Enter your age"
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            placeholder="Enter the required quantity"
            onChange={(e) => setQuantity(e.target.value)}
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
          <label htmlFor="hospital-name">Hospital Name:</label>
          <input
            type="text"
            id="hospital-name"
            name="hospital-name"
            placeholder="Enter the hospital name"
            onChange={(e) => setHospitalName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="blood-group">Blood Group:</label>
          <Select
            id="blood-group"
            name="blood-group"
            onChange={handleBloodGroup}
            options={BloodGroup}
            placeholder="Select the required blood group"
          />
        </div>
        <button className="submit-btn" onClick={()=>{nav()}}>Request</button>
      </form>
    )}
  </div>
</div>
</div>
</div>

  )
}

export default RecipientMainpage