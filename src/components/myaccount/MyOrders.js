import React from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import { Container, Row, Col, Navbar, NavbarBrand } from "reactstrap";
import { ORDERS } from "../../Shared/SampleData";

var storesList = [];
class MyOrders extends React.Component {
  constructor(props) {
    super(props);
  }

  renderOrders = () => {
    return (
      <tbody>
        {ORDERS.map(order => {
          console.log(order);
          return (
            <tr key={order.id}>
              <td data-label="Order reference">{order.orderReference}</td>
              <td data-label="Date">{order.date}</td>
              <td data-label="Total price">{order.price}</td>
              <td data-label="Payment">{order.payment}</td>
              <td data-label="Status">{order.status}</td>
              <td data-label="Invoice">{order.invoice}</td>
              <td data-label="Details">
                <button class="ui primary button">Details</button>
              </td>
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

        <h2 class="ui center aligned header">Device Adjustment</h2>
        <Container>
          <br />

          <h4 class="ui horizontal divider header">
            <i class="list icon" />
            Orders History
          </h4>
          <h5 class="ui left aligned header">
            Here are the orders you've placed since your account was created.
          </h5>
          <div>
            <table
              class="ui unstackable celled table"
              style={{ backgroundColor: "#d9d9d9" }}
            >
              <thead>
                <tr>
                  <th>Order reference</th>
                  <th>Date</th>
                  <th>Total price</th>
                  <th>Payment</th>
                  <th>Status</th>
                  <th>Invoice</th>
                  <th>Details</th>
                </tr>
              </thead>

              {this.renderOrders()}
            </table>
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

export default MyOrders;
