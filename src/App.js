
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
import RequestPageWithoutBackend from './Pages/RequestPageWithoutBackend';
function App() {
  return (
 

   
  <Router>
  {/* <Navbar/> */}
  
    <Routes>
      <Route exact path='/' element={<Homepage/>}></Route>
      <Route exact path='/Homepage' element={<Homepage/>}></Route>
      <Route exact path='/DonorMainpage' element={<DonorMainpage/>}></Route>
      <Route exact path='/RecipientMainpage' element={<RecipientMainpage/>}></Route>
      {/* <Route exact path='/Requestpage' element={<Requestpage/>}></Route> */}
      <Route exact path='/Requestpage' element={<RequestPageWithoutBackend/>}></Route>
      <Route exact path='/Confirm' element={<Confirm/>}></Route>
      <Route exact path='/Community' element={<Community/>}></Route>
      <Route exact path='/SigninDonor' element={<SigninDonor/>}></Route>
      
    </Routes>
  </Router>
 
  );
}

export default App;
