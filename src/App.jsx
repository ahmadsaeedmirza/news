import React from "react";
import ReactDOM from "react-dom/client";
import { useContext, useEffect } from "react";
import Navbar from "./navbar";
import Carousel from "./carousel";
import "./Styling/App.css";
import Fashion from "./fashion";
import Business from "./business";
import Technology from "./technology";
import Sports from "./sports";
import Catagories from "./catagories";
import LatestArticles from "./latestarticles";
import Footer from "./footer";
import newsContext from "./Context/alldata";

function App () {

 const { fetchNews } = useContext(newsContext);

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div>

      <Navbar />
      <Carousel />

      <div className="outer-box">

          <div className="inside-box-left">
            <div className="row1">
              <Fashion />
              <Business />
            </div>

            <div className="row2">
              <Technology />
              <Sports />
            </div>
            <LatestArticles />
          </div>

          <div className="inside-box-right">
            <Catagories />
          </div>
      </div> 

      <Footer />

    </div>
  );
};

export default App; 
