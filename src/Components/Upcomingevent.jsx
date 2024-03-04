import React from "react";
import "../styles/Upcomingevent.css";
import { PiFilmReelBold } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { FaClock } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";

export default function Upcomingevent() {
  return (
    <div className="upcoming-event-section">
      <div className="upcoming-event-bg-overlay"></div>
      <div className="upcoming-event-container">
        <div className="upcoming-left">
          <div className="upcoming-left-container">
            <div className="upcoming-left-header">
              <div className="upcoming-left-header-container">
                <div className="upcoming-left-content-container">
                  <div className="upcoming-left-content">
                    <div className="upcoming-left-icon">
                      <PiFilmReelBold className="upcoming-icon" />
                    </div>
                    <div className="upcoming-left-heading">
                      <h3 className="sub-title">Upcoming Event</h3>
                      <h2 className="title">
                        Register Yourself Now for the Events
                      </h2>
                    </div>
                    <p className="description">
                      Every man must decide whether he will walk in the light of
                      creative altruism or in the darkness of eritdestructive
                      selfishness. Ut porttitor et lectus ut tempus. Aliquam
                      lacinia justo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="upcoming-left-bottom">
              <div className="upcoming-left-bottom-container">
                <div className="upcoming-left-btn-wrapper">
                  <NavLink className="button-link" to={"/#"}>
                    <span className="button-content-wrapper">
                      <span className="button-text">More info</span>
                    </span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="upcoming-right">
          <div className="upcoming-right-wrap">
            <div className="upcoming-right-container">
              <div className="upcoming-right-event">
                <div className="container-event">
                  <div className="main-event">
                    <div className="archieve_event">
                      <div className="event-item">
                        <div className="event-item-type1">
                          {/* Thumbnail */}
                          <div className="event-desc">
                            <div className="event-thumbnail">
                              {/* Display highlight date */}
                              <div className="date-event">
                                <span className="date">26 Mar, 2025</span>
                              </div>
                              <NavLink className="event-img " to={"/#"}>
                                <img
                                  src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/Event06.jpg"
                                  alt=""
                                />
                              </NavLink>
                            </div>
                            <div className="event-post">
                              <div className="meta-event">
                                <div className="time-qual-date">
                                  <span className="icon-time">
                                    <FaClock />
                                  </span>
                                  <span className="time-date-children">
                                    <span className="date-child">
                                      14:00 - 18:00
                                    </span>{" "}
                                  </span>
                                </div>
                                <div className="venue">
                                  <FaLocationPin className="icon-location" />
                                  <span>New York</span>
                                </div>
                              </div>
                              {/*Title */}
                              <h2 className="event-title">
                                <NavLink to={"#"}>
                                  Best Magical Movies Ever Made
                                </NavLink>
                              </h2>
                              {/* Read more button */ }
                              <div className="button-event">
                                <NavLink className="view-detail"to={"#"}>Read More</NavLink>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="event-item">
                        <div className="event-item-type1">
                          {/* Thumbnail */}
                          <div className="event-desc">
                            <div className="event-thumbnail">
                              {/* Display highlight date */}
                              <div className="date-event">
                                <span className="date">26 Mar, 2025</span>
                              </div>
                              <NavLink className="event-img " to={"/#"}>
                                <img
                                  src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/Event05.jpg"
                                  alt=""
                                />
                              </NavLink>
                            </div>
                            <div className="event-post">
                              <div className="meta-event">
                                <div className="time-qual-date">
                                  <span className="icon-time">
                                    <FaClock />
                                  </span>
                                  <span className="time-date-children">
                                    <span className="date-child">
                                    16:00 - 22:00
                                                                        </span>{" "}
                                  </span>
                                </div>
                                <div className="venue">
                                  <FaLocationPin className="icon-location" />
                                  <span>New York</span>
                                </div>
                              </div>
                              {/*Title */}
                              <h2 className="event-title">
                                <NavLink to={"#"}>
                                The Strange Love Movie 2023 Festival                                </NavLink>
                              </h2>
                              {/* Read more button */ }
                              <div className="button-event">
                                <NavLink className="view-detail"to={"#"}>Read More</NavLink>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
