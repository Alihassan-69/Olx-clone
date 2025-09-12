import {useState , useEffect, useContext} from "react"
import { Link } from "react-router-dom";
import { Allpostcontext } from "../contextstore/Allpostcontext.jsx";
import Postcards from "../postcards/Postcards.jsx";


function Posts(){
    const {setAllPost} = useContext(Allpostcontext);
    let [posts, setPosts] = useState([]);
    let [posts2, setPosts2] = useState([]);
    let [loading , setLoading] = useState(false);
    let [loading2 , setLoading2] = useState(false);

    let quickMenuCards = posts.map((product,index)=>{
        return(
            <div className="quick-menu-cards" 
            key={index}>
            <Postcards product={product} 
            index={index} />
            </div>
        )})

        let freshRecommendationCards = posts2.map((product,index)=>{ if(index<4){
            return(
                <div className="fresh-recommendation-cards" 
                key={index}>
                <Postcards product={product} 
                index={index} />
                </div>
            )}
            return null
        })
            return(
                <div className="postsParentDiv">
                    <div className="container">
                        {posts && (
                            <div className="moreView" >
                                <div className="heading" >
                                    <span>Quick Menu</span>
                                    <Link to = "./viewmore" >{" "}
                                    <span>View more</span> {" "}
                                    </Link>
                                </div>
                                <div className="cards"> 
                                    {" "}
                                    {loading ? <BarLoading/> : quickMenuCards}
                                </div>

                            </div>
                        )}
                        <div className="recommendations" >
                        <div className="heading" >
                            <span>Fresh Recommendations</span>
                        </div>
                        <div className="fresh-recommendation-cards " >
                        {loading2 ? <BarLoading/> : freshRecommendationCards}
                        </div>
                        </div>

                    </div>
                </div>
            )}

export default Posts;