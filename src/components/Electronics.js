import React, { Component } from "react"

class Electronics extends Component {
  render() {
    return (
      <div>
        <div className="electronicssWrapper">
          <div className="itemOne">
            <div className="itemUl">
              <h2>Electronic 1</h2>
              <ul>
                <li>Phone:</li>
                <p>iPhone 8</p>
                <li>Manufacture:</li>
                <p>Apple, Inc</p>
                <li>Release Date:</li>
                <p>September 2017</p>
                <li>Screen Size:</li>
                <p>4.7 in</p>
                <li>Price:</li>
                <a className="tag" href="">
                  <p>$699 Dollars</p>
                </a>
              </ul>
            </div>
            <img
              src="https://www.theinquirer.net/w-images/28c240cd-99fd-4862-86b7-2e3620381dfa/4/iPhone8inCopperGold-580x358.jpeg"
              alt=""
            />
          </div>

          <div className="itemTwo">
            <div className="itemUl">
              <h2>Electronic 2</h2>
              <ul>
                <li>Phone:</li>
                <p>Galaxy S8</p>
                <li>Manufacture:</li>
                <p>Samsung</p>
                <li>Release Date:</li>
                <p>April 2017</p>
                <li>Screen Size:</li>
                <p>5.8 in</p>
                <li>Price:</li>
                <a className="tag" href="">
                  <p>$756 Dollars</p>
                </a>
              </ul>
            </div>
            <img
              src="https://www.theinquirer.net/w-images/f3b4ce8f-8b95-47c0-9a2a-564e3de3067a/4/iPhoneXvsGalaxyS8-580x358.png"
              alt=""
            />
          </div>

          <div className="itemThree">
            <div className="itemUl">
              <h2>Electronic 3</h2>
              <ul>
                <li>Phone:</li>
                <p>BlackBerry DTEK50</p>
                <li>Manufacture:</li>
                <p>BlackBerry</p>
                <li>Release Date:</li>
                <p>April 2016</p>
                <li>Screen Size:</li>
                <p>5.2 in</p>
                <li>Price:</li>
                <a className="tag" href="">
                  <p>$750 Dollars</p>
                </a>
              </ul>
            </div>
            <img
              src="https://www.theinquirer.net/w-images/674ad3e3-5546-4fe1-b047-baf2e131debd/0/blackberrydtek506-580x358.jpeg"
              alt=""
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Electronics
