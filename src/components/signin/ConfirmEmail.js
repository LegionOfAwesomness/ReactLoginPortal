import React from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import { Container, Row, Col, Navbar, NavbarBrand } from "reactstrap";

var storesList = [];
class ConfirmEmail extends React.Component {
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
            <a className="item" onClick={this.goHome}>
              Home
            </a>

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
                <div
                  role="option"
                  className="item"
                  onClick={this.handleAllstores}
                >
                  See All Stores
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
                <Link style={{ color: "white" }} to="/myaccount">
                  My Account
                </Link>
              </div>
              <i aria-hidden="true" className="dropdown icon" />
              <div className="menu transition">
                <div role="option" className="item">
                  <Link style={{ color: "black" }} to="/orders">
                    Orders
                  </Link>
                </div>
                <div role="option" className="item">
                  <Link style={{ color: "black" }} to="/commisions">
                    Commisions
                  </Link>
                </div>
                <div role="option" className="item">
                  <Link style={{ color: "black" }} to="/rewards">
                    Rewards
                  </Link>
                </div>
                <div role="option" className="item">
                  <Link style={{ color: "black" }} to="/personal">
                    My Account
                  </Link>
                </div>
                <div role="option" className="item">
                  <Link style={{ color: "black" }} to="/refferals">
                    Refferal
                  </Link>
                </div>
                <div role="option" className="item">
                  <Link style={{ color: "black" }} to="/wishlists">
                    WishList
                  </Link>
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
        <br />
        <Container>
          <h10>Sign Up Successful</h10>
          <h4 class="ui horizontal divider header">Sign Up Successful</h4>

          <div class="ui center aligned piled segment">
            <h3 class="ui  header">Check your Email</h3>
            <p>Please click on the confirmation url in your E-Mail</p>
            <p>and login to continue</p>
            <p>
              <button class="ui primary button">
                <Link style={{ color: "white" }} to="/">
                  SIGN IN
                </Link>
              </button>
            </p>
            <p>
              If you have not recieved the email click to request a new
              confirmation email
            </p>
            <p>
              <button class="ui primary button">
                <Link style={{ color: "white" }} to="/">
                  Resend E-mail
                </Link>
              </button>
            </p>
          </div>
        </Container>
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

export default ConfirmEmail;
