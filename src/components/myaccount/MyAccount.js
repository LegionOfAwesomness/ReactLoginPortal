import React from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import { Container, Row, Col, Navbar, NavbarBrand } from "reactstrap";

var storesList = [];
class MyAccount extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="ui inverted top fixed menu">
          <div className="ui container">
          <Link style={{color:'black'}} to="/home"> <a className="header item">
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
              <div role="option" className="item">
              <Link style={{color:'black'}} to="/AllStores">See all Stores</Link>
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
              <Link style={{color:'white'}} to="/myaccount">My Account</Link>
              </div>
              <i aria-hidden="true" className="dropdown icon" />
              <div className="menu transition">
                <div role="option" className="item">
                <Link style={{color:'black'}} to="/orders">Orders</Link>
                </div>
                <div role="option" className="item">
                  <Link style={{color:'black'}} to="/commisions">Commisions</Link>
                </div>
                <div role="option" className="item">
                  <Link style={{color:'black'}} to="/rewards">Rewards</Link>
                </div>
                <div role="option" className="item">
                  <Link style={{color:'black'}} to="/personal">My Account</Link>
                </div>
                <div role="option" className="item">
                  <Link style={{color:'black'}} to="/refferals">Refferal</Link>
                </div>
                <div role="option" className="item">
                  <Link style={{color:'black'}} to="/wishlists">WishList</Link>
                </div>
                <div role="option" className="item">
                  <Link style={{color:'black'}} to="/">Log Out</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Container style={{backgroundColor: "#d9d9d9"}}>
        <h2 class="ui center aligned header">Device Adjustment</h2>
        <br/>
        <h2 class="ui center aligned header">My Account Information</h2>

        <div >
          <div className="ui stackable two column divided grid container">
            <div className="row">
              <div className="column">
              <Link style={{color:'black'}} to="/orders">
                <div className="ui segment">
                  <h3 class="ui header">
                    <i className="address card icon" />
                    <div class="content">
                      Order History and Details
                      <div class="sub header">Manage your preferences</div>
                    </div>
                  </h3>
                </div>
                </Link>
              </div>
              <div className="column">
              <Link style={{color:'black'}} to="/personal">
                <div className="ui segment"  >
                  <h3 class="ui header">
                    <i className="user icon" />
                    <div class="content">
                      My Personal Information
                      <div class="sub header">Manage your preferences</div>
                    </div>
                  </h3>
                </div>
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="column">
              <Link style={{color:'black'}} to="/commisions">
                <div className="ui segment">
                  <h3 class="ui header">
                    <i class="money bill alternate outline icon" />
                    <div class="content">
                      My Commisions
                      <div class="sub header">Manage your preferences</div>
                    </div>
                  </h3>
                </div>
                </Link>
              </div>
              <div className="column">
              <Link style={{color:'black'}} to="/vouchers">
                <div className="ui segment">
                  <h3 class="ui header">
                    <i class="sticky note icon" />
                    <div class="content">
                      My Vouchers
                      <div class="sub header">Manage your preferences</div>
                    </div>
                  </h3>
                </div>
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="column">
              <Link style={{color:'black'}} to="/settings">
                <div className="ui segment">
                  <h3 class="ui header">
                    <i class="settings icon" />
                    <div class="content">
                      Account Settings
                      <div class="sub header">Manage your preferences</div>
                    </div>
                  </h3>
                </div>
                </Link>
              </div>

              <div className="column">
              <Link style={{color:'black'}} to="/orders">
                <div className="ui segment">
                  <h3 class="ui header">
                    <i class="list icon" />
                    <div class="content">
                      Order History and Details
                      <div class="sub header">Manage your preferences</div>
                    </div>
                  </h3>
                </div>
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="column">
              <Link style={{color:'black'}} to="/rewards">
                <div className="ui segment">
                  <h3 class="ui header">
                    <i className="dollar sign icon" />
                    <div class="content">
                      My Rewards
                      <div class="sub header">Manage your preferences</div>
                    </div>
                  </h3>
                </div>
                </Link>
              </div>
              <div className="column">
              <Link style={{color:'black'}} to="/wishlists">
                <div className="ui segment">
                  <h3 class="ui header">
                    <i className="heart icon" />
                    <div class="content">
                      My Wishlists
                      <div class="sub header">Manage your preferences</div>
                    </div>
                  </h3>
                </div>
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="column">
              <Link style={{color:'black'}} to="/refferals">
                <div className="ui segment">
                  <h3 class="ui header">
                    <i class="users icon" />
                    <div class="content">
                      My Refferals
                      <div class="sub header">Manage your preferences</div>
                    </div>
                  </h3>
                </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        </Container>
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

export default MyAccount;
