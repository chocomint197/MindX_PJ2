import React from "react";
import Navbar from "./Navbar";
import Slider from "./Slider";
import Moviesplaying from "./Moviesplaying";
import Featuredmovie from "./Featuredmovie";
import Bigbanner from "./Bigbanner";
import Photogallery from "./Photogallery";
import Upcomingevent from "./Upcomingevent";
import Logoslider from "./Logoslider";
import Ourfeedback from "./Ourfeedback";
import Moviecomingsoon from "./Moviecomingsoon";
import Directlyblog from "./Directlyblog";
import { PiFilmReelBold } from "react-icons/pi";
import SideIntroduce from "./SideIntroduce";
import Footer from "./Footer";

export default function Homepage() {
  return (
    <div className="home">
      <div className="header">
        <Navbar></Navbar>
        <Slider></Slider>
        <img
          src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/02/image-lines-header.jpg"
          alt=""
        />
      </div>
      <div className="content">
        <Moviesplaying />
        <Featuredmovie />
        <Bigbanner />
        <Photogallery />
        <Upcomingevent />
        <Logoslider />
        <Ourfeedback />
        <Moviecomingsoon />
        {/* sale off banner*/}
        <section className="sale-banner">
          <div className="sale-banner-container">
            <div className="sale-banner-content">
              <div className="sale-banner-wrap">
                <div className="sale-banner-overlay"></div>
                <div className="sale-banner-text">
                  <p>40% Discount for Students</p>
                </div>
                <div className="sale-banner-btn">
                  <div className="sale-banner-btn-container">
                    <div className="sale-banner-btn-wrapper">
                      <button className="sale">Book Your Ticket</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* direcly blost post section */}
        <section className="directly-post-section">
          <div className="directly-section-overlay"></div>
          <div className="directly-section-heading">
            <div className="directly-section-heading-container">
              <div className="direclty-section-heading-context">
                <div className="directly-section-text-container">
                  <div className="icon">
                    <PiFilmReelBold className="direclty-icon" />
                  </div>
                  <div className="top-heading">
                    <h3 className="sub-title">Directly Blog Posts</h3>
                    <h2 className="title">
                      Latest New & Articles from the Posts
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* directly blog post item section */}
        <Directlyblog/>
        {/* Side introduce near footer */}
        <SideIntroduce/>
        {/* Footer */}
        <Footer/>
      </div>
    </div>
  );
}
