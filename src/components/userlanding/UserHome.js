import React from "react";
import AllStores from "../Stores/AllStores";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import {
  ButtonGroup,
  Button,
  Carousel,
  Jumbotron,
  CardColumns
} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Container, Row, Col, Navbar, NavbarBrand } from "reactstrap";
import StoreDetails from "../Stores/StoreDetails";
import Slider from "react-slick";
import { STORES, FEATURED } from "../../Shared/SampleData";
import {connect }  from 'react-redux';
import { userDetails} from '../../actions';



var storesList = [];
/**
 * 
 */
class UserHome extends React.Component {
  constructor(props) {
    super(props);
    /**
     * Calling all stores service on load because we might want to display them in home page
     * pending clarification from madhu and george
     * @type {Array of available Stores}
     */
    this.getAllStoresService();
    /**
     * toggle to allstores directly
     * this will be true only if we route from any page in the application to /AllStores
     * @method if
     * @param  {[showAllStores]} Boolean
     * @return {allstore section}
     */
    if (undefined !== this.props.showAllStores && this.props.showAllStores) {
      this.state = { showAllStores: true};
    }
  }

  state = {
    stores: storesList,
    showAllStores: false,
    showSingleStore: false
  };

  renderStores = () => {
    var settings = {
      dots: false,
      infinite: true,
      speed: 50,
      slidesToShow: 4,
      slidesToScroll: 2
    };

    var x = 0;
    return (
      <Slider {...settings}>
        {this.state.stores.map(post => {
          //let boundItemClick = this.getStore.bind( this,post);
          //  console.log(boundItemClick);
          // Construct the onClick with our bound function
          return (
            <Card
              border="primary"
              style={{ width: "20rem" }}
              key={post.advertiser_id}
            >
              <Card.Img
                style={{ width: "16rem" }}
                variant="top"
                src="/997.jpg"
              />

              <Card.Body>
                <Card.Title>{post.advertiser_name}</Card.Title>
                <Card.Text>{post.content}</Card.Text>
                <ButtonGroup>
                  <Button
                    outline
                    color="primary"
                    href={post.program_url}
                    active={this.state.rSelected === 1}
                  >
                    Store
                  </Button>

                  <Button
                    outline
                    color="primary"
                    onClick={() => {
                      this.getStore(post.advertiser_id, post);
                    }}
                    active={this.state.rSelected === 2}
                  >
                    Coupons
                  </Button>
                </ButtonGroup>
              </Card.Body>
            </Card>
          );
        })}
      </Slider>
    );
  };

  renderSampleFeaturedStores = () => {
    var settings = {
      dots: true,
      infinite: true,
      speed: 1,
      slidesToShow: 4,
      slidesToScroll: 2
    };

    var x = 0;
    return (
      <Slider {...settings}>
        {FEATURED.map(post => {
          //let boundItemClick = this.getStore.bind( this,post);
          //  console.log(boundItemClick);
          // Construct the onClick with our bound function
          return (
            <div>
              <Card
                border="secondary"
                style={{ width: "21rem", height: "16rem" }}
                key={post.advertiser_id}
              >
                <Card.Img variant="top" src={post.imageurl} />

                <Card.Body>
                  <Card.Title>{post.advertiser_name}</Card.Title>
                  <Card.Text>{post.content}</Card.Text>
                </Card.Body>
              </Card>
              <Card
                style={{ width: "21rem", height: "2.5rem" }}
                key={post.advertiser_id}
              >
                <ButtonGroup>
                  <Button
                    variant="outline-primary"
                    href={post.program_url}
                    active={this.state.rSelected === 1}
                  >
                    Store
                  </Button>

                  <Button
                    variant="outline-primary"
                    onClick={() => {
                      this.showSelectedStore(post.advertiser_id );
                    }}
                    active={this.state.rSelected === 2}
                  >
                    Coupons
                  </Button>
                </ButtonGroup>
              </Card>
            </div>
          );
        })}
      </Slider>
    );
  };
  renderSampleStores = () => {
    var settings = {
      dots: true,
      infinite: true,
      speed: 1,
      slidesToShow: 4,
      slidesToScroll: 2
    };

    var x = 0;
    return (
      <Slider {...settings}>
        {STORES.map(post => {
          //let boundItemClick = this.getStore.bind( this,post);
          //  console.log(boundItemClick);
          // Construct the onClick with our bound function
          return (
            <div>
              <Card
                border="secondary"
                style={{ width: "21rem", height: "16rem" }}
                key={post.advertiser_id}
              >
                <Card.Img variant="top" src={post.imageurl} />

                <Card.Body>
                  <Card.Title>{post.advertiser_name}</Card.Title>
                  <Card.Text>{post.content}</Card.Text>
                </Card.Body>
              </Card>
              <Card
                style={{ width: "21rem", height: "2.5rem" }}
                key={post.advertiser_id}
              >
                <ButtonGroup>
                  <Button
                    variant="outline-primary"
                    href={post.program_url}
                    active={this.state.rSelected === 1}
                  >
                    Store
                  </Button>

                  <Button
                    variant="outline-primary"
                    onClick={() => {
                      this.showSelectedStore(post.advertiser_id);
                    }}
                    active={this.state.rSelected === 2}
                  >
                    Coupons
                  </Button>
                </ButtonGroup>
              </Card>
            </div>
          );
        })}
      </Slider>
    );
  };

