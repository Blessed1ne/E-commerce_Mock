import React, { Component } from "react"

class Books extends Component {
  render() {
    return (
      <div className="content">
        <div className="booksWrapper">
          <div className="itemOne">
            <div className="itemUl">
              <h2>Book 1</h2>
              <ul>
                <li>Author:</li>
                <p>Paulo Coelho</p>
                <li>Published:</li>
                <p>1988</p>
                <li>Copies Sold:</li>
                <p>Over 65 Million</p>
                <li>Summary:</li>
                <p>A fable about following your dreams</p>
                <li>Price:</li>
                <a className="tag" href="">
                  <p>$23.99 Dollars</p>
                </a>
              </ul>
            </div>
            <img
              src="https://images.gr-assets.com/books/1466865542l/18144590.jpg"
              alt=""
            />
          </div>

          <div className="itemTwo">
            <div className="itemUl">
              <h2>Book 2</h2>
              <ul>
                <li>Author:</li>
                <p>Napoleon Hill</p>
                <li>Published:</li>
                <p>1937</p>
                <li>Copies Sold:</li>
                <p>Over 100 Million</p>
                <li>Summary:</li>
                <p>Personal development and self-improvement book</p>
                <li>Price:</li>
                <a className="tag" href="">
                  <p>$20 Dollars</p>
                </a>
              </ul>
            </div>
            <img
              src="http://www.naphill.org/wp-content/uploads/paperback-think-and-grow-rich-1937-new.jpg"
              alt=""
            />
          </div>

          <div className="itemThree">
            <div className="itemUl">
              <h2>Book 3</h2>
              <ul>
                <li>Author:</li>
                <p>Dale Carnegie</p>
                <li>Published:</li>
                <p>1936</p>
                <li>Copies Sold:</li>
                <p>Over 15 Million</p>
                <li>Summary:</li>
                <p>Personal development and self-improvement book</p>
                <li>Price:</li>
                <a className="tag" href="">
                  <p>$16.99 Dollars</p>
                </a>
              </ul>
            </div>
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/51z5LFjFQNL._SX299_BO1,204,203,200_.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Books
