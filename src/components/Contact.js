import React, { Component } from "react"

class Contact extends Component {
  render() {
    return (
      <div className="contactWrapper">
        <h1 className="contactUs">Wanna get a hold of us? This is how you can below!</h1>
        <div className="contactForm">
          <form action="">
            <div className="formSpacing">
              <input type="text" placeholder="Name" />
            </div>
            <div className="formSpacing">
              <input type="text" placeholder="Email" />
            </div>
            <div className="formSpacing">
              <textarea
                name=""
                id=""
                cols="100"
                rows="20"
                placeholder="message"
              />
            </div>
            <div className="formSpacing">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Contact
