import React  from "react";
import { Link }  from "react-router-dom";

function Signup(){
    return(
        <>
        <div className="signupParentDiv" >
            <form>
            <h1>Signup</h1> 

            <label htmlFor="FirstName">First Name</label>
            <input type="text" 
            id="FirstName"
            className="input"
            placeholder="Enter your First name"
            required />

            <br />

            <label htmlFor="LastName">Last Name</label>
            <input type="text" 
            id="LastName"
            className="input"
            placeholder="Enter your Last name"
            required />

            <br />

            <label htmlFor="Email">Email</label>
            <input type="Email" 
            id="Email"
            className="input"
            placeholder="Enter your Email Address"
            required />

            <br />


            <label htmlFor="PhoneNumber">Phone Number</label>
            <input type="Number" 
            id="PhoneNumber"
            className="input"
            placeholder="Enter your Phone Number"
            required />

            <br />


            <label htmlFor="Password">Password</label>
            <input type="Password" 
            id="Password"
            className="input"
            placeholder="Enter your Password"
            required />

            <br />


            <label htmlFor="ConfirmPassword">Confirm Password</label>
            <input type=" Confirm Passowrd" 
            id="ConfirmPassword"
            className="input"
            placeholder="Enter your Password"
            required />

            <br />
            <Link to="/Otp" ><button type="Submit">Send Otp</button></Link>

            </form>
        </div>
        </>
    )
}
export default Signup;