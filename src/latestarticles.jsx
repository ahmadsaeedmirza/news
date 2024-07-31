import React, { useState, useContext } from "react";
import ReactDOM from "react-dom/client";
import "./Styling/latestarticles.css";
import newsContext from "./Context/alldata";

function LatestArticles () {

    const { fashionData, musicData, businessData, lifestyleData, foodData, entertainmentData, environmentData, cryptocurrencyData } = useContext(newsContext);

    return (
        <div className="latest-articles">
            <div className="heading">
                <h2>LATEST ARTICLES</h2>
            </div>
            <div className="different-articles">

                <div className="single-article">
                    <div className="latest-article-picture">
                        <img src={environmentData[4]?.urlToImage || 'placeholder-image-url'} alt={environmentData[4]?.title} />
                    </div>
                    <div className="single-article-inner-div subheading-environment">
                        <p>ENVIRONMENT</p>
                        <h4>{environmentData[4]?.title}</h4>
                    </div>
                </div>

                <div className="single-article">
                    <div className="latest-article-picture">
                        <img className="latest-article-picture" src={musicData[4]?.urlToImage || 'placeholder-image-url'} alt={musicData[4]?.title} />
                    </div>
                    <div className="single-article-inner-div subheading-music">
                        <p>MUSIC</p>
                        <h4>{musicData[4]?.title}</h4>
                    </div>
                </div>

                <div className="single-article">
                    <div className="latest-article-picture">
                        <img className="latest-article-picture" src={lifestyleData[4]?.urlToImage || 'placeholder-image-url'} alt={lifestyleData[4]?.title} />
                    </div>
                    <div className="single-article-inner-div subheading-lifestyle">
                        <p>LIFESTYLE</p>
                        <h4>{lifestyleData[4]?.title}</h4>
                    </div>
                </div>

                <div className="single-article">
                    <div className="latest-article-picture">
                        <img className="latest-article-picture" src={foodData[4]?.urlToImage || 'placeholder-image-url'} alt={foodData[4]?.title} />
                    </div>        
                    <div className="single-article-inner-div subheading-food">
                        <p>FOOD</p>
                        <h4>{foodData[4]?.title}</h4>
                    </div>
                </div>

                <div className="single-article">
                    <div className="latest-article-picture">
                        <img className="latest-article-picture" src={cryptocurrencyData[4]?.urlToImage || 'placeholder-image-url'} alt={cryptocurrencyData[4]?.title} />
                    </div>
                    <div className="single-article-inner-div subheading-crypto">
                        <p>CRYPTOCURRENCY</p>
                        <h4>{cryptocurrencyData[4]?.title}</h4>
                    </div>
                </div>

                <div className="single-article">
                    <div className="latest-article-picture">
                        <img className="latest-article-picture" src={entertainmentData[4]?.urlToImage || 'placeholder-image-url'} alt={entertainmentData[4]?.title} />
                    </div>
                    <div className="single-article-inner-div subheading-entertainment">
                        <p>ENTERTAINMENT</p>
                        <h4>{entertainmentData[4]?.title}</h4>
                    </div>
                </div>

                <div className="single-article">
                    <div className="latest-article-picture">
                        <img className="latest-article-picture" src={fashionData[4]?.urlToImage || 'placeholder-image-url'} alt={fashionData[4]?.title} />
                    </div>
                    <div className="single-article-inner-div subheading-fashion">
                        <p>FASHION</p>
                        <h4>{fashionData[4]?.title}</h4>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default LatestArticles;