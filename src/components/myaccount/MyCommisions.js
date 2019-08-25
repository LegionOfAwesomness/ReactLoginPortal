import React from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import { Container, Row, Col, Navbar, NavbarBrand } from "reactstrap";
import { COMMISIONS } from "../../Shared/SampleData";

var storesList = [];
class MyCommisions extends React.Component {
  constructor(props) {
    super(props);
  }

  renderCommisions = () => {
    return (
      <tbody>
        {COMMISIONS.map(commision => {
          console.log(commision);
          return (
            <tr key={commision.id}>
              <td data-label="Transaction ID<">{commision.transactionId}</td>
              <td data-label="Date">{commision.date}</td>
              <td data-label="Rewards">{commision.reward}</td>
              <td data-label="Status">{commision.status}</td>
            </tr>
          );
        })}
      </tbody>
    );
  };

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

        <Container>
          <h2 class="ui center aligned header">Device Adjustment</h2>
          <br />
          <h4 class="ui horizontal divider header">
            <i class="money bill alternate outline icon" />
            My Commisions
          </h4>
          <div>
            <table
              style={{ backgroundColor: "#d9d9d9" }}
              class="ui celled unstackable table"
            >
              <thead>
                <tr>
                  <th>Total commissions</th>
                  <th>Paid</th>
                  <th>Available</th>
                  <th>Pending</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>$312.26</td>
                  <td>$30.34 </td>
                  <td class="right aligned">$0.00 </td>
                  <td>$281.92</td>
                </tr>
              </tbody>
            </table>
            <br />
            <table
              style={{
                backgroundColor: "#d9d9d9"
              }}
              class="ui celled unstackable table"
            >
              <thead>
                <tr>
                  <th>Transaction ID</th>
                  <th>Date</th>
                  <th>Rewards</th>
                  <th>Status</th>
                </tr>
              </thead>
              {this.renderCommisions()}
              <tfoot>
                <tr>
                  <th colspan="5">
                    <div class="ui right floated pagination menu">
                      <a class="icon item">
                        <i class="left chevron icon" />
                      </a>
                      <a class="item">1</a>
                      <a class="item">2</a>
                      <a class="item">3</a>
                      <a class="item">4</a>
                      <a class="icon item">
                        <i class="right chevron icon" />
                      </a>
                    </div>
                  </th>
                </tr>
              </tfoot>
            </table>
            <br />
          </div>
        </Container>

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
    );
  }
}

export default MyCommisions;
