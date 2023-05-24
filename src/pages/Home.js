import React from "react";
// import bgImg from "../assets/pizza.jpeg";
import {Link} from "react-router-dom";
import "../styles/home.css"

function Home(){
    return(
        <div className="home" > 
                <div className="headerContainer" >
                <h1>Dominos Pizza</h1>
                <p>Serving You Delicious Pizza around the World </p>
                 <Link to="/menu">
                    <button>Order Now</button>
                </Link>
            </div>
        </div>
    )
};

export default Home;