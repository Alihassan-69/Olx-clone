import { useContext } from "react";
import {useNavigate} from "react-router-dom"
import { PostContext } from "../contextstore/PostContext.jsx";


function Postcards({product,index}){
    let {setPostContext} = useContext(PostContext)
    const navigate = useNavigate();

    return(
        <>

        <div className="cards" key={index} onClick={() => {
            setPostContext(product);
            navigate('/view');
        }} >

        <div className="images">
        <img src={product.url} alt="" />
        </div>
        <div>
            <p>Rs.{product.price}</p>
            <span className="category" >{product.category}</span>
            <p>{product.name}</p>
        </div>
        <div>
            <span className="dates" >{product.createdAt}</span>
        </div>
        </div>
        </>
    )
} 

export default Postcards;