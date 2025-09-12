import React,{useState} from "react";

function Create(){
    
    let [name , setName] = useState("");
    let [category, setCategory] = useState("");
    let [price , setPrice] = useState("");
    let [description , setDescription] = useState("");
    let [image , setImage] = useState("");
    
    // const handleSubmit = (e) =>{
    //     e.preventDefault();
    //     return(
    //         {name, category, price, description,image});
    //         alert("Product Created Successfully")
    // } 
    return(
        <>
    <div className="Centerdiv" >

    <label>Name</label>
    <input 
    className="input"
    type="text"
    name="name"
    value={name}
    onChange={(e) => setName(e.target.value) }
    />

    <br />

    <label>Category</label>
   <select 
   className="input"
   name="category" 
   id="category"
   onChange={(e) => setCategory(e.target.value) }
   >

    <option>Select Category</option>
    <option value="Cars">Cars</option>
    <option value="Cameras & Lenses">Cameras & Lenses</option>
    <option value="Computers & Laptops">Computers & Laptops</option>
    <option value="Mobiles">Mobiles</option>
    <option value="Bikes">Bikes</option>
    <option value="Tablets">Tablets</option>
   </select>

   <br />

   <label>Price</label>
    <input 
    className="input"
    type="text"
    name="price"
    value={price}
    onChange={(e) => setPrice(e.target.value) }
    />

    <br />

    <label>Description</label>
    <input 
    className="input"
    type="text"
    name="description"
    value={description}
    onChange={(e) => setDescription(e.target.value) }
    />

    <br />

    <label>Image</label>
     <img
          alt="Image"
          width="200px"
          height="200px"
          src={image ? URL.setImage(image) : ""}
        ></img>

    <br />

    <label >Choose File</label>
    <input type="file"
    onChange={(e) => setImage(e.target.files[0])} />

    <br />

    <button type="submit">Submit & Updated</button>
    </div>
</>
)
}

export default Create;