import React from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import { Container, Row, Col, Navbar, NavbarBrand } from "reactstrap";

var storesList = [];
class MyVouchers extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="ui inverted top fixed menu">
          <div className="ui container">
            <Link style={{ color: "black" }} to="/home">
              {" "}
              <a className="header item">
                <img
                  src="/kewlwallet.jpg"
                  className="ui small image"
                  style={{ marginRight: "1.5emem" }}
                />
              </a>
            </Link>
            <div
              role="listbox"
              aria-expanded="false"
              className="ui item simple dropdown"
              tabindex="0"
            >
              <div className="text" role="alert" aria-live="polite">
                All Stores
              </div>
              <i aria-hidden="true" className="dropdown icon" />
              <div className="menu transition">
                <div role="option" className="item">
                  <Link style={{ color: "black" }} to="/AllStores">
                    See all Stores
                  </Link>
                </div>
              </div>
            </div>

            <div
              role="listbox"
              aria-expanded="false"
              className="ui item simple dropdown"
              tabindex="0"
            >
              <div className="text" role="alert" aria-live="polite">
                My Account
              </div>
              <i aria-hidden="true" className="dropdown icon" />
              <div className="menu transition">
                <div role="option" className="item">
                  Orders
                </div>
                <div role="option" className="item">
                  Settings
                </div>
                <div role="option" className="item">
                  Rewards
                </div>
                <div role="option" className="item">
                  <Link style={{ color: "black" }} to="/">
                    Log Out
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 class="ui center aligned header">Device Adjustment</h2>
        <h3 class="ui center aligned header">Device Column Width</h3>
        <div />
        <div>
          <div
            className="ui inverted vertical segment"
            style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
          >
            <div
              className="ui inverted vertical segment"
              style={{ padding: "5em 0em" }}
            >
              <div className="ui container">
                <div className="ui inverted stackable divided grid">
                  <div className="row">
                    <div className="three wide column">
                      <h4 className="ui inverted header">About</h4>
                      <div role="list" className="ui inverted link list">
                        <a role="listitem" className="item">
                          Sitemap
                        </a>
                        <a role="listitem" className="item">
                          Contact Us
                        </a>
                      </div>
                    </div>
                    <div className="three wide column">
                      <h4 className="ui inverted header">Services</h4>
                      <div role="list" className="ui inverted link list">
                        <a role="listitem" className="item">
                          Banana Pre-Order
                        </a>
                        <a role="listitem" className="item">
                          DNA FAQ
                        </a>
                      </div>
                    </div>
                  </div>
                  <h6 className="ui inverted header">
                    © Copyright Kewlwallet 2018 | All Rights Reserved
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyVouchers;
