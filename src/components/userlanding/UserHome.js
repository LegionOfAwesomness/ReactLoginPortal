import React from "react";
import AllStores from "../Stores/AllStores";


class UserHome extends React.Component {


  constructor(props) {
    super(props);
this.state = {showAllStores:false };
  }

  handleAllstores = () =>{

this.setState(
  { showAllStores: true},
  () => {
   console.log("enter showAllStores");
 })
  }



  render() {
    return (
      <div>
        <div id="root">
          <div>
            <div>
              <div className="ui inverted top fixed menu">
                <div className="ui container">
                  <a className="header item">
                    <img
                      src="/logo.png"
                      className="ui mini image"
                      style={{ marginRight: "1.5emem" }}
                    />
                    Kewl Wallet
                  </a>
                  <a className="item">Home</a>


                  <div
                    role="listbox"
                    aria-expanded="false"
                    className="ui item simple dropdown"
                    tabindex="0"
                  >
                    <div className="text" role="alert" aria-live="polite" >
                      All Stores
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
                        Logout
                      </div>

                      <div className="divider" />
                      <div className="header">Header Item</div>
                      <div role="option" className="item">
                        <i className="dropdown icon" />
                        <span className="text">Submenu</span>
                        <div className="menu transition">
                          <div role="option" className="item">
                            List Item
                          </div>
                          <div role="option" className="item">
                            List Item
                          </div>
                        </div>
                      </div>
                      <div role="option" className="item" onClick={this.handleAllstores}>
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
                        Logout
                      </div>

                      <div className="divider" />
                      <div className="header">Header Item</div>
                      <div role="option" className="item">
                        <i className="dropdown icon" />
                        <span className="text">Submenu</span>
                        <div className="menu transition">
                          <div role="option" className="item">
                            List Item
                          </div>
                          <div role="option" className="item">
                            List Item
                          </div>
                        </div>
                      </div>
                      <div role="option" className="item">
                        List Item
                      </div>
                    </div>
                  </div>



                </div>
              </div>
              <div className="ui text container" style={{ marginTop: "7em" }}>
                <h1 className="ui header">Welcome To KewlWallet</h1>
                <p>
                  hot deals
                </p>

                <img
                  src="/images/wireframe/media-paragraph.png"
                  className="ui image"
                  style={{ marginTop: "2em" }}
                />
                <img
                  src="/images/wireframe/paragraph.png"
                  className="ui image"
                  style={{ marginTop: "2em" }}
                />
                <img
                  src="/images/wireframe/paragraph.png"
                  className="ui image"
                  style={{ marginTop: "2em" }}
                />
                <img
                  src="/images/wireframe/paragraph.png"
                  className="ui image"
                  style={{ marginTop: "2em" }}
                />
                <img
                  src="/images/wireframe/paragraph.png"
                  className="ui image"
                  style={{ marginTop: "2em" }}
                />
                <img
                  src="/images/wireframe/paragraph.png"
                  className="ui image"
                  style={{ marginTop: "2em" }}
                />
                <img
                  src="/images/wireframe/paragraph.png"
                  className="ui image"
                  style={{ marginTop: "2em" }}
                />
              </div>
              <div className="ui text container" style={{ marginTop: "7em" }}>
                <h1 className="ui header">-----------------------------</h1>

                <p>
                  Suggestions and Brands  at a glance
                </p>
                <img
                  src="/images/wireframe/media-paragraph.png"
                  className="ui image"
                  style={{ marginTop: "2em" }}
                />
                <img
                  src="/images/wireframe/paragraph.png"
                  className="ui image"
                  style={{ marginTop: "2em" }}
                />
                <img
                  src="/images/wireframe/paragraph.png"
                  className="ui image"
                  style={{ marginTop: "2em" }}
                />
                <img
                  src="/images/wireframe/paragraph.png"
                  className="ui image"
                  style={{ marginTop: "2em" }}
                />
                <img
                  src="/images/wireframe/paragraph.png"
                  className="ui image"
                  style={{ marginTop: "2em" }}
                />
                <img
                  src="/images/wireframe/paragraph.png"
                  className="ui image"
                  style={{ marginTop: "2em" }}
                />
                <img
                  src="/images/wireframe/paragraph.png"
                  className="ui image"
                  style={{ marginTop: "2em" }}
                />
              </div>
              //all brands div
              {(this.state.showAllStores) &&
                <AllStores />}

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
        </div>
      </div>
    );
  }
}

export default UserHome;
