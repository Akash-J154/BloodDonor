import React from 'react'

const Display = () => {
  return (
    <div className='display-container'>
      
      <div className='dis-details'>
      <div className='dis-name'>Akshay3301</div>
      <br></br>
        <div className='dis-flex'>
            <label>Name:</label><p>Akshay</p>
        </div>
        <div className='dis-flex'>
            <label>Donations:</label><p>4</p>
        </div>
        <div className='dis-flex'>
            <label>Location:</label><p>Trivandrum</p>
        </div>
        <div className='dis-flex'>
            <label>Last donation:</label><p>10-03-21</p>
        </div>
        <div className='dis-flex'>
            <label>Weight:</label><p>67</p>
        </div>
        <div className='dis-flex'>
            <label>Blood Group:</label><p>O+ve</p>
        </div>
      </div>
      <div className='ad'>
        
      </div>
    </div>
  )
}

export default Display
