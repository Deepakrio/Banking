import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Navbar';
import Contact from './Components/Contact';
import Invest from './Components/Invest';
import Loan from './Components/Loan';
import Services from './Components/Mutal';
import Home from './Components/Home';
import Mutal from './Components/Mutal';
import Fd from './Components/Fd';
import Demat from './Components/Demat';
import CreateAcc from './Components/CreateAcc';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <NavBar/>
     <div>
       <Routes>
         <Route exact path="/" element={<Home/>}/>
         <Route exact path="home" element={<Home/>}/>
         <Route exact path="invest" element={<Invest/>}/>
         <Route exact path="contact" element={<Contact/>}/>
         <Route exact path="loan" element={<Loan/>}/>
         <Route exact path="service" element={<Services/>}/>
         <Route exact path="mutual" element={<Mutal/>}/>
         <Route exact path="fd" element={<Fd/>}/>
         <Route exact path="demat" element={<Demat/>}/>
         <Route exact path="create" element={<CreateAcc/>}/>
       </Routes>
<Footer/>
     </div>
    </div>
  );
}

export default App;
