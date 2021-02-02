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
                        <span style={{fontWeight:'1000', marginRight:"0.2em"}}>H</span>ome
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/create-drink">
                        <span style={{fontWeight:'1000'}}>C</span>reate
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">
                       <span style={{fontWeight:'1000'}}>A</span>bout
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
