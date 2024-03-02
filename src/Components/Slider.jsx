import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Slider.css";
import { FirebaseContext } from "../../Firebase/FirebaseProvider";
import React, { useState, useEffect, useContext } from "react";
import { query, limit, getDocs } from "firebase/firestore";
import { FaTwitter, FaFacebookF, FaPinterestP } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";

function ThumbnailSlider({ imageTrailers, videoTrailers, activeIndex }) {
  // mini slider
  //handle dragger mini trailers
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(null);
  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - e.currentTarget.offsetLeft);
    setScrollLeft(e.currentTarget.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - e.currentTarget.offsetLeft;
    const walk = (x - startX) * 1; 
    e.currentTarget.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="trailer-slider-wrapper">
      <img
        src="https://demo.ovatheme.com/aovis/wp-content/plugins/movie-booking/assets/img/arrow-watch-trailer.png"
        alt=""
        className="arrow-trailer"
      />
      <span className="text-trailer">Trailers</span>
      <div
        className="trailer-slider"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {imageTrailers.map((trailer, index) => (
          <div className="trailer-draggable" key={index}>
            <div className="drag-track">
              <div className="slick-slide">
                <div className="movie-trailer-item">
                <div className={`movie-trailer-media ${imageTrailers[index].id === activeIndex ? 'active' : ''}`}>
                    <img src={trailer} />
                    <div className="has-trailer">
                      <div className="trailer-video" src={videoTrailers[index]}>
                        <FaPlay className="trailer-play" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Slider() {
  // big slider
  const { app, messCollect } = useContext(FirebaseContext);
  const [carouselItems, setCarouselItems] = useState([]);
  const [bigSliderImages, setBigSliderImages] = useState([]);
  const [trailers, setTrailers] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);


  const handleBigSliderChange = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };
  
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Lấy data từ Firestore và  chỉ lấy 3 item đầu tiên để render ra slider
        const q = query(messCollect, limit(3));
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCarouselItems(data);
        // truyen hinh anh xuong mini slider
        const images = data.map((item) => item.img);
        setBigSliderImages(images);
        // truyen link trailer xuong mini slider
        const videos = data.map((item) => item.videoTrailer);
        setTrailers(videos);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();

    return () => {};
  }, [app, messCollect]);

   

  return (
    <div className="main-slider">
      <Carousel controls={false} indicators={false} activeIndex={activeIndex} interval={2000}>
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
        imageTrailers={bigSliderImages}
        videoTrailers={trailers}
        activeIndex={activeIndex}
        />
    </div>
  );
}

export default Slider;
