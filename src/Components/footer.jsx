import React from "react";
// import {FaInstagram} from "react-icons/fa"
import {FaInstagram,FaFacebook,FaTwitter,FaLinkedin} from "react-icons/fa"; // font awesome link for icons
import "../styles/footer.css"

function Footer(){
    return(
        <div className="footer">
            <div className="socialMedia">
                <FaInstagram/>
                <FaFacebook/>
                <FaTwitter/>
                <FaLinkedin/>
                 </div>
            <p>&copy; 2023 dominospizza.com</p>
        </div>
    )
}

export default Footer;