import React from 'react'
import Navbar from './Navbar'
import Slider from './Slider'
import Moviesplaying from './Moviesplaying'
import Featuredmovie from './Featuredmovie'
import Bigbanner from './Bigbanner'

export default function Homepage() {
  return (
    <div className="home">
    <div className="header">
        <Navbar></Navbar>
        <Slider></Slider>
        <img src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/02/image-lines-header.jpg" alt="" />
    </div>
    <div className="content">
            <Moviesplaying/>
            <Featuredmovie/>
            <Bigbanner/>
    </div>
    </div>
  )
}
