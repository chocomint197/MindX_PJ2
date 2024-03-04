import React, { useState } from "react";
import "../styles/Navbarstyle.css";
import { IoMdSearch } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { useRef } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [scroll, setScroll] = useState(false);
  const clickSearch = () => {
    setShowSearch(true);
  };


  // const searchRef = useRef(null);


  // const clickOutside = (event) => {
  //   if (searchRef.current && !searchRef.current.contains(event.target) && !event.target.classList.contains("search-field")) {
  //     setShowSearch(false);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener("click", clickOutside);
  //   return () => {
  //     document.removeEventListener("click", clickOutside);
  //   };
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navigation-bar ${scroll ? "scrolled" : ""}`}>
      <div className="navbarContent">
        <div className="navbar-brand">
          <a href="#" className=".orange-link">
            <img
              src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/02/logo-white.png"
              alt="Aovis – Film & Movie Booking WordPress Theme"
            />
          </a>
        </div>
        <div className="navbar-main">
          <ul className="menu">
            <li className="menu-item">
            <NavLink to={"/#"}>Home</NavLink>
            </li>
            <li className="menu-item">
            <NavLink to={"/#"}>Movies</NavLink>

              <ul className="sub-menu">
                <li>
                  <a href="movie-all">Movies all</a>
                </li>
                <li>
                  <a href="movie-now-playing">Movies Now Playing</a>
                </li>
                <li>
                  <a href="movie-coming-soon">Movies Coming Soon</a>
                </li>
                <li>
                  <a href="movie-category">Movies Category</a>
                </li>
                <li>
                  <a href="movie-filter">Movies Filter</a>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <a href="" className="arrow-down">
                Events
              </a>
              <ul className="sub-menu">
                <li>
                  <a href="event-list">Event List</a>
                </li>
                <li>
                  <a href="event-grid">Event Grid</a>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <a href="pages" className="arrow-down">
                Pages
              </a>
              <ul className="sub-menu">
                <li>
                  <a href="About">About</a>
                </li>
                <li>
                  <a href="Faq">Out Faqs</a>
                </li>
                <li>
                  <a href="404">404</a>
                </li>
                <li>
                  <a href="Account">My Account</a>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <a href="News">News</a>
            </li>
            <li className="menu-item">
              <a href="">Contact</a>
              <ul className="sub-menu"></ul>
            </li>
          </ul>
        </div>
        <div className="utility-bar">
          <div className="search" >
            <IoMdSearch className="navbar-icon search-icon" onClick={clickSearch}/>
            {showSearch && (
            <div className="search-popup">
            <div className="search-popup-overlay">

                <div className="search-box">
                  <form action="" role="search" method="get">
                    <input
                      type="search"
                      className="search-field"
                      placeholder="Search ..."
                      valuename="s"
                      title="Search for:"
                    />
                    <button type="submit" className="search-submit">
                      <IoMdSearch className="search-icon-box" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
            )}
          </div>
          <div className="login">
            <a href="">
              <CiUser className="navbar-icon login-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
