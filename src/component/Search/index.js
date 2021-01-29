import React, { Component } from 'react'
import { FaSearch } from 'react-icons/fa';

import "./Search.css";


class search extends Component {
    render() {
        return (
            <div className="container h-100">
        <div className="d-flex justify-content-center h-100">
          <div className="searchbar">
            <input className="search_input" type="text" name placeholder="Search..." />
            <a href="#" className="search_icon"><i className="fas fa-search" /><FaSearch /></a>
          </div>
        </div>
      </div>
        )
    }
}

export default search
