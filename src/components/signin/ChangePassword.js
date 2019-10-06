import React from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import { Container, Row, Col, Navbar, NavbarBrand } from "reactstrap";
import { Button, Form, Message } from 'semantic-ui-react';

import axios from "axios";

class ChangePassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = { fields: {}, errors: {}, isSucess: false, errmsg: null};
    }

    onformSubmit = (event) => {
        event.preventDefault();
        if (this.validateForm()){
            console.log("inside llllllll")
            if (this.checkEmailExists(this.state.fields.email)) {

                console.log("inside callllllllllll")
                this.updatePassword(this.state.fields);
            }
        }
        

    }

    handleChange = e => {
        console.log(e.target.value);
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });
    }

    /**
    * check email exists and send out an reset email
    */
    checkEmailExists = email => {
        let emailEmailExists = false;
        console.log(email);
        var url =
            "http://localhost:8080/searchConsumerReferral/" + email;
        fetch(url, {
            method: "get",
            headers: new Headers({
                "Authorization": "Basic Y29uc3VtZXJBcGk6c3VwZXJTM2NyM3Q=",
                "Content-Type": "application/json"
            })
        })
            .then(response => {
                console.log(response);
                if (response !== "") {
                            this.setState(
                                {
                                    isSucess: true
                                },
                                () => {
                                    console.log("this is the state ");
                                    console.log(this.state);
                                  }
                            );
                } else {
                    this.setErrMsg("Referal code is not valid");
                    console.log("state ");
                }
            });
        console.log("email exists ??" + this.state.isSucess);
        return this.state.isSucess;
    };

    /**
     * send out an email to set reset flag true
     */
    sendPwdResetLink = email => {
        var url =
            "http://localhost:8080/passwordreset/" + email;
        fetch(url, {
            method: "get",
            headers: new Headers({
                "Authorization": "Basic Y29uc3VtZXJBcGk6c3VwZXJTM2NyM3Q=",
                "Content-Type": "application/json"
            })
        })
            .then(response => {
                console.log(response.data);
                console.log(response);
                if (response !== "") {
                    if (response.consumerData !== undefined) {
                        console.log("sent email ");
                    }
                } else {
                    console.log("state ");
                }
            });
    };
    /**
     * update password  with resetpassword flag
     */
    updatePassword = user => {
        axios
            .post(
                "http://localhost:8080/updateUser/PasswordReset",
                user,
                {
                    headers: {
                        'Authorization': "Basic Y29uc3VtZXJBcGk6c3VwZXJTM2NyM3Q=",
                        "Content-Type": "application/json"
                    }
                }
            )
            .then(response => {
                if (response.status !== undefined) {
                    //  this.props.landingPage();
                    if (response.status == '200') {
                        console.log(response.status);
                    }
                }
            })
            .catch(error => {
                console.log("error");
                if (error.response !== undefined) {
                    console.log(error)
                }
            });
    };

    /**
     * validate form 
     */
    validateForm = () => {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "*Please enter your email-ID.";
        }

        if (typeof fields["email"] !== "undefined") {
            //regular expression for email validation
            var pattern = new RegExp(
                /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
            );
            if (!pattern.test(fields["email"])) {
                formIsValid = false;
                errors["email"] = "*Please enter valid email-ID.";
            }

        }

        if (!fields["password"]) {
            formIsValid = false;
            errors["password"] = "*Please enter your password.";
        }

        if (typeof fields["password"] !== "undefined") {
            if (
                !fields["password"].match(
                    /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/
                )
            ) {
                formIsValid = false;
                errors["password"] = "*Please enter secure and strong password.";
            }
        }

        if (typeof fields["confirmPwd"] !== "undefined") {
            if (fields["password"] !== fields["confirmPwd"]) {
                formIsValid = false;
                errors["confirmPwd"] = "*password does not match";
            }
        }



        this.setState({
            errors: errors
        });
        return formIsValid;
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
                    </div>
                </div>
                <br />
                <Container>
                    <h10>Password Reset</h10>
                    <h2 class="ui horizontal divider header">Password Reset</h2>

                    <form class={this.state.isSucess ? "ui success form" : "ui error form"} onSubmit={this.onformSubmit} >
                        <div class="field">
                            <label>Email</label>
                            <div class="ui input"><input
                                type="text"
                                name="email"
                                value={this.state.fields.email}
                                onChange={this.handleChange}
                                placeholder="E-mail address"
                            /></div>
                            <div className="errorMsg">{this.state.errors.email}</div>
                        </div>
                        <div class="field">
                            <label>New Password</label>
                            <div class="ui input"><input
                                type="text"
                                name="password"
                                value={this.state.fields.password}
                                onChange={this.handleChange}
                                placeholder="New Password"
                            /></div>
                            <div className="errorMsg">{this.state.errors.password}</div>
                        </div>
                        <div class="field">
                            <label>Confirm Password</label>
                            <div class="ui input"><input
                                type="text"
                                name="confirmPwd"
                                value={this.state.fields.confirmPwd}
                                onChange={this.handleChange}
                                placeholder="Confirm Password"
                            /></div>
                            <div className="errorMsg">{this.state.errors.confirmPwd}</div>
                        </div>

                        <div class="ui success message">
                            <div class="content">
                                <div class="header">Form Completed</div>
                                <p>You&#x27;re all signed up for the newsletter</p>
                            </div>
                        </div>
                        {this.state.isSucess == false &&
                            <div class="ui error message">
                                {console.log(this.state.isSucess)}
                                <div class="content">
                                    <div class="header">Action Forbidden</div>
                                    <p>You can only sign up for an account once with a given e-mail address.</p>
                                </div>
                            </div>}
                        <button class="ui button">Submit</button>
                    </form>

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

export default ChangePassword;