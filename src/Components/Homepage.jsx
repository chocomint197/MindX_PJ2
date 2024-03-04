import React from 'react'
import Navbar from './Navbar'
import Slider from './Slider'
import Moviesplaying from './Moviesplaying'
import Featuredmovie from './Featuredmovie'
import Bigbanner from './Bigbanner'
import Photogallery from './Photogallery'
import Upcomingevent from './Upcomingevent'
import Logoslider from './Logoslider'
import Ourfeedback from './Ourfeedback'
import Moviecomingsoon from './Moviecomingsoon'

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
            <Photogallery/>
            <Upcomingevent/>
            <Logoslider/>
            <Ourfeedback/>
            <Moviecomingsoon/>
    </div>
    </div>
  )
}