  getAllStoresService = () => {
    var url =
      "http://sandbox.kewlwallet.com:8080/serviceapi/getCJDeveloperFromDB";
    fetch(url, {
      method: "get",
      headers: new Headers({
        Authorization: "Basic Y29uc3VtZXJBcGk6c3VwZXJTM2NyM3Q=",
        "Content-Type": "application/x-www-form-urlencoded"
      })
    })
      .then(res => res.json())
      .then(
        result => {
          storesList = result;
          this.setState({ stores: result }, () => {
            console.log("reached home Page");
            console.log(this.state.stores);
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          console.log(error);
        }
      );

    console.log("state");
    console.log(this.state);
  };
  /**
   * flags handles all stores on
   * @method handleAllstores
   * @return list of all stores with pagination.
   */
  handleAllstores = () => {
    this.setState({ showAllStores: true, showSingleStore: false }, () => {
      console.log("enter handleAllstores method");
    });
  };

  showSelectedStore = (id , userId) => {
    this.setState({ showSingleStore: true, storeId: id, sId: userId  }, () => {
      console.log("inside showSelectedStore");
    });
  };
/**
 * This method refreshes the home page and take you back landing page
 * used across the  toggle methods 
 *
 * @method goHome
 * @return {[type]} [description]
 */
  goHome = () => {
    this.setState({ showSingleStore: false, showAllStores: false }, () => {
      console.log("inside showSelectedStore");
    });
  };

  render() {
    console.log(this.props.userInfo);
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };
    return (
      <div>
        <div>
          <div className="ui inverted top fixed menu">
            <div className="ui container">
              <a className="header item" onClick={this.goHome}>
                <img
                  src="/kewlwallet.jpg"
                  className="ui small image"
                  style={{ marginRight: "1.5emem" }}
                />
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
          <Container>
            {!this.state.showSingleStore && (
              <Jumbotron>
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="/Courosel.png"
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="/courosel3.png"
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="/courosel1.png"
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </Jumbotron>
            )}
            {!this.state.showSingleStore && !this.state.showAllStores && (
              <div>
                <Navbar color="light" light expand="md">
                  <NavbarBrand>Featured Stores</NavbarBrand>
                </Navbar>
                {this.renderSampleFeaturedStores()}
                <Navbar color="light" light expand="md">
                  <NavbarBrand>Popular Stores</NavbarBrand>
                </Navbar>
                {this.renderSampleStores()}

                <div class="ui three cards">
                  <div class="ui card">
                    <div class="content">
                      <div class="ui placeholder">
                        <div class="rectangular image" />
                      </div>
                    </div>
                  </div>
                  <div class="ui card">
                    <div class="content">
                      <div class="ui placeholder">
                        <div class="rectangular image" />
                      </div>
                    </div>
                  </div>
                  <div class="ui card">
                    <div class="content">
                      <div class="ui placeholder">
                        <div class="rectangular image" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="ui fluid placeholder">
                  <div class="image header">
                    <div class="line" />
                    <div class="line" />
                  </div>
                  <div class="paragraph">
                    <div class="line" />
                    <div class="line" />
                    <div class="line" />
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

            {this.state.showSingleStore && (
              <StoreDetails id={this.state.storeId} sId={this.state.sId}/>
            )}
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
      </div>
    );
  }
}

 const mapStateToProps = (state) => {
   console.log(state);
  return {
    userInfo: state.user
  };
};
 
export default connect(mapStateToProps, { userDetails})(UserHome);