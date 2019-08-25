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
import ReactPlayer from "react-player";
import { Container, Row, Col } from "reactstrap";
import { withRouter } from "react-router-dom";

/**
 * consits of Sign up, Login portal
 *
 */
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
    this.setState({
      isLoading: false
    });
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
  /**
   * [callValidationService description]
   * @method callValidationService
   * @param   referalcode [for signup process]
   * @return if validation of referal code is sucessfull
   * then move to sign up form
   */
  callValidationService = referalcode => {
    axios
      .get(
        "http://sandbox.kewlwallet.com:8080/serviceapi/searchConsumerReferral/" +
          referalcode,
        {
          headers: {
            Authorization: "Basic Y29uc3VtZXJBcGk6c3VwZXJTM2NyM3Q=",
            "Content-Type": "application/json"
          }
        }
      )
      .then(response => {
        console.log(response);
        if (response.data !== "") {
          if (response.data.consumerData !== undefined) {
            if (
              referalcode === response.data.consumerData.email ||
              referalcode === response.data.consumerData.referralCode
            ) {
              this.setState(
                {
                  referer: response.data.consumerData.consumerDataId,
                  isHome: true
                },
                () => {
                  console.log("this is the state ");
                  this.toggleModalOff();
                  console.log(this.state);
                }
              );
            }
          }
        } else {
          this.setErrMsg("Referal code is not valid");
          console.log("state ");
          console.log(this.state.validationErrMsg);
        }
      });
  };
/**
 * Signup modal off
 * @method toggleModalOff
 * @return {[type]} [description]
 */
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
    //need to check if this is still neccesary
    // already being seet in the following method
    this.setState(
      {
        signUpSucess: true
      },
      () => {
        this.props.landingPage();
      }
    );
  };

  render() {
    console.log("before setting to component" + this.state.isLoading);
    if (this.state.isLoading) {
      return <GridSpinner size={60} color="#2185d0" />;
    } else {
      return (
        <div id="root">
          {" "}
          {this.state.isLoading && <GridSpinner size={60} color="#2185d0" />}
          <div className="pushable">
            <div
              className="ui inverted vertical center aligned segment"
              style={{
                minHeight: "700px",
                padding: "1em 0em"
              }}
            >
              <div className="ui large inverted pointing secondary menu">
                <div className="ui container">
                  <a className="header item" onClick={this.takeMeHome}>
                    <img
                      src="/kewlwallet.jpg"
                      className="ui small image"
                      style={{ marginRight: "1.5emem" }}
                    />
                  </a>
                  {this.state.showModal && (
                    <div className="right item">
                      <a
                        className="ui inverted button"
                        role="button"
                        style={{
                          marginLeft: "0.5em"
                        }}
                        onClick={this.openModalHandler}
                      >
                        Sign Up{" "}
                      </a>{" "}
                    </div>
                  )}{" "}
                </div>
              </div>

              <div className="ui text container">
                <div className="ui middle aligned center aligned grid">
                  {" "}
                  {this.state.isShowing && this.state.showModal && (
                    <Modal
                      className="modal"
                      show={this.state.isShowing}
                      close={this.closeModalHandler}
                      validate={this.validatereferal}
                      errmsg={this.state.validationErrMsg}
                    />
                  )}{" "}
                  {!this.state.isShowing && (
                    <SignIn
                      loginForm={this.loginDetails}
                      state={this.setcredentials}
                      toggle={this.toggleLoader}
                    />
                  )}{" "}
                  {!this.state.showModal && (
                    <SignUp
                      referer={this.state.referer}
                      landingPage={this.goTolandingPage}
                    />
                  )}{" "}
                </div>{" "}
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
                      Imagine - a - Company{" "}
                    </h1>{" "}
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
                      Get Started{" "}
                      <i aria-hidden="true" className="right arrow icon" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          }
          {this.state.showModal && (
            <div
              className="ui vertical segment"
              style={{
                padding: "8em 0em"
              }}
            >
              <div className="ui container stackable middle aligned grid">
                <h3
                  className="ui header"
                  style={{
                    fontSize: "2em"
                  }}
                >
                  We Help Companies and Companions{" "}
                </h3>
                <div class="ui segment">
                  <ReactPlayer
                    url="https://youtu.be/We5hMpI2HbU"
                    className="react-player"
                    playing
                    width="100%"
                    height="100%"
                  />
                </div>{" "}
              </div>{" "}
            </div>
          )}
          {this.state.showModal && (
            <div
              className="ui vertical segment"
              style={{
                padding: "0em"
              }}
            >
              <div className="ui stackable internally celled equal width grid">
                <div className="center aligned row">
                  <div
                    className="column"
                    style={{
                      paddingBottom: "5em",
                      paddingTop: "5em"
                    }}
                  >
                    <h3
                      className="ui header"
                      style={{
                        fontSize: "2em"
                      }}
                    >
                      "What a Company"{" "}
                    </h3>{" "}
                    <p
                      style={{
                        fontSize: "2em"
                      }}
                    >
                      That is what they all say about us{" "}
                    </p>{" "}
                  </div>{" "}
                  <div
                    className="column"
                    style={{
                      paddingBottom: "5em",
                      paddingTop: "5em"
                    }}
                  >
                    <h3
                      className="ui header"
                      style={{
                        fontSize: "2em"
                      }}
                    >
                      "I shouldn't have gone with their competitor."{" "}
                    </h3>{" "}
                    <p
                      style={{
                        fontSize: "1.33em"
                      }}
                    >
                      <img
                        src="/images/avatar/large/nan.jpg"
                        class="ui avatar image"
                      />
                      <b> Nan </b> Chief Fun Officer Acme Toys{" "}
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>
          )}
          <div
            className="ui inverted vertical segment"
            style={{
              padding: "5em 0em"
            }}
          >
            <Footer />
          </div>
        </div>
      );
    }
  }
}

export default withRouter(HomeHeader);
