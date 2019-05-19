import React from "react";
import "./modal.css";
import axios from "axios";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import  ConfirmEmail from "./ConfirmEmail"

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {},
      redirect: false,
      setServerError: false
    };
  }

  handleChange = e => {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  };

  submituserRegistrationForm = e => {
    e.preventDefault();
    if (this.validateForm()) {
      console.log(this.state.fields);

      this.setState({ referer: this.props.referer }, () => {
        this.createUser(
          this.getUserData(this.state.fields),
          this.state.referer
        );
      });
    }
  };

  checkEmailExists = emailid => {
    let emailEmailExists = false;

    var url =
      "http://sandbox.kewlwallet.com:8080/searchConsumerReferral/" + emailid;
    fetch(url, {
      method: "get",
      headers: new Headers({
        "Authorization": "Basic Y29uc3VtZXJBcGk6c3VwZXJTM2NyM3Q=",
        "Content-Type": "application/json"
      })
    })
      .then(res => res.json())
      .then(result => {
        if (result[0] !== undefined) {
          if (emailid === result[0].email) {
            console.log("email already exists");
            emailEmailExists = true;
            console.log("email already exists" + emailEmailExists);
          }
        }
      });
    console.log("email exists ??" + emailEmailExists);
    return emailEmailExists;
  };

  //call add user service on sucessfull sign up formData
  createUser = (user, referer) => {
    console.log("userdata");
      console.log(user);
    console.log(this.state.referer);

    axios
      .post(
        "http://sandbox.kewlwallet.com:8080/serviceapi/addConsumerProfile/" + referer,
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
        if(response.status == '200'){
            console.log(response.status);
            this.setRedirect();
        }


        }
      })
      .catch(error => {
        console.log("error");
        if (error.response !== undefined) {
          console.log(error.response.data.message);
        this.setServerError();
        }
      });
  };

  getUserData = signUpData => {
    console.log(signUpData);

    let userInfo = {
      firstName: signUpData.fname,
      lastName: signUpData.lname,
      phoneNumber: " ",
      address: {
        line1: " ",
        line2: "signUpData.address2",
        city: "vienna",
        state: "signUpData.state",
        zipcode: "22180"
      },
      consumerData: {
        email: signUpData.emailid
      },
      users:[ {
        userName: signUpData.emailid,
        password: signUpData.password
      }]
    };

    return userInfo;
  };

  //validations for sign up form
  validateForm = () => {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["fname"]) {
      formIsValid = false;
      errors["fname"] = "*Please enter your first name.";
    }

    if (typeof fields["fname"] !== "undefined") {
      if (!fields["fname"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["fname"] = "*Please enter alphabet characters only.";
      }
    }

    // if (!fields["mname"]) {
    //   formIsValid = false;
    //   errors["mname"] = "*Please enter your middle name.";
    // }
    //
    // if (typeof fields["mname"] !== "undefined") {
    //   if (!fields["mname"].match(/^[a-zA-Z ]*$/)) {
    //     formIsValid = false;
    //     errors["mname"] = "*Please enter alphabet characters only.";
    //   }
    // }

    if (!fields["lname"]) {
      formIsValid = false;
      errors["lname"] = "*Please enter your last name.";
    }

    if (typeof fields["lname"] !== "undefined") {
      if (!fields["lname"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["lname"] = "*Please enter alphabet characters only.";
      }
    }

    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "*Please enter your email-ID.";
    }
    //
    // if(this.checkEmailExists(fields["emailid"])){
    //   console.log("inside the validation  ");
    //   formIsValid = false;
    //   errors["emailid"] = "An account already exists with this id";
    // }

    if (typeof fields["emailid"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "*Please enter valid email-ID.";
      }

      // tbd email validation

      //   fetch("http://localhost:9999/searchConsumerReferral/" + fields["emailid"] )
      //   .then(res => res.json())
      //   .then(result => {
      //     if (result[0] !== undefined) {
      //       if (
      //         fields["emailid"] === result[0].email
      //       ) {
      //         formIsValid = false;
      //         console.log('inside the validation method' + formIsValid);
      //         errors["emailid"] = "An account already exists with this id";
      //         console.log(errors["emailid"]);
      //       }
      //     }
      //   });
    }

    // if (!fields["mobileno"]) {
    //   formIsValid = false;
    //   errors["mobileno"] = "*Please enter your mobile no.";
    // }
    //
    // if (typeof fields["mobileno"] !== "undefined") {
    //   if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
    //     formIsValid = false;
    //     errors["mobileno"] = "*Please enter valid mobile no.";
    //   }
    // }

    // if (typeof fields["homephone"] !== "undefined") {
    //   if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
    //     formIsValid = false;
    //     errors["mobileno"] = "*Please enter valid mobile no.";
    //   }
    // }

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

    if (typeof fields["confirmpassword"] !== "undefined") {
      if (fields["password"] !== fields["confirmpassword"]) {
        formIsValid = false;
        errors["confirmpassword"] = "*password does not match";
      }
    }



    this.setState({
      errors: errors
    });
    return formIsValid;
  };

  setServerError = () =>{
    this.setState({
      setServerError: true
    })
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
   if (this.state.redirect) {
     return <Redirect to='/confirm' />
   }
   else if (this.state.setServerError){
     return <Redirect to='/ServerError' />
   }
 }


  render() {
    return (
      <div>
      <div className="ui stacked  segment">
        <h2 className="ui blue image header">
          <div className="content">Complete the Sign up form</div>
        </h2>
        <form
          className="ui  form"
          method="post"
          name="userRegistrationForm"
          onSubmit={this.submituserRegistrationForm}
        >
          {/* User Information with name dob and adress*/}

          <h2 class="ui dividing header" style={{ color: "red !important" }}>
            User Information
          </h2>
          <div class="field">
            <label>Name</label>


            <div class="two fields">
              <div class="field">
                <input
                  type="text"
                  name="fname"
                  value={this.state.fields.fname}
                  onChange={this.handleChange}
                  placeholder="First Name"
                  required
                />
                <div className="errorMsg">{this.state.errors.fname}</div>
              </div>
              <div class="field">
                <input
                  type="text"
                  name="lname"
                  value={this.state.fields.lname}
                  onChange={this.handleChange}
                  placeholder="Last Name"
                  required
                />
                <div className="errorMsg">{this.state.errors.lname}</div>
              </div>
            </div>


            <label>Phone</label>

            <div class="two fields">
              <div class="field">
                <input
                  type="text"
                  name="homephone"
                  name="mobileno"
                  value={this.state.fields.homephone}
                  onChange={this.handleChange}
                  placeholder="Home Phone"
                  required
                />
                <div className="errorMsg">{this.state.errors.homephone}</div>
              </div>
              <div class="field">
                <input
                  type="text"
                  name="mobileno"
                  name="mobileno"
                  value={this.state.fields.mobileno}
                  onChange={this.handleChange}
                  placeholder="Cell Phone"
                  required
                />
                <div className="errorMsg">{this.state.errors.mobileno}</div>
              </div>
            </div>

            <div class="field">
              <label>Address</label>
              <div class="fields">
                <div class="twelve wide field">
                  <input
                    type="text"
                    name="address1"
                    value={this.state.fields.address1}
                    onChange={this.handleChange}
                    placeholder="Street Address"
                    required
                  />
                </div>
                <div class="four wide field">
                  <input
                    type="text"
                    name="address2"
                    value={this.state.fields.address2}
                    onChange={this.handleChange}
                    placeholder="Apt #"
                  />
                </div>
              </div>
            </div>
            <div class="three fields">
              <div class="field">
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  value={this.state.fields.city}
                  onChange={this.handleChange}
                  placeholder="city"
                  required
                />
              </div>
              <div class="field">
                <label>State</label>
                <select
                  class="ui fluid dropdown"
                  name="state"
                  value={this.state.fields.state}
                  onChange={this.handleChange}
                  required
                >
                  <option value="">State</option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="DC">District Of Columbia</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </select>
              </div>
              <div class="field">
                <label>Zipcode</label>
                <input
                  type="text"
                  name="zipcode"
                  value={this.state.fields.zipcode}
                  onChange={this.handleChange}
                  placeholder="Zipcode"
                  required
                />
              </div>
            </div>
          </div>

          {/* account information with id pwd */}

          <h2 class="ui dividing header">Account Information</h2>
          <div class="two fields">
            <div class="two wide field">
              <label>User ID</label>
            </div>
            <div class="eight wide field">
              <input
                type="text"
                name="emailid"
                value={this.state.fields.emailid}
                onChange={this.handleChange}
                placeholder="Email Address"
                required
              />
              <div className="errorMsg">{this.state.errors.emailid}</div>
            </div>
          </div>

          <div class="two fields">
            <div class="field">
              <input
                type="password"
                name="password"
                value={this.state.fields.password}
                onChange={this.handleChange}
                placeholder="Enter a Password"
                required
              />
              <div className="errorMsg">{this.state.errors.password}</div>
            </div>
            <div class="field">
              <input
                type="password"
                name="confirmpassword"
                value={this.state.fields.confirmpassword}
                onChange={this.handleChange}
                placeholder="Confirm Password"
                required
              />
              <div className="errorMsg">
                {this.state.errors.confirmpassword}
              </div>
            </div>
          </div>

          <h4 class="ui dividing header">Terms & Conditions</h4>
          <div class="ui segment">
            <div class="field">
              <div class="ui toggle checkbox">
                <textarea
                  cols="100"
                  rows="5"
                  value="  Do not include a receipt in the packageTerms and conditions go
                    here"
                  readOnly
                />
              </div>
            </div>
            <div class="two fields">
              <div class="one wide field right">
                <input type="checkbox" name="gift" class="hidden" required />
              </div>
              <div class="ten wide field">
                <label>
                  Accept the Terms & Conditions to complete the sign up process
                </label>
              </div>
            </div>
          </div>

          <div>
            <input
              type="submit"
              className="ui download primary button"
              value="Register"
            />
          </div>
        </form>
      </div>
       {this.renderRedirect()}
       </div>
    );
  }
}
export default SignUp;
