import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

import "./Navbar.css";




class index extends Component {
    render() {
        return (
          <nav className="nav">
            <div className="container">
              <div className="logo">
                 <NavLink active to="/">
                <p href="#" style={{color:"white"}}>Raised<span style={{fontWeight:"1000"}}>BAR</span></p>
                </NavLink>
              </div>
              <div id="mainListDiv" className="main_list">
                <ul className="navlinks">
                  <li>
                    <NavLink active to="/">
                        <span style={{fontWeight:'1000'}}>H</span>ome
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/create-drink">
                        <aCreate
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
