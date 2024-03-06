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
            <NavLink to={"/movies-all"}>Movies</NavLink>

              <ul className="sub-menu">
                <li>
                <NavLink to={"/movies-all"}>Movies All</NavLink>
                </li>
                <li>
                <NavLink to={"/movies-now-playing"}>Movies Now Playing</NavLink>
                </li>
                <li>
                <NavLink to={"/movies-coming-soon"}>Movies Coming Soon</NavLink>
                </li>
              </ul>
            </li>
            <li className="menu-item">
            <NavLink to={"/events"}>Events</NavLink>

              <ul className="sub-menu">
                <li>
                <NavLink to={"/events"}>Events grid</NavLink>
                </li>
                <li>
                <NavLink to={"/events-list"}>Events list</NavLink>
                </li>
              </ul>
            </li>
            <li className="menu-item">
            <NavLink to={"/about"}>Pages</NavLink>

              <ul className="sub-menu">
                <li>
                <NavLink to={"/about"}>About</NavLink>            
                    </li>
                <li>
                <NavLink to={"/faqs"}>Our Faqs</NavLink>            
                </li>
                <li>
                <NavLink to={"/my-account"}>My Account</NavLink>            
                </li>
              </ul>
            </li>
            <li className="menu-item">
            <NavLink to={"/news"}>News</NavLink>            
            </li>
            <li className="menu-item">
            <NavLink to={"/contact"}>Contact</NavLink>            
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
