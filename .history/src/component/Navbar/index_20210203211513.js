import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

import "./Navbar.css";




class index extends Component {
    render() {
        return (
          <nav className="nav">
            <div className="container">
              <div className="logo d-flex flex-row">
                 <NavLink to="/">
                <p className="col-6" href="#" style={{color:"white"}}>Raised<span className="bar-logo" style={{fontWeight:"1000", fontSize:"46px"}}>BAR</span></p>
                <p className="col-6">BAR</p>
                </NavLink>
              </div>
              <div id="mainListDiv" className="main_list">
                <ul className="navlinks">
                  <li>
                    <NavLink  to="/">
                        <span style={{fontWeight:'1000', marginRight:"0.07em"}}>H</span>ome
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/create-drink">
                        <span style={{fontWeight:'1000', marginRight:"0.07em"}}>C</span>reate
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">
                       <span style={{fontWeight:'1000', marginRight:"0.07em"}}>A</span>bout
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
