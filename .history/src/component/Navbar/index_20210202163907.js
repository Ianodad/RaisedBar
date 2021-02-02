import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

import "./Navbar.css";




class index extends Component {
    render() {
        return (
          <nav className="nav">
            <div className="container">
              <div className="logo">
                <p href="#" style={{color:"white"}}>RaisedBAR</a>
              </div>
              <div id="mainListDiv" className="main_list">
                <ul className="navlinks">
                  <li className="border-bottom">
                    <NavLink active to="/">
                        Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/create-drink">
                        Create
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">
                       About
                    </NavLink>
                  </li>
                </ul>
              </div>
              <span className="navTrigger">
                <i />
                <i />
                <i />
              </span>
            </div>
          </nav>
        );
    }
}

export default index
