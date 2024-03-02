import React, { useState } from "react";
import "../styles/Moviesplaying.css";
import { PiFilmReel,} from "react-icons/pi";
import { GiCarnivalMask, GiOldMicrophone, GiTargetPrize } from "react-icons/gi";

import Nowplaying from "./Nowplaying";


export default function Moviesplaying() {
  const [activeDot, setActiveDot] = useState(0);

  const handleDotClick = (index) => {
    setActiveDot(index);
  };

  return (
    <div className="movies-playing">
        <div className="background-overlay">

        </div>
    <div className="featured-banner">
      <div className="featured-item">
        <div className="featured-content">
          <div
            className="background"
            style={{
              backgroundImage:
                "url(https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/bg-film-01.png)",
            }}
          ></div>
          <div className="text-content">
            <p className="subtitle">Join Now</p>
            <h3 className="title">Upcoming Film Festivals</h3>
            
          </div>
          <span className="featured-icon">
              <GiCarnivalMask className="flaticon" />
            </span>
        </div>
      </div>
      <div className="featured-item">
        <div className="featured-content">
          <div
            className="background"
            style={{
              backgroundImage:
                "url(https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/bg-film-01.png)",
            }}
          ></div>
          <div className="text-content">
            <p className="subtitle">Watch Now</p>
            <h3 className="title">Watch Film Awards</h3>
           
          </div>
          <span className="featured-icon">
              <GiTargetPrize className="flaticon" />
            </span>
        </div>
      </div>
      <div className="featured-item">
        <div className="featured-content">
          <div
            className="background"
            style={{
              backgroundImage:
                "url(https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/bg-film-01.png)",
            }}
          ></div>
          <div className="text-content">
            <p className="subtitle">Get Ticket</p>
            <h3 className="title">Comedy TV Shows</h3>
            
          </div>
          <span className="featured-icon">
              <GiOldMicrophone  className="flaticon" />
            </span>
        </div>
      </div>
    </div>
    <div className="movies-now-playing">
        <div className="movies-playing-container">
            <div className="movies-playing-content">
                <div className="watch-new-movies">
                    <div className="new-movies-icon">
                    <PiFilmReel className="flaticon film-roll"/>
                    </div>
                    <div className="top-heading">
                        <h3 className="subtitle">Watch New Movies</h3>
                        <h2 className="title">Movies Now Playing</h2>
                    </div>
                </div>
                <div className="movies-playing-show">
                    <div className="playing-show-content">
                        <div className="playing-show-carousel">
                            <Nowplaying activeDot={activeDot} handleDotClick={handleDotClick}/>
                        </div>
                    </div>
                </div>
                <div className="dots">
        <button
          className={activeDot === 0 ? 'dotActive' : ''}
          onClick={() => handleDotClick(0)}
        >
          <span></span>
        </button>
        <button
          className={activeDot === 1 ? 'dotActive' : ''}
          onClick={() => handleDotClick(1)}
        >
          <span></span>
        </button>
      </div>
            </div>
            
        </div>
        </div>  
    </div>

  );
}
