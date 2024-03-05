import React from "react";
import "../styles/Directlyblog.css";
import { PiFilmReelBold } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { FaComments } from "react-icons/fa";

export default function Directlyblog() {
  return (
    <section className="directly-post-item-section">
      <div className="post-section-container">
        <div className="post-section-col">
          <div className="post-section-wrap">
            <div className="post-section-item-container">
              <ul>
                <li>
                  <div className="post-media">
                    <div className="post-img">
                      <NavLink to={"/#"}>
                        <img
                          src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/blog-4.jpg"
                          alt=""
                        />
                        <div className="post-img-overlay"></div>
                      </NavLink>
                    </div>
                    <div className="post-date">
                      <span className="date"> 23 Mar, 2023 </span>
                    </div>
                  </div>
                  <div className="post-content">
                    <ul className="post-meta">
                      <li className="item-meta author">
                        <span className="left author">
                          <img
                            src="https://secure.gravatar.com/avatar/48edf980314d87b06d469d183ebcb4a8?s=96&d=mm&r=g"
                            alt=""
                          />
                        </span>
                        <span className="right post-author">
                          <span className="by">
                            by
                            <NavLink to={"/#"}> Duno</NavLink>
                          </span>
                        </span>
                      </li>
                      <li className="item-meta post-comment">
                        <span className="left comment">
                          <FaComments className="comment-icon" />
                        </span>
                        <span className="right comment">
                          <NavLink to={"/#"}>0 Comments</NavLink>
                        </span>
                      </li>
                    </ul>
                    <h2 className="post-title">
                      <NavLink to={"/#"}>
                        See Meila enjoyable capturing moment
                      </NavLink>
                    </h2>
                    <div className="read-more">
                      <NavLink to={"/#"}>Read more</NavLink>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="post-media">
                    <div className="post-img">
                      <NavLink to={"/#"}>
                        <img
                          src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/blog-5.jpg"
                          alt=""
                        />
                        <div className="post-img-overlay"></div>
                      </NavLink>
                    </div>
                    <div className="post-date">
                      <span className="date"> 23 Mar, 2023 </span>
                    </div>
                  </div>
                  <div className="post-content">
                    <ul className="post-meta">
                      <li className="item-meta author">
                        <span className="left author">
                          <img
                            src="https://secure.gravatar.com/avatar/48edf980314d87b06d469d183ebcb4a8?s=96&d=mm&r=g"
                            alt=""
                          />
                        </span>
                        <span className="right post-author">
                          <span className="by">
                            by
                            <NavLink to={"/#"}> Duno</NavLink>
                          </span>
                        </span>
                      </li>
                      <li className="item-meta post-comment">
                        <span className="left comment">
                          <FaComments className="comment-icon" />
                        </span>
                        <span className="right comment">
                          <NavLink to={"/#"}>0 Comments</NavLink>
                        </span>
                      </li>
                    </ul>
                    <h2 className="post-title">
                      <NavLink to={"/#"}>
                        The Foreign Oscar Nominations 2023{" "}
                      </NavLink>
                    </h2>
                    <div className="read-more">
                      <NavLink to={"/#"}>Read more</NavLink>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="post-media">
                    <div className="post-img">
                      <NavLink to={"/#"}>
                        <img
                          src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/blog-6.jpg"
                          alt=""
                        />
                        <div className="post-img-overlay"></div>
                      </NavLink>
                    </div>
                    <div className="post-date">
                      <span className="date"> 23 Mar, 2023 </span>
                    </div>
                  </div>
                  <div className="post-content">
                    <ul className="post-meta">
                      <li className="item-meta author">
                        <span className="left author">
                          <img
                            src="https://secure.gravatar.com/avatar/48edf980314d87b06d469d183ebcb4a8?s=96&d=mm&r=g"
                            alt=""
                          />
                        </span>
                        <span className="right post-author">
                          <span className="by">
                            by
                            <NavLink to={"/#"}> Duno</NavLink>
                          </span>
                        </span>
                      </li>
                      <li className="item-meta post-comment">
                        <span className="left comment">
                          <FaComments className="comment-icon" />
                        </span>
                        <span className="right comment">
                          <NavLink to={"/#"}>0 Comments</NavLink>
                        </span>
                      </li>
                    </ul>
                    <h2 className="post-title">
                      <NavLink to={"/#"}>
                        Upcoming New Season 5 Just Flow in !{" "}
                      </NavLink>
                    </h2>
                    <div className="read-more">
                      <NavLink to={"/#"}>Read more</NavLink>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
