import React from 'react'
import '../Cart movies/Cartmovies.css'
import Navbarcart from  '../Cart movies/Navbarcart'
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Cartmovies() {
  return (
    <div className="cart-movies">
        <div className="cart-movies_header">
            <Navbarcart/>
            <div className="cart-header">
                <div className="cart-header_container">
                    <p>Home <MdKeyboardArrowRight /> <span>Cart Movies</span></p>
                </div>
            </div>
        </div>
    </div>
  )
}
