import React from "react";
import Footer from "./Footer";
import "./modal.css";
import ValidateModal from "./ValidateModal";
import SignIn from "./signin/SignIn";
import Modal from "./signin/Modal";
import SignUp from "./signin/SignUp";
import "./homepage.css";
import referalService from "../service/referalService";
import axios from "axios";
import { GridSpinner } from "react-spinners-kit";

class HomeHeader extends React.Component {
  constructor(props) {
    super(props);
    this.username = "this is a test";
    this.state = {
      messageShown: false,
      isShowing: false,
      showModal: true,
      isHome: false,
      validationErrMsg: null
    };
  }

  takeMeHome = () => {
    this.setState({
      isShowing: false,
      showModal: true,
      isHome: true
    });
  };

  toggleLoader = value => {
    console.log("inside bro ");
    this.setState({ isLoading: value });
  };
  loginDetails = formData => {
    this.props.processSignin(formData);
  };

  // visible invisible toggle for modal
  openModalHandler = () => {
    this.setState({
      isShowing: true
    });
  };

  closeModalHandler = () => {
    this.setState({
      isShowing: false
    });
  };

  // validation method for referal code

  validatereferal = modalState => {
    this.callValidationService(modalState.referalcode);
  };

  // calling validation service
  callValidationService = referalcode => {
    fetch("http://localhost:9999/searchConsumerReferral/" + referalcode)
      .then(res => res.json())
      .then(result => {
        if (result[0] !== undefined) {
          if (
            referalcode === result[0].email ||
            referalcode === result[0].referralCode
          ) {
            this.setState(
              { referer: result[0].consumerDataId, isHome: true },
              () => {
                console.log("this is the state ");
                this.toggleModalOff();
                console.log(this.state);
              }
            );
          }
        } else if (result.message !== undefined) {
          this.setErrMsg(result.message);
          console.log("state ");
          console.log(this.state.validationErrMsg);
        }
      });
  };

  toggleModalOff = () => {
    this.setState({
      showModal: false
    });
  };
  setErrMsg = msg => {
    this.setState({
      validationErrMsg: msg
    });
  };

  goTolandingPage = () => {
    this.setState({
      signUpSucess:true
    } ,
 () => {
   this.props.landingPage();
 }
);
}

  render() {
    console.log("before setting to component" + this.state.isLoading);
    if (this.state.isLoading) {
      return <GridSpinner size={60} color="#2185d0" />;
    } else {
      return (
        <div id="root">
          {/* { this.state.isLoading &&
        <GridSpinner
               size={60}
               color="#2185d0"
             />} */}

          <div className="pushable">
            <div
              className="ui inverted vertical center aligned segment"
              style={{ minHeight: "700px", padding: "1em 0em" }}
            >
              <div className="ui large inverted pointing secondary menu">
                <div className="ui container">
                  <a className="active item" onClick={this.takeMeHome}>
                    Home
                  </a>
                  {this.state.showModal && (
                    <div className="right item">
                      <a
                        className="ui inverted button"
                        role="button"
                        style={{ marginLeft: "0.5em" }}
                        onClick={this.openModalHandler}
                      >
                        Sign Up
                      </a>
                    </div>
                  )}
                </div>
              </div>
              <div className="ui text container">
                <div className="ui middle aligned center aligned grid">
                  {this.state.isShowing && this.state.showModal && (
                    <Modal
                      className="modal"
                      show={this.state.isShowing}
                      close={this.closeModalHandler}
                      validate={this.validatereferal}
                      errmsg={this.state.validationErrMsg}
                    />
                  )}
                  {!this.state.isShowing && (
                    <SignIn
                      loginForm={this.loginDetails}
                      state={this.setcredentials}
                      toggle={this.toggleLoader}
                    />
                  )}
                  {!this.state.showModal && (
                    <SignUp
                      referer={this.state.referer}
                      landingPage={this.goTolandingPage}
                    />
                  )}
                </div>
                {this.state.showModal && (
                  <div>
                    <h1
                      className="ui inverted header"
                      style={{
                        fontSize: "4em",
                        fontWeight: "normal",
                        marginBottom: "0px",
                        marginTop: "3em"
                      }}
                    >
                      Imagine-a-Company
                    </h1>
                    <h2
                      className="ui inverted header"
                      style={{
                        fontSize: "1.7em",
                        fontWeight: "normal",
                        marginTop: "1.5em"
                      }}
                    >
                      Do whatever you want when you want to.
                    </h2>
                    <button className="ui huge primary button">
                      Get Started
                      <i aria-hidden="true" class="right arrow icon" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {this.state.showModal && (
            <div className="ui vertical segment" style={{ padding: "8em 0em" }}>
              <div className="ui container stackable middle aligned grid">
                <div className="row">
                  <div className="eight wide column">
                    <h3 className="ui header" style={{ fontSize: "2em" }}>
                      We Help Companies and Companions
                    </h3>
                    <p className={{ fontSize: "2em" }}>
                      We can give your company superpowers to do things that
                      they never thought possible. Let us delight your customers
                      and empower your needs... through pure data analytics.
                    </p>
                    <h3 className="ui header" style={{ fontSize: "2em" }}>
                      We Make Bananas That Can Dance
                    </h3>
                    <p style={{ fontSize: "2em" }}>
                      Yes that's right, you thought it was the stuff of dreams,
                      but even bananas can be bioengineered.
                    </p>
                  </div>
                  <div className="right floated six wide column">
                    <img
                      src="/images/wireframe/white-image.png"
                      class="ui large bordered rounded image"
                    />
                  </div>
                </div>
                <div className="row">
                  <div class="center aligned column">
                    <button className="ui huge button">Check Them Out</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {this.state.showModal && (
            <div className="ui vertical segment" style={{ padding: "0em" }}>
              <div className="ui stackable internally celled equal width grid">
                <div className="center aligned row">
                  <div
                    className="column"
                    style={{ paddingBottom: "5em", paddingTop: "5em" }}
                  >
                    <h3 className="ui header" style={{ fontSize: "2em" }}>
                      "What a Company"
                    </h3>
                    <p style={{ fontSize: "2em" }}>
                      That is what they all say about us
                    </p>
                  </div>
                  <div
                    className="column"
                    style={{ paddingBottom: "5em", paddingTop: "5em" }}
                  >
                    <h3 className="ui header" style={{ fontSize: "2em" }}>
                      "I shouldn't have gone with their competitor."
                    </h3>
                    <p style={{ fontSize: "1.33em" }}>
                      <img
                        src="/images/avatar/large/nan.jpg"
                        class="ui avatar image"
                      />
                      <b>Nan</b> Chief Fun Officer Acme Toys
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

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
      );
    }
  }
}

export default HomeHeader;
