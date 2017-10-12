import React, { Component } from "react"
import "../styles/App.css"

class App extends Component {
  render() {
    return (
      <div className="navWrapper">
        <header className="navHeader">
          <h1 className="siteTitle"> ShopBOX </h1>
        </header>
        {this.props.children}
      </div>
    )
  }
}

export default App
