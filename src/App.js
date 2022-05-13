import logo from './logo.svg';
// import './App.css';
import NavBar from './Components/Navbar';
import Contact from './Components/Contact';
import Invest from './Components/Invest';
import Loan from './Components/Loan';
import Services from './Components/Mutal';
import Home from './Components/Home';
import Mutal from './Components/Mutal';
import Addstudent from './Components/AddFunds';
import Demat from './Components/Demat';
import CreateAcc from './Components/CreateAcc';
import Footer from './Components/Footer';
import Signup from './Components/Signup';
import EditFunds from './Components/EditFunds';
import ViewFunds from './Components/ViewFunds';
// import PassBookInfo from './Components/PassBookInfo';
import PassBook from './Components/PassBook';
import React from 'react';
import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";
function App() {
  return (
    <div className='App'>
      {/* <CreateAcc/> */}
      <NavBar/> 
     
     
       <Routes>
         <Route exact path="/" element={<CreateAcc/>}/>
         <Route exact path="home" element={<Home/>}/>
         <Route exact path="invest" element={<Invest/>}/>
         <Route exact path="contact" element={<Contact/>}/>
         <Route exact path="passbook" element={<PassBook/>}/>
         <Route exact path="service" element={<Services/>}/>
         <Route exact path="mutual" element={<Mutal/>}/>
         <Route exact path="edit/:Id" element={<EditFunds/>}/>
         <Route exact path="demat/:Id" element={<ViewFunds/>}/>
         <Route exact path="create" element={<CreateAcc/>}/> 
          <Route exact path="signup" element={<Signup/>}/>

       </Routes>
<Footer/>
     </div> 
  );
}

export default App;






