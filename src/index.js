import React from "react"
import ReactDOM from "react-dom"
import "./styles/index.css"
import App from "./components/App"
import registerServiceWorker from "./registerServiceWorker"
import { BrowserRouter, Route } from "react-router-dom"
import BaseLayout from "./components/BaseLayout"
import Electronics from "./components/Electronics"
import Books from "./components/Books"
import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Shoes from "./components/Shoes"

ReactDOM.render(
  <BrowserRouter>
    <App>
      <BaseLayout>
        <Route exact path="/" component={Home} />
        <Route path="/Shoes" component={Shoes} />
        <Route path="/books" component={Books} />
        <Route path="/electronics" component={Electronics} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </BaseLayout>
    </App>
  </BrowserRouter>,
  document.getElementById("root")
)
registerServiceWorker()
