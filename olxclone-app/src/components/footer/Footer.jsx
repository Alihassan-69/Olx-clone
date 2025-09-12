import React from "react";
import "../footer/Footer.css"

function Footer(){
    return(
        <div className="FooterParentDiv">

        <div className="content">
        <div className="container">
        <div>
        <div className="heading">
        <p className="para">
        Popular Location</p>
        </div>

        <div className="footerlist"> 
            <ul>
                <li>Karachi</li>
                <li>Hyderabad</li>
                <li>Islamabad</li>
                <li>Lahore</li>
            </ul>
        </div>
        </div>
        <div className="FooterHeading">
            <p className="para">About Us</p>
        </div>
        <div className="footerlist">
            <ul>
                <li>About Olx Group</li>
                <li>Career</li>
                <li>Contact Us</li>
                <li>Olx User</li>
            </ul>
        </div>
        </div>
        <div className="FooterHeading">
                <ul>
                    <li>Help</li>
                    <li>Sitemap</li>
                    <li>Legal & Privacy Information</li>
                </ul>
        </div>
        <div className="footer">
            <p className="para" >Other Countries Pakistan - South Africa - Indonesia</p>
            <p className="para" >Free Classifieds in Pakistan. © 2006-2025 Olx </p>
        </div>
        </div>
        </div>
    )
}

export default Footer; 