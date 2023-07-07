import React from 'react'
import './Loading.css';
const Loading = () => {
  return (
    <div>
    <div className='load'>
        <div className='load-icon'>
        <img src='logo.png' alt='logo' height={180}/>
        {/* <h2 className='caption'>The Link for Life</h2> */}
        <div className='load-sign'>
        <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Loading