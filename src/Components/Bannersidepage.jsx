import React from "react";
import "../styles/Bannersidepage.css";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink, useLocation } from "react-router-dom";

export default function Bannersidepage({}) {
  const location = useLocation(); // dung useLocation cua react router de lay URL cua page va render tuong ung
  const pageName = location.pathname.replace(/-/g, " "); // vi pathing trong router co dau - nen dung replace de bo dau - khi render
  const pageTitle = getPageTitle(pageName);
  function getPageTitle(pageName) {
    // split thành array. ví dụ /movies/actions sẽ thành ["movies", "actions"] và filter để bỏ các index rỗng
    const pathParts = pageName.split("/").filter(Boolean); 
    const lastPart = pathParts[pathParts.length - 1]; // chỉ lấy index cuối cùng của array
    // chuyển chữ cái thành chữ hoa vì pathing là /movies-all
    const formattedTitle = decodeURIComponent(lastPart.replace(/-/g, " "));

    return formattedTitle;
  }

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
