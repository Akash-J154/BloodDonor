import React from 'react'
import {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Requestpage = () => {
  const [data,setData]=useState(null);
  const [dat,setDat]=useState(null);
 let response
  const nav=useNavigate();
  const [hidden,setHidden]=useState(false)
  const handlerf=(item)=>{
    setDat(item);
    setHidden(true)
  }
  useEffect(()=>{
    (async () => {
      try{
        response = await axios.get(' http://127.0.0.1:8000/api/bloodrequest/');
        console.log(response)
        setData(response);
      }
      catch(error)
      {
        console.log(error);
      }
      
    })();
  },[])
  
let val1='123'

  return (
    <>
    <div className='requestpage-back'>
      {data&&<div className='requestpage-container'>
        {
          data.data.map((items,index)=>{
            return(
              <div className='dialoge-container'>
        <div className='visble'>
        <div className='dia-flex'>
          <label>Name</label>
          <span><label>{items.requester.name}</label></span>
        </div>

              <div className='dia-flex'>
              <label>Hospital Name</label>
              <span><label>{items.requester.hospital_name}</label></span>

            </div>
            <div className='dia-flex'>
              <label>Blood Group</label>
              <span><label>{items.requester.blood_group}</label></span>

            </div>
            <div className='dia-flex'>
              <label>Amount</label>
              <span><label>{items.requester.quantity}</label></span>

            </div>
            <div className='dia-flex'>
              <label>Purpose</label>
              <span><label>Accident</label></span>

            </div>
            <button onClick={()=>{handlerf(items)}} id={index}>Accept</button>
          </div>
          </div>
    
            )
          }
          )
        }
       </div>}
       {dat&&hidden&&<div className='hidden-div'>
            <div className='dia-flex'>
              <label>Purpose</label>
              <span><label>Accident</label></span>
            </div>
            {console.log(dat)}
            <div className='dia-flex'>
              <label>Contact Number</label>
              <span><label>{dat.requester.contact_number}</label></span>

            </div>
            <button className='message'>Message</button>
            <Link to={{ pathname: '/Confirm', search: `?value1=${dat.requester.name}&value2=${dat.requester.location}&value2=${dat.requester.blood_group}` }}>Go to Component 2</Link>
            
          </div>}
    
    </div>
    </>
  )
}

export default Requestpage
