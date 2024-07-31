import "./Styling/fashion.css";
import { useContext, useEffect } from "react";
import newsContext from "./Context/alldata";

function Fashion () {
    const { fashionData } = useContext(newsContext);

    return (
        <div className="newsbox">
            <div className="heading fashion-heading">
                <h2>FASHION</h2>
            </div>
            <div className="news-content">
                <div className="main-news">
                    <div className="main-news-picture">
                        <img src={fashionData[0]?.urlToImage || 'placeholder-image-url'} alt={fashionData[0]?.title} />
                    </div>
                    <h3 className="main-news-title">{fashionData[0]?.title}</h3>
                    <p>{new Date(fashionData[0]?.publishedAt).toLocaleDateString()}</p>
                    <p className="description">{fashionData[0]?.description}</p>
                </div>

                <div className="other-news">
                     <img className="other-news-picture" src={fashionData[1]?.urlToImage || 'placeholder-image-url'} alt={fashionData[1]?.title} />
                     <h4>{fashionData[1]?.title}</h4>
                 </div>

                <div className="other-news">
                     <img className="other-news-picture" src={fashionData[2]?.urlToImage || 'placeholder-image-url'} alt={fashionData[2]?.title} />
                     <h4>{fashionData[2]?.title}</h4>
               </div>
            </div>
        </div>
    );
};

export default Fashion;
