import React, { useContext, useEffect, useState } from "react";
import "../styles/Bannersidepage.css";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { FirebaseContext } from "../../Firebase/FirebaseProvider";
import { doc } from "firebase/firestore";
export default function Bannersidepage({}) {


  const location = useLocation();
  const [pageTitle, setPageTitle] = useState(""); 

  useEffect(() => {
   
    const fetchPageTitle = () => {
      const pageName = location.pathname.split("/").filter(Boolean).pop();
      const formattedTitle = decodeURIComponent(pageName.replace(/-/g, " "));
      setPageTitle(formattedTitle);
    };

    fetchPageTitle();
  }, [location.pathname]); 



  

  return (
    <section className="bannersidepage">
      <div className="bannersidepage-overlay"></div>
      <div className="bannersidepage-container">
        <div className="bannersidepage-col">
          <div className="bannersidepage-wrap">
            <div className="banersidepage-content">
              <div className="bannersidepage-content-container">
                <div className="banner-header-wrap">
                  <div className="cover-color"> </div>

                  <div className="header-banner">
                    <div className="header_breadcrumbs">
                      <div id="breadcrumbs">
                        <ul className="breadcrumbs">
                          <li className="nav-home">
                            <NavLink to={"#"}>Home</NavLink>
                          </li>
                          <li className="li_seperator">
                            <span className="seperator">
                              <IoIosArrowForward />
                            </span>
                          </li>
                          <li>{pageTitle}</li>
                        </ul>
                      </div>
                    </div>
                    <h1 className="header_title">{pageTitle}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
