import "./Styling/fashion.css";
import { useContext, useEffect } from "react";
import newsContext from "./Context/alldata";

function Sports () {
    const { sportsData } = useContext(newsContext);

    return (
        <div className="newsbox">
            <div className="heading sports-heading">
                <h2>SPORTS</h2>
            </div>
            <div className="news-content">
                <div className="main-news">
                    <div className="main-news-picture">
                        <img src={sportsData[0]?.urlToImage || 'placeholder-image-url'} alt={sportsData[0]?.title} />
                    </div>
                    <h3 className="main-news-title">{sportsData[0]?.title}</h3>
                    <p>{new Date(sportsData[0]?.publishedAt).toLocaleDateString()}</p>
                    <p className="description">{sportsData[0]?.description}</p>
                </div>

                <div className="other-news">
                     <img className="other-news-picture" src={sportsData[1]?.urlToImage || 'placeholder-image-url'} alt={sportsData[1]?.title} />
                     <h4>{sportsData[1]?.title}</h4>
                 </div>

                <div className="other-news">
                     <img className="other-news-picture" src={sportsData[2]?.urlToImage || 'placeholder-image-url'} alt={sportsData[2]?.title} />
                     <h4>{sportsData[2]?.title}</h4>
               </div>
            </div>
        </div>
    );
};

export default Sports;
