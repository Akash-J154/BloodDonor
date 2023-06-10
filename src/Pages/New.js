//import {React,useState} from 'react'
//import Select from 'react-select'
//import axios from 'axios'
//const New = () => {
//    const [age,setAge]=useState()
//const [selectedsex,handleSex]=useState()
//const [hospitalname,setHospitalname]=useState()
//const [location,setLocation]=useState()
//const [height,setHeight]=useState()
//const [weight,setWeight]=useState()
//const [lastday,setLastday]=useState()
//const [visible,setdisplay]=useState('block')
// const handleSubmit2=(e)=>{
//        e.preventDefault()
//        try{
//            axios.post('/user', {
//            
//                'age':age,
//                'GENDER_CHOICES':selectedsex,
//                'hospitalname:hospitalname,
//                'location':location,
//                'height':height,
//                'weight':weight,
//                lastday:lastday,
//                'blood_group':selectedbloodgroup
//    
//              },
//              {headers: {
//                "Content-Type": "application/json",
//              }}) 
//          }
//          catch(error)
//          {
//            console.log(error)
//          }
//     }
//  return (
//    <div>
//        <form onSubmit={handleSubmit2} >
//  <input type={'number'} placeholder='age' onChange={(e)=>setAge(e.target.value)}/>
//  <Select
//     onChange={handleSex}
//     options={Sex}
//     placeholder={"Sex"}
// />
// <input type={'text'} placeholder='hospital name' onChange={(e)=>setHospitalname(e.target.value)}/>
// <input type={'number'} placeholder='height' onChange={(e)=>setHeight(e.target.value)}/>
// <input type={'number'} placeholder='weight' onChange={(e)=>setWeight(e.target.value)}/>
// <input type={'date'} placeholder='last blood donated' onChange={(e)=>setLastday(e.target.value)}/>
// </form>}
//    </div>
//  )
//}
//
//export default New
//// const handleSubmit2=(e)=>{
////     e.preventDefault()
////     try{
////         axios.post('/user', {
//        
////             age:age,
////             selectedsex:selectedsex,
////             hospitalname:hospitalname,
////             location:location,
////             height:height,
//             weight:weight,
//             lastday:lastday,
//             selectedbloodgroup:selectedbloodgroup

//           },
//           {headers: {
//             "Content-Type": "application/json",
//           }}) 
//       }
//       catch(error)
//       {
//         console.log(error)
//       }
//  }


//  { !hidden&&<form onSubmit={handleSubmit2} >
//  <input type={'number'} placeholder='age' onChange={(e)=>setAge(e.target.value)}/>
//  <Select
//      onChange={handleSex}
//      options={Sex}
//      placeholder={"Sex"}
//  />
//  <input type={'text'} placeholder='hospital name' onChange={(e)=>setHospitalname(e.target.value)}/>
//  <input type={'number'} placeholder='height' onChange={(e)=>setHeight(e.target.value)}/>
//  <input type={'number'} placeholder='weight' onChange={(e)=>setWeight(e.target.value)}/>
//  <input type={'date'} placeholder='last blood donated' onChange={(e)=>setLastday(e.target.value)}/>
//  </form>}


// const [age,setAge]=useState()

// const [hospitalname,setHospitalname]=useState()
// const [height,setHeight]=useState()
// const [weight,setWeight]=useState()
// const [lastday,setLastday]=useState()
// const [visible,setdisplay]=useState('block')
