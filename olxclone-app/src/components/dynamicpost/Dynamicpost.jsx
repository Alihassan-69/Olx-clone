import {useContext}  from "react";
import {Allpostcontext} from "../contextstore/Allpostcontext.jsx" ;
import PostCards from '../postcards/Postcards.jsx';
import {Link} from "react-router-dom";
import Postcards from "../postcards/Postcards.jsx";


function DynamicPosts({category}) {
    
    const {allPost}=useContext(Allpostcontext);

    let displayCards=allPost.filter((itm)=>itm.category===category).map((product,index)=>(
      <PostCards product={product} index={index} key={index} />
    ));
    
    return (
    <>
     { category!=="null" && <div>
        <div className="moreView">
          <div className="container" >
        <div className="heading">
          <span>{category}</span>
         <Link to="./viewmore">
          <span>View more</span> 
         </Link>
        </div> 
        <div className="cards">{displayCards}</div>
        <Pagination/>
      </div>
        </div>
        </div> } 
        </>
   )
}

export default DynamicPosts