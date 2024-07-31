import "./Styling/fashion.css";
import { useContext, useEffect } from "react";
import newsContext from "./Context/alldata";
import Article from "./article";

function Technology () {
    const { technologyData } = useContext(newsContext);

    return (
        <div className="newsbox">
            <div className="heading technology-heading">
                <h2>TECHNOLOGY</h2>
            </div>
            <div className="news-content">
                <div className="main-news">
                    <div className="main-news-picture">
                        <img src={technologyData[0]?.urlToImage || 'placeholder-image-url'} alt={technologyData[0]?.title} />
                    </div>
                    <h3 className="main-news-title">{technologyData[0]?.title}</h3>
                    <p>{new Date(technologyData[0]?.publishedAt).toLocaleDateString()}</p>
                    <p className="description">{technologyData[0]?.description}</p>
                </div>

                <div className="other-news">
                     <img className="other-news-picture" src={technologyData[1]?.urlToImage || 'placeholder-image-url'} alt={technologyData[1]?.title} />
                     <h4>{technologyData[1]?.title}</h4>
                 </div>

                <div className="other-news">
                     <img className="other-news-picture" src={technologyData[2]?.urlToImage || 'placeholder-image-url'} alt={technologyData[2]?.title} />
                     <h4>{technologyData[2]?.title}</h4>
               </div>
            </div>
        </div>
    );
};

export default Technology;
