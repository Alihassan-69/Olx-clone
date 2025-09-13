import React,{useContext} from 'react';

import Header from '../components/header/Header';
import Navbar from '../components/navbar/Navbar';

import Posts from '../components/posts/Posts';
import Footer from '../components/footer/Footer';
import { AuthContext } from '../components/contextstore/AuthContext';


function Home(props) {
 const {setUser}=useContext(AuthContext)
  
  return (
    <div className="homeParentDiv">
      <Header />
      <Navbar />
      <Posts />
      <Footer />
    </div>
  );
}

export default Home;
 