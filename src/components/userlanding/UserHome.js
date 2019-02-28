import React from "react";
import AllStores from "../Stores/AllStores";
import { Button, Carousel, Jumbotron,Card } from "react-bootstrap";
import StoreDetails from "../Stores/StoreDetails";

class UserHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showAllStores: false, showSingleStore: false };
  }

  handleAllstores = () => {
    this.setState({ showAllStores: true , showSingleStore: false}, () => {
      console.log("enter showAllStores");
    });
  };

  showSelectedStore = (id) => {
    this.setState({ showSingleStore: true , storeId: id}, () => {
      console.log("inside showSelectedStore");
    });
  };

  goHome = () =>{
    this.setState({ showSingleStore: false , showAllStores: false }, () => {
      console.log("inside showSelectedStore");
    });
  }

  render() {
    return (

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
                    <a className="item" onClick={this.goHome}>Home</a>

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


{ !this.state.showSingleStore && 

  <Jumbotron>
       <Carousel>
         <Carousel.Item>
           <img
             className="d-block w-100"
             src="holder.js/800x400?text=First slide&bg=373940"
             alt="First slide"
           />
           <Carousel.Caption>
             <h3>First slide label</h3>
           </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
           <img
             className="d-block w-100"
             src="holder.js/800x400?text=Second slide&bg=282c34"
             alt="Third slide"
           />

           <Carousel.Caption>
             <h3>Second slide label</h3>
           </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
           <img
             className="d-block w-100"
             src="holder.js/800x400?text=Third slide&bg=20232a"
             alt="Third slide"
           />

           <Carousel.Caption>
             <h3>Third slide label</h3>
           </Carousel.Caption>
         </Carousel.Item>
       </Carousel>
     </Jumbotron>
}
                {!this.state.showSingleStore && !this.state.showAllStores  && (
                <div>

                    <div class="ui three column stackable grid">
  <div class="column">
    <div class="ui raised segment">
      <div class="ui placeholder">
        <div class="image header">
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <div class="paragraph">
          <div class="medium line"></div>
          <div class="short line"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="ui raised segment">
      <div class="ui placeholder">
        <div class="image header">
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <div class="paragraph">
          <div class="medium line"></div>
          <div class="short line"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="ui raised segment">
      <div class="ui placeholder">
        <div class="image header">
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <div class="paragraph">
          <div class="medium line"></div>
          <div class="short line"></div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="ui three cards">
  <div class="ui card">
    <div class="content">
      <div class="ui placeholder">
        <div class="rectangular image"></div>
      </div>
    </div>
  </div>
  <div class="ui card">
    <div class="content">
      <div class="ui placeholder">
        <div class="rectangular image"></div>
      </div>
    </div>
  </div>
  <div class="ui card">
    <div class="content">
      <div class="ui placeholder">
        <div class="rectangular image"></div>
      </div>
    </div>
  </div>
</div>
<div class="ui fluid placeholder">
  <div class="image header">
    <div class="line"></div>
    <div class="line"></div>
  </div>
  <div class="paragraph">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>
</div>
</div>


                )}

                {!this.state.showSingleStore && this.state.showAllStores && (
                  <AllStores showSelectedStore={this.showSelectedStore} />
                )}

                <div class="ui grid">
                  <div class="five column row">
                    <div class="column">
                      <img />
                    </div>
                    <div class="column">
                      <img />
                    </div>
                    <div class="column">
                      <img />
                    </div>
                    <div class="column">
                      <img />
                    </div>
                    <div class="column">
                      <img />
                    </div>
                  </div>
                </div>


{this.state.showSingleStore &&
                (<StoreDetails  id={this.state.storeId} />) }
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

    );
  }
}

export default UserHome;
