import React, { Component } from "react"

class Shoes extends Component {
  render() {
    return (
      <div>
        <div className="shoesWrapper">
          <div className="itemOne">
            <div className="itemUl">
              <h2>Shoe 1</h2>
            <ul>
                <li>Brand:</li>
                <p>Nike Air Force 1 Hightops</p>
                <li>Location Manufactured:</li>
                <p>China</p>
                <li>Color Scheme:</li>
                <p>White, Aqua, Purple</p>
                <li>Price:</li>
                <a className="tag" href="">
                  <p>$170 Dollars</p>
                </a>
              </ul>
            </div>
            <img
              src="https://www.sneakerfiles.com/wp-content/uploads/2014/08/nike-air-force-1-high-white-dark-concord-hyper-jade.jpg"
              alt=""
            />
          </div>

          <div className="itemTwo">
            <div className="itemUl">
              <h2>Shoe 2</h2>
              <ul>
                <li>Brand:</li>
                <p>Addidas Dikembe Mutombo Colorways</p>
                <li>Location Manufactured:</li>
                <p>USA</p>
                <li>Color Scheme:</li>
                <p>Red, White, Black, Yellow, Green</p>
                <li>Price:</li>
                <a className="tag" href="">
                  <p>$145 Dollars</p>
                </a>
              </ul>
            </div>
            <img
              src="https://www.sneakerfiles.com/wp-content/uploads/2013/07/adidas-mutombo-release-date-1-e1372686072895.jpg"
              alt=""
            />
          </div>

          <div className="itemThree">
            <div className="itemUl">
              <h2>Shoe 3</h2>
              <ul>
                <li>Brand:</li>
                <p>Reebok Allen Iverson All Stars</p>
                <li>Location Manufactured:</li>
                <p>Vietnam</p>
                <li>Color Scheme:</li>
                <p>Black & White</p>
                <li>Price:</li>
                <a className="tag" href="">
                  <p>$220 Dollars</p>
                </a>
              </ul>
            </div>
            <img
              src="https://www.sneakerfiles.com/wp-content/uploads/2015/02/reebok-question-all-star-2015.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Shoes
