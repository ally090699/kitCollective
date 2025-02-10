import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Homepage from "./Homepage";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
import ThankYou from "./ThankYou";
import Error from "./Error";

import "../styles.css";

export default function App() {
  return (
    <Router>
      <div className="content-wrapper">
        <Header />
        <div className="main-content">
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/about" component={About} />
            <Route path="/products" component={Products} />
            <Route path="/contact" component={Contact} />
            <Route path="/thankyou" component={ThankYou} />
            <Route path="/error" component={Error} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
