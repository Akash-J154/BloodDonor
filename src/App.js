
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DonorMainpage from './Pages/DonorMainpage';
import RecipientMainpage from './Pages/RecipientMainpage';
import Navbar from './Component/Navbar'
import Display from './Component/Display';
import Requestpage from './Pages/Requestpage';
import Confirm from './Pages/Confirm';
import Homepage from './Pages/Homepage'
import Community from './Pages/Community';
import SigninDonor from './Pages/SigninDonor';
import DonateTo from './Pages/DonateTo';
import SigninRecipient from './Pages/SigninRecipient';
import RequestBlood from './Pages/RequestBlood';
import Loading from './Pages/Loading';
import React, { useState, useEffect} from 'react';
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., API call or data fetching)
    setTimeout(() => {
      setIsLoading(false); // Set isLoading to false after the loading is complete
    }, 2000); // Adjust the timeout duration to match your actual loading time
  }, []);
  return (
 <>    {isLoading ? (
      <Loading/> // Render the Loading component when isLoading is true
    ) : (
      
   
  <Router>
  {/* <Navbar/> */}
  
    <Routes>
      <Route exact path='/' element={<Homepage/>}></Route>
      
     
      <Route exact path='/Homepage' element={<Homepage/>}></Route>
      <Route exact path='/DonorMainpage' element={<DonorMainpage/>}></Route>
      <Route exact path='/RecipientMainpage' element={<RecipientMainpage/>}></Route>
      {/* <Route exact path='/Requestpage' element={<Requestpage/>}></Route> */}
      <Route exact path='/Requestpage' element={<DonateTo/>}></Route>
      <Route exact path='/RequestBlood' element={<RequestBlood/>}></Route>
      <Route exact path='/Confirm' element={<Confirm/>}></Route>
      <Route exact path='/Community' element={<Community/>}></Route>
      <Route exact path='/SigninDonor' element={<SigninDonor/>}></Route>
      <Route exact path='/SigninRecipient' element={<SigninRecipient/>}></Route>
      <Route exact path='/Loading' element={<Loading/>}></Route>
      
    </Routes>
  </Router>
 )}
 </>
 );
}
  

export default App;
