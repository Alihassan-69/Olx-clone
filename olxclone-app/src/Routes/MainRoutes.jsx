import React from 'react'
import {BrowserRouter as Router , Route} from 'react-router-dom'
import Home from '../pages/Home'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import CreatePost from '../pages/CreatePost'
import ViewPost from '../pages/ViewPost'
import ViewMore from '../pages/ViewMore'




function MainRoutes() {
    return (
       <Router>
           <Route exact path="/">
               <Home/>
           </Route>
           <Route path="/signup">
               <Signup/>
           </Route>
           <Route path="/login">
               <Login/>
           </Route>
           <Route path="/create">
               <CreatePost/>
           </Route>
           <Route path="/view">
               <ViewPost/>
           </Route>
           <Route path="/viewmore">
               <ViewMore/>
           </Route>
         
           

           
       </Router>
    )
}

export default MainRoutes