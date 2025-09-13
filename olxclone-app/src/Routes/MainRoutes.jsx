import React from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from '../pages/Home'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import CreatePost from '../pages/CreatePost'
import ViewPost from '../pages/ViewPost'
import ViewMore from '../pages/ViewMore'
import Otp from '../pages/Otp'




function MainRoutes() {
    return (
       <Router>
        <Routes>
           <Route exact path="/" element={<Home/>}/>
               
           <Route path="/signup" element={<Signup/>}/>
              
           <Route path="/login" element={<Login/>}  />
               
           <Route path="/create"element={<CreatePost/>}/>
              
           <Route path="/view" element={<ViewPost/>} />
               
           <Route path="/viewmore"  element={<ViewMore/>}/> 

           <Route path="/otp"  element={<Otp/>}/> 
               
         
           

           
           </Routes>
       </Router>
    )
}

export default MainRoutes