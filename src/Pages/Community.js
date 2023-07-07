import React from 'react'
import Card from '../Component/Card'
import Navbar from '../Component/Navbar'
import './Community.css'
const Community = () => {
  return (
    <>
    <Navbar/>
    <div className='requestpage-back'>
      <div className='requestpage-container'>
       <Card/>
       <Card/>
      </div>
    </div>

    </>
  )
}

export default Community