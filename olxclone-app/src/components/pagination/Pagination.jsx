import { useState, useContext } from "react";
import { Allpostcontext } from "../contextstore/Allpostcontext.jsx";
import { Link } from "react-router-dom";

function Pagination({setCurrentPage}){
    const {allPostdata} = useContext(Allpostcontext);
    let [activeItem , setActiveItem] = useState("");
    let numberOfPages = [];
    let itemsPerPage = 8;
    for(let i=0; i<=Math.ceil(allPostdata.length/itemsPerPage); i++){
        numberOfPages.push(i);
    }

    const showNextPage =(e) =>{
        let clickedPage = (e.target.id);
        setActiveItem(clickedPage);
        setCurrentPage(Number(clickedPage));
    }

    let pagination = numberOfPages.map((pageNumber)=>{
        return(
            <li
            key={pageNumber}
            id={pageNumber}
            className={activeItem==pageNumber ? "active" : ""}
            onClick={showNextPage}
            >
                {pageNumber}
            </li>
        )

    })
    return(
        <div className="pagination" >
            {pagination}
        </div>
    )

} 

export default Pagination;