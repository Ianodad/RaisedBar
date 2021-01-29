import React, { Component } from 'react'
import "./Layout.css";
import Navbar from "../Navbar";


class index extends Component {
    render() {
        return (
            <div className="container-fluid" id="main-body">
                <Navbar/>
                {this.props.children}
            </div>
        )
    }
}

export default index
