import React, { useState, useContext } from 'react';
import './Styling/carousel.css';
import technology from "./pictures/technology.jpg";
import business from "./pictures/bussiness.jpg";
import environment from "./pictures/environment.jpg";
import fashion from "./pictures/fashion.jpg";
import lifestyle from "./pictures/lifestyle.jpg";
import food from "./pictures/food.jpg";
import sports from "./pictures/sports.jpg";
import newsContext from "./Context/alldata";
import { marked } from 'marked';
import DOMPurify from 'dompurify';

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { technologyData, newsData, fashionData, sportsData, foodData, environmentData, lifestyleData } = useContext(newsContext);
  
  const items = [
    { id: 1, content: 
        <div className="pic">
            <img className='tasweer' src={technology} alt="" style={{width: '100%', height: 'auto'}} /> 
            <div className="pic-content">
                <button className='technology'>Technology</button>
                <h2 dangerouslySetInnerHTML={{ __html: technologyData[3]?.title ? DOMPurify.sanitize(marked(technologyData[3]?.title)) : 'No title available', }} />
            </div>
        </div> },
    { id: 2, content: 
        <div className="pic">
            <img className='tasweer' src={business} alt="" style={{width: '100%', height: 'auto'}} /> 
            <div className="pic-content">
                <button className='business'>Business</button>
                <h2 dangerouslySetInnerHTML={{ __html: newsData[3]?.title ? DOMPurify.sanitize(marked(newsData[3]?.title)) : 'No title available', }} />
            </div>
        </div>
     },
    { id: 3, content: 
        <div className="pic">
            <img className='tasweer' src={food} alt="" style={{width: '100%', height: 'auto'}} /> 
            <div className="pic-content">
                <button className='food'>Food</button>
                <h2 dangerouslySetInnerHTML={{ __html: foodData[3]?.title ? DOMPurify.sanitize(marked(foodData[3]?.title)) : 'No title available', }} />
            </div>
        </div>
     },
    { id: 4, content: 
        <div className="pic">
            <img className='tasweer' src={environment} alt="" style={{width: '100%', height: 'auto'}} /> 
            <div className="pic-content">
                <button className='environment'>Environment</button>
                <h2 dangerouslySetInnerHTML={{ __html: environmentData[3]?.title ? DOMPurify.sanitize(marked(environmentData[3]?.title)) : 'No title available', }} />
            </div>
        </div>
     },
     { id: 5, content: 
        <div className="pic">
            <img className='tasweer' src={fashion} alt="" style={{width: '100%', height: 'auto'}} /> 
            <div className="pic-content">
                <button className='fashion'>Fashion</button>
                <h2 dangerouslySetInnerHTML={{ __html: fashionData[3]?.title ? DOMPurify.sanitize(marked(fashionData[3]?.title)) : 'No title available', }} />
            </div>
        </div>
     },
     { id: 6, content: 
      <div className="pic">
          <img className='tasweer' src={sports} alt="" style={{width: '100%', height: 'auto'}} /> 
          <div className="pic-content">
              <button className='sports'>Sports</button>
              <h2 dangerouslySetInnerHTML={{ __html: sportsData[3]?.title ? DOMPurify.sanitize(marked(sportsData[3]?.title)) : 'No title available', }} />
          </div>
      </div>
    },
     { id: 7, content: 
        <div className="pic">
            <img className='tasweer' src={lifestyle} alt="" style={{width: '100%', height: 'auto'}} /> 
            <div className="pic-content">
                <button className='lifestyle'>Lifestyle</button>
                <h2 dangerouslySetInnerHTML={{ __html: lifestyleData[3]?.title ? DOMPurify.sanitize(marked(lifestyleData[3]?.title)) : 'No title available', }} />
            </div>
        </div>
     }
  ]; 

  const totalItems = items.length;
  const visibleItems = 3;

  const moveCarousel = (direction) => {
    let newIndex = currentIndex + direction;

    if (newIndex < 0) {
      newIndex = totalItems - visibleItems;
    } else if (newIndex >= totalItems - visibleItems + 1) {
      newIndex = 0;
    }

    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel"
        style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
      >
        {items.map((item, index) => (
          <div className="carousel-item" key={item.id}>
            <div className="carousel-content">{item.content}</div>
          </div>
        ))}
      </div>
      <button className="carousel-button left" onClick={() => moveCarousel(-1)}>&#10094;</button>
      <button className="carousel-button right" onClick={() => moveCarousel(1)}>&#10095;</button>
      
    </div>
  );
}

export default Carousel; 