import React from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import { Container, Row, Col, Navbar, NavbarBrand } from "reactstrap";

var storesList = [];
class MyPersonal extends React.Component {
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
           //All stores component needs to be created.
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
        <Container>
          <h1 class="ui center aligned header">Device Adjustment</h1>
          <br/>
          <h4 class="ui horizontal divider header">
            <i className="user icon" />
            My Personal Information
          </h4>
          <h4 class="ui  header">
            Please be sure to update your personal information if it has
            changed.
          </h4>
          <div class="ui segments" style={{ backgroundColor: "#d9d9d9" }}>
            <div class="ui grid">
              <div class="one wide column" />
              <div class="eleven wide column">
                <form class="ui form">
                  <br />

                  <h6>Social Title</h6>
                  <div class=" fields">
                    <div class=" field">
                      <div class="ui radio checkbox">
                        <input
                          type="radio"
                          name="fruit"
                          tabindex="0"
                          class="hidden"
                        />
                        <label>Mr.</label>
                      </div>
                    </div>
                    <div class="field">
                      <div class="ui radio checkbox">
                        <input
                          type="radio"
                          name="fruit"
                          tabindex="0"
                          class="hidden"
                        />
                        <label>Mrs.</label>
                      </div>
                    </div>
                  </div>
                  <div class="field">
                    <label>Name</label>
                    <div class="three fields">
                      <div class="field">
                        <input
                          type="text"
                          name="shipping[first-name]"
                          placeholder="First Name"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="field">
                    <div class="three fields">
                      <div class="field">
                        <input
                          type="text"
                          name="shipping[last-name]"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="three fields">
                    <div class="field">
                      <label>E-mail</label>
                      <input type="email" placeholder="joe@schmoe.com" />
                    </div>
                  </div>

                  <div class="field">
                    <label>Date of Birth</label>
                    <div class="nine fields">
                      <div class="field">
                        <input
                          type="text"
                          name="card[cvc]"
                          maxlength="3"
                          placeholder="Day"
                        />
                      </div>
                      <div class="field">
                        <select
                          class="ui fluid search dropdown"
                          name="card[expire-month]"
                        >
                          <option value="">Month</option>
                          <option value="1">January</option>
                          <option value="2">February</option>
                          <option value="3">March</option>
                          <option value="4">April</option>
                          <option value="5">May</option>
                          <option value="6">June</option>
                          <option value="7">July</option>
                          <option value="8">August</option>
                          <option value="9">September</option>
                          <option value="10">October</option>
                          <option value="11">November</option>
                          <option value="12">December</option>
                        </select>
                      </div>
                      <div class="field">
                        <input
                          type="text"
                          name="card[expire-year]"
                          maxlength="4"
                          placeholder="Year"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="three fields">
                    <div class="field">
                      <label>Password</label>
                      <input
                        type="text"
                        name="shipping[first-name]"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div class="three fields">
                    <div class="field">
                      <label>New Password</label>
                      <input
                        type="text"
                        name="shipping[first-name]"
                        placeholder=""
                      />
                    </div>
                  </div>

                  <div class="three fields">
                    <div class="field">
                      <label>Confirm Password</label>
                      <input
                        type="text"
                        name="shipping[first-name]"
                        placeholder=""
                      />
                    </div>
                  </div>

                  <div class="seven wide field">
                    <div class="ui checkbox">
                      <input type="checkbox" tabindex="0" class="hidden" />
                      <label>Sign up for our newsletter!</label>
                    </div>
                  </div>
                  <button class="ui primary button">Save</button>
                  <button class="ui button">Discard</button>
                </form>
                <div>
                  <br />
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

export default MyPersonal;
