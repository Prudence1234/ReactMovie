import React, { Component } from 'react'
import './Cover.css'
class Cover extends Component {
  render() {
    return (
      <div className="cover">
        <img
          src="https://cdn.shopify.com/s/files/1/1140/8354/articles/when-did-disney-buy-marvel.jpg?v=1640000133"
          alt=""
          className="coverImage"
        />
        <div className="coverPlay">
          <i className="fa fa-caret-right" aria-hidden="true"></i>
        </div>
      </div>
    )
  }
}

export default Cover
