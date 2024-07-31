import "./Styling/fashion.css";
import { useContext, useEffect } from "react";
import newsContext from "./Context/alldata";
import { marked } from 'marked';

function Business() {
    const { newsData } = useContext(newsContext);

    return (
        <div className="newsbox">
            <div className="heading business-heading">
                <h2>BUSINESS</h2>
            </div>
            <div className="news-content">
                <div className="main-news">
                    <div className="main-news-picture">
                        <img src={newsData[0]?.urlToImage || 'placeholder-image-url'} alt={newsData[0]?.title} />
                    </div>
                    <h3 className="main-news-title">{newsData[0]?.title}</h3>
                    {/* <div dangerouslySetInnerHTML={{ __html: marked(newsData[0]?.title) }} /> */}
                    <p>{new Date(newsData[0]?.publishedAt).toLocaleDateString()}</p>
                    <p className="description">{newsData[0]?.description}</p>
                </div>

                <div className="other-news">
                     <img className="other-news-picture" src={newsData[1]?.urlToImage || 'placeholder-image-url'} alt={newsData[1]?.title} />
                     <h4>{newsData[1]?.title}</h4>
                 </div>

                <div className="other-news">
                     <img className="other-news-picture" src={newsData[2]?.urlToImage || 'placeholder-image-url'} alt={newsData[2]?.title} />
                     <h4>{newsData[2]?.title}</h4>
               </div>
            </div>
        </div>
    );
};

export default Business;
