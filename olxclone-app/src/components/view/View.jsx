import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PostContext } from "../../components/contextstore/PostContext";
import "./view.css";
function View() {
  let { postContent } = useContext(PostContext);

  const [userDetails, setUserDetails] = useState();

  const Navigate = useNavigate();

useEffect(()=>{
        let {userId} = postContent;
        if (userId === undefined) {
            Navigate("/");
        }
    },[Navigate,postContent])

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img src={postContent.url} alt="" />
      </div>{" "}
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postContent.price} </p>
          <span>{postContent.name}</span>
          <p>{postContent.category}</p>
          <span>{postContent.createdAt}</span>
        </div>
        <div className="productDescription">
            <p className="p-bold">Product Description</p>
            <p>{postContent.description}</p>
            
          </div>
        {userDetails &&
          <div className="contactDetails">
            <p className="p-bold">Seller details</p>
            <p>Name : {userDetails.name}</p>
            <p>Phone : {userDetails.phone}</p>
          </div>
        }
       
      </div>
    </div>
  );
}
export default View;