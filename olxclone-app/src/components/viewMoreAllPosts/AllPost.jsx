import React, { useContext,useState } from "react";
import { Navigate, useNavigate } from "react-router";
import { AllPostContext } from "../../contextStore/AllPostContext";
import Pagination from "../pagination/Pagination";
import PostCards from "../postcards/Postcards";
import "./allposts.css";
function AllPosts() {
  const { allPost } = useContext(AllPostContext);
   let length = allPost.length;
  const Navigate = useNavigate();

  let [currentPage,setCurrentPage]=useState(1)
  let itemsPerPage=8
  let indexOfLastDish=currentPage*itemsPerPage
  let indexOfFirstDish=indexOfLastDish-itemsPerPage
  let showTheseItems=allPost.slice(indexOfFirstDish,indexOfLastDish)

  let displayThesePosts = showTheseItems.map((product, index) => {
    return (
      <div className="all-post-card" key={index}>
        {" "}
        <PostCards product={product} index={index} />{" "}
      </div>
    );
  });
  return (
    <>
      {length !== 0 ? (
        <div className="display-all-parent">
          <div className="container-allpost">{displayThesePosts}</div>
          <Pagination setCurrentPage={setCurrentPage}/>
        </div>
      ) : (
        Navigate("/")
      )}
    </>
  );
}

export default AllPosts;