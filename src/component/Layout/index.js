import React, { Component } from 'react'
import "./Layout.css";
import Navbar from "../Navbar";


class index extends Component {
    render() {
        const {className, style, }= this.props
        return (
            <div className={className} style={{style}} id="main-body">
                <Navbar/>
                {this.props.children}
            </div>
        )
    }
}

export default index
