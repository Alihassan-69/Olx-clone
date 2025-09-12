import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";    
import Header from './components/header/Header.jsx'
import Signup from './components/signup/Signup.jsx'
import Login from './components/login/Login.jsx';
import Otp  from './components/otp/Otp.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Create from './components/create/Create.jsx';
import Dynamicpost from './components/dynamicpost/Dynamicpost.jsx';
import Footer from './components/footer/Footer.jsx';



function App() {

  return (
    <>
    <div>
    <Router>
    <Header/>
    <Navbar/>
      <Routes>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element ={<Login/>} />
        <Route path="/otp" element ={<Otp/>} />
        <Route path="/navbar" element ={<Navbar/>} />
        <Route path="/create" element ={<Create/>} />
        <Route path="/dynamicpost" element={<Dynamicpost />} />
      </Routes>
      {/* <Dynamicpost category="Cars" />
      <Dynamicpost category="Mobile Phones" />
      <Dynamicpost category="Cameras & Lenses" /> */}
    </Router>
    </div>
    </>
  )
}

export default App
