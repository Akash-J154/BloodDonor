import React, { useContext } from 'react'
import {useState,useEffect} from 'react'
import {useNavigate,useLocation} from 'react-router-dom'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { useDetails } from '../hooks/useDetails'

const RequestPageWithoutBackend = () => {
  
 let {recipientdetails} =useContext(useDetails)
 
 const location = useLocation();
 const { name,number,bloodgroup,Location } = location.state || {};

 return(
bloodgroup==="O+"?recipientdetails.map((items,index)=>{

            return(
              
              <div className='dialoge-container'>
                
        <div className='visble'>
        <div className='dia-flex'>
          <label>Name</label>
          <span><label>{items.Name}</label></span>
        </div>

      
            <div className='dia-flex'>
              <label>Blood Group</label>
              <span><label>{items.BloodGroup}</label></span>

            </div>
            <div className='dia-flex'>
              <label>Amount</label>
              <span><label>{items.Amount}</label></span>

            </div>
            <div className='dia-flex'>
              <label>Purpose</label>
              <span><label>Accident</label></span>

            </div>
            <button  id={index}>Accept</button>
          </div>
          </div>
    
            )
   }

   ):(bloodgroup==="A+"? recipientdetails.filter((result)=>{

    if(result.BloodGroup===bloodgroup)
      return result
    }).map((items,index)=>{
     
    return(
      
      <div  className='dialoge-container'>
        
<div className='visble'>
<div className='dia-flex'>
  <label>Name</label>
  <span><label>{items.Name}</label></span>
</div>


    <div className='dia-flex'>
      <label>Blood Group</label>
      <span><label>{items.BloodGroup}</label></span>

    </div>
    <div className='dia-flex'>
      <label>Amount</label>
      <span><label>{items.Amount}</label></span>

    </div>
    <div className='dia-flex'>
      <label>Purpose</label>
      <span><label>Accident</label></span>

    </div>
    <button  id={index}>Accept</button>
  </div>
  </div>

    )}):(bloodgroup==="O-"?recipientdetails.filter((result)=>{
      if(result.BloodGroup===bloodgroup)
      return result
    }).map((items,index)=>{

      return(
        
        <div className='dialoge-container'>
          
  <div className='visble'>
  <div className='dia-flex'>
    <label>Name</label>
    <span><label>{items.Name}</label></span>
  </div>
  
  
      <div className='dia-flex'>
        <label>Blood Group</label>
        <span><label>{items.BloodGroup}</label></span>
  
      </div>
      <div className='dia-flex'>
        <label>Amount</label>
        <span><label>{items.Amount}</label></span>
  
      </div>
      <div className='dia-flex'>
        <label>Purpose</label>
        <span><label>Accident</label></span>
  
      </div>
      <button  id={index}>Accept</button>
    </div>
    </div>
  
      )}):(bloodgroup==="B+"&&recipientdetails.filter((result)=>{
        if(result.BloodGroup===bloodgroup)
      return result
    }).map((items,index)=>{

        return(
          
          <div className='dialoge-container'>
            
    <div className='visble'>
    <div className='dia-flex'>
      <label>Name</label>
      <span><label>{items.Name}</label></span>
    </div>
    
    
        <div className='dia-flex'>
          <label>Blood Group</label>
          <span><label>{items.BloodGroup}</label></span>
    
        </div>
        <div className='dia-flex'>
          <label>Amount</label>
          <span><label>{items.Amount}</label></span>
    
        </div>
        <div className='dia-flex'>
          <label>Purpose</label>
          <span><label>Accident</label></span>
    
        </div>
        <button  id={index}>Accept</button>
      </div>
      </div>
    
        )}))



      )
    
    
    )
    
    
    )
   }

export default RequestPageWithoutBackend
