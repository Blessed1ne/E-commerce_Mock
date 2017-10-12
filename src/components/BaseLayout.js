import React, { Component } from "react"
import { NavLink } from "react-router-dom"

class BaseLayout extends Component {
  render() {
    return (
      <div>
        <nav className="navLink">
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/books">Books</NavLink>
          <NavLink to="/electronics">Electronics</NavLink>
          <NavLink to="/Shoes">Shoes</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </nav>
        {this.props.children}
      </div>
    )
  }
}

export default BaseLayout
