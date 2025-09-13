import React, { useState, useContext } from "react";
import { Allpostcontext } from "../contextstore/Allpostcontext";
import { PostContext } from "../contextstore/PostContext.jsx";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";

import "../../App.css";


function Header(){
    const {allPostdata}  = useContext(Allpostcontext)
    const {setPostContent} = useContext(PostContext)
    const navigate = useNavigate();
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) =>{
        const searchWords = event.target.value;
        setWordEntered(searchWords);
        const newFilter = allPostdata.filter((value) =>{
            return value.name.toLowerCase().includes(searchWords.toLowerCase());
        } );

        if(searchWords ===""){
            setFilteredData([]);
        }
        else{
            setFilteredData(newFilter);
        }
    }; 

    const clearInput = () =>{
        setFilteredData([]);
        setWordEntered("");
    };

    const handleEmptyClick = () =>{
        alert("Andha hai kia kuch nahi kia , dobara search ker");
    };

    const user = null;

    // const logoutHandler = () => {
    //   signOut(auth).then(() => {
    //     // Sign-out successful.
    //     navigate("/login");
    //   }

    const handleSelectedSearch = (value) => {
        setPostContent(value);
        navigate("/dynamicpost");
    };



    return(
        <>  
          <div className="container">
         <div className="headerParentDiv">

      <div className="headerChildDiv">

        <div className="placeSearch">
          <input type="text" 
          placeholder="Search specific product..."
          value={wordEntered}
          onChange={handleFilter}
          />{filteredData.length === 0 ? (
          <div onClick={handleEmptyClick}> Search here </div>
         ) : (
           <div id="clearBtn"  onClick={clearInput} > Arrow here</div>
         )}
          {filteredData.length !== 0 && (
        <div className="dataResult-header">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <div key={key} className="dataItem-header" onClick={()=>handleSelectedSearch(value)}>
                <p>{value.name} </p>
              </div>
            );
          })}
        </div>
      )}
         
        </div>
        <div className="productSearch">
          Search
        </div>
        
        <div className="language">
          <span className="span" style={{color:"black"}} > ENGLISH </span>
          Arrow
        </div>
        <div className="loginPage">
          {user ? (
            user.displayName
          ) : (
            <Link to="/login">
              <span>Login</span>
            </Link>
          )}
          <hr />
        </div>
        {/* {user && (
          //  <span onClick={logoutHandler} className="logout-span">
          //   Logout
          // </span>
        )} */}
        
        <Link to="/create">
          {" "}
          <div className="sellMenu">
            SellButton
            <div className="sellMenuContent">
              <span className="span" > SELL</span>
            </div>
          </div>
        </Link>
      </div>
          </div>
    </div>
        </> 
    );

}

export default Header;