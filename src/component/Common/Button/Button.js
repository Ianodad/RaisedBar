import React from 'react'
import './button.css'

function Button({title, onPress}) {
    return (
        <div id="container">
        <button className="learn-more" onClick={onPress}>
          <span className="circle" aria-hidden="true">
            <span className="icon arrow" />
          </span>
          <span className="button-text">{title}</span>
        </button>
      </div>
    )
}

export default Button
