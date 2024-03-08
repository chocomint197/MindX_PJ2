import React from 'react'
import '../style/About.css'
export default function Aboutbanner() {
  return (
    <section className="about-banner">
        <div className="about-banner_overlay">
        </div>
        <div className="about-banner-text">
            <div className="about-banner-content">
                <div className="about-banner-wrap">
                    <div className="about-banner-top">
                    <div className="about-banner-top_container">
                        <div className="about-banner-top_header">
                            <h2 className="title">Watch Live Interview with<span> Movie</span> Producer
                             </h2>
                        </div>
                    </div>
                    </div>
                    <div className="about-banner-bottom">
                    <button>Discover more</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
