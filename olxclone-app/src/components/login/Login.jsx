import React from "react";
import { Link }  from "react-router-dom";


function Login(){
    return(
        <>
        <div>
            <h1>Login</h1>
            <label htmlFor="Email">Email</label>
            <input type="Email"
             placeholder="Enter your Email"
             id="Email"
             required />

             <br />

             <label htmlFor="Password">Password</label>
             <input type="Password"
             placeholder="Password"
             id="Password"
             required />

             <br />
             <button type="submit">Login</button>

             <br />

                     <Link to ="/signup">Signup</Link>
        
        </div>
        </>
    )
}
export default Login;