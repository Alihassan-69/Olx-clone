import React,{useState} from "react";
import DynamicPosts from "../dynamicpost/Dynamicpost";

function Navbar(){
    let [Category, setCategory] = useState();

    return(
        <>
        <div className="bannerChildDiv">
            <div className="menubar" >
                <div className="menuBar" >
        <select style={{color:"black"}} name="Category" id="Category" onChange={(e)=>{setCategory(e.target.value)}}>{" "}
            <option value="null">All Category</option>
            <option value="Cars">Cars</option>
            <option value="Cameras & Lenses">Cameras & Lenses</option>
            <option value="Computers & Laptops">Computers & Laptops</option>
            <option value="Mobiles">Mobiles</option>
            <option value="Bikes">Bikes</option>
            <option value="Tablets">Tablets</option>
        </select>
        </div>
    <div className="otherQuickOptions">
            <span onClick={()=>setCategory("Cars")} ></span>
            <span onClick={()=>setCategory("Cameras & Lenses")} >Cameras & Lenses</span>
            <span onClick={()=>setCategory("Computers & Laptops")} >Computers & Laptops</span>
            <span onClick={()=>setCategory("Mobiles")} >Mobiles</span>
            <span onClick={()=>setCategory("Bikes")} >Bikes</span>
            <span onClick={()=>setCategory("Tablets")} >Tablets</span>
                </div>
            </div>
            { Category!=null && <DynamicPosts category={Category}/>}
        </div>
        </>
    )
}

export default Navbar;