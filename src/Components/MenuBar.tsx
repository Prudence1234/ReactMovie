import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./MenuBar.css"
import React from 'react'
const MenuBar = () => {
  return (
    <div>
        <div className='menubar' >

          <div>
            <NavLink to="/Search">
              <i className="fa fa-search" aria-hidden="true"></i>
            </NavLink>
          </div>

          <div>
            <NavLink to="/Movies">
              Movies
            </NavLink>
          </div>
          <div>
            <NavLink to="/Tvshows">
              TV Shows
            </NavLink>
          </div>
          <div>
            <NavLink to="/Mylist">
              My List
            </NavLink>
          </div>
        </div>

    </div>
  )
}

export default MenuBar