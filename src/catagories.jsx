import React from "react";
import ReactDOM from "react-dom/client";
import "./Styling/catagories.css";

function Catagories () {

    return (
        <div className="catagories">
            <div className="heading">
                <h3>CATEGORIES</h3>
            </div>
            <div className="single-catagory">
                <p className="business-catagory catagory">Business</p>
                <p className="environment-catagory catagory">Environment</p>
                <p className="fashion-catagory catagory">Fashion</p>
                <p className="entertainment-catagory catagory">Entertainment</p>
                <p className="technology-catagory catagory">Technology</p>
                <p className="sports-catagory catagory">Sports</p>
                <p className="lifestyle-catagory catagory">Lifestyle</p>
                <p className="food-catagory catagory">Food</p>
                <p className="music-catagory catagory">Music</p>
            </div> 
        </div>
    );
};

export default Catagories; 