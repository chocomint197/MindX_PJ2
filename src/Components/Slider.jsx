import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Slider.css";
import "../styles/Trailerpopup.css"
import { FirebaseContext } from "../../Firebase/FirebaseProvider";
import React, { useState, useEffect, useContext } from "react";
import { query, limit, getDocs } from "firebase/firestore";
import { FaTwitter, FaFacebookF, FaPinterestP } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";
import ReactPlayer from "react-player";
import { ImCancelCircle } from "react-icons/im";

function ThumbnailSlider({ imageTrailers, videoTrailers, onPlayButtonClick }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState("");
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(null); 

// set popup cho trailer
  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  const handlePlayButtonClick = (videoUrl, index) => {
    setSelectedVideoIndex(index);
    setSelectedVideoUrl(videoUrl);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  const popupStyle = {
    display: showPopup ? 'flex' : 'none'
  };

// set interval
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === imageTrailers.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, [imageTrailers.length]);

  return (
    <div className="trailer-slider-wrapper">
      <img
        src="https://demo.ovatheme.com/aovis/wp-content/plugins/movie-booking/assets/img/arrow-watch-trailer.png"
        alt=""
        className="arrow-trailer"
      />
      <span className="text-trailer">Trailers</span>
      <div className="custom-carousel-dots-container">
        {imageTrailers.map((_, index) => (
          <div
            key={index}
            className={`custom-carousel-dot ${
              index === activeIndex ? "active" : ""
            }`}
            onClick={() => handleSelect(index)}
          ></div>
        ))}
      </div>
      <Carousel controls={false} indicators={false} interval={null}>
        {imageTrailers.map((trailer, index) => (
          <Carousel.Item key={index} className="trailer-draggable">
            <div className="drag-track">
              <div className="slick-slide">
                <div className="movie-trailer-item">
                  <div className="movie-trailer-media">
                    <img src={trailer} alt={`Trailer ${index + 1}`} />
                    <div className="has-trailer">
                      <div
                        className="trailer-video"
                        onClick={() => handlePlayButtonClick(videoTrailers[index], index)}
                        
                      >
                        <FaPlay className="trailer-play" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Popup trailer */}
      {showPopup && (
    <div className="trailer-popup" style={popupStyle}>
    <div className="trailer-popup-container fullscreen">
            <div className="trailer-popup-content">
            <ImCancelCircle className="close-button" onClick={handleClosePopup}/>
                
              <div className="trailer-here">
              <ReactPlayer
              url={selectedVideoUrl}
              width="100%"
              height="100%"
              controls={false}
            />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Slider() {
  const { app, messCollect } = useContext(FirebaseContext);
  const [carouselItems, setCarouselItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(messCollect, limit(3));
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCarouselItems(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [app, messCollect]);

  return (
    <div className="main-slider">
      <Carousel controls={false} indicators={false} interval={5000}>
        {carouselItems.map((item) => (
          <Carousel.Item className="big-slider" key={item.id}>
            <img src={item.img} alt={item.nameFilm} />
            <div className="big-slider-overlay">
              <div className="movie-sharing">
                <span className="text-share">Share</span>
                <span className="line"></span>
                <ul className="share-social">
                  <li>
                    <a>
                      <FaTwitter className="share-social-icon" />
                    </a>
                  </li>
                  <li>
                    <a>
                      <FaFacebookF className="share-social-icon" />
                    </a>
                  </li>
                  <li>
                    <a>
                      <FaPinterestP className="share-social-icon" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="big-slider-text">
                <div className="big-slider-heading">
                  <h3 className="big-slider-movie-category">
                    {item.infoFilm.catagory[0]}
                  </h3>
                  <a href="">
                    <h1 className="big-slider-movie-title">{item.nameFilm}</h1>
                  </a>
                </div>
                <p className="big-slider-excerpt">
                  Writen and Directed by {item.infoFilm.director}
                </p>
                <div className="big-slider-button">
                  <a>
                    <button className="more-info">More info</button>
                  </a>
                  <button className="button-booking">Get ticket</button>
                </div>
              </div>

              <div className="big-slider-release">
                <span className="text">In theater</span>
                <h3 className="time">{item.infoFilm.releaseDate}</h3>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <ThumbnailSlider
        imageTrailers={carouselItems.map((item) => item.img)}
        videoTrailers={carouselItems.map((item) => item.videoTrailer)}
        onPlayButtonClick={(videoUrl) => setShowPopup(true)}
      />
    </div>
  );
}

export default Slider;
