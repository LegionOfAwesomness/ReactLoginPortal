import React from "react";
import axios from "axios";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: "", pwd: "" };
    this.onformSubmit = this.onformSubmit.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePwd = this.handlePwd.bind(this);
  }

  onformSubmit(event) {
    event.preventDefault();
    this.setState(
      { loginData: "response.data", isErr: false, loginErrMsg: null },
      () => {
       this.props.loginForm(this.state);
     })
    //this.props.toggle(true);
  //  this.callLoginService(this.state);
    console.log("before passing to home component");
    console.log(this.state);
  }

  // calling user authentication service
  callLoginService = user => {
    console.log("  inside the service call method");

    axios
      .post("http://sandbox.kewlwallet.com:8080/serviceapi/userlogin",
        {
          username: 'consumerApi',
          password: 'superS3cr3t'
        }, {
        password: user.pwd,
        userName: user.id
      },)
      .then(response => {
        if (response.status !== undefined) {
          this.props.toggle(false);
          this.setState(
            { loginData: response.data, isErr: false, loginErrMsg: null },
            () => {
             this.props.loginForm(this.state);
            }
          );
        }
      })
      .catch(error => {
        console.log("error");
        if (error.response !== undefined) {
          this.props.toggle(false);
          console.log(error.response.data.message);
          this.setState({
            loginErrMsg: error.response.data.message,
            isErr: true}
          );
        }
      });
    console.log(this.state);
  };

  handleUsername(event) {
    this.setState({ id: event.target.value });
  }

  handlePwd(event) {
    this.setState({ pwd: event.target.value });
  }

  render() {
    return (
      <div>
        <div className="ui stacked  segment">
          <h2 className="ui blue image header">
            <div className="content">Log-in to your account</div>
          </h2>
          <form className="ui large form" onSubmit={this.onformSubmit}>
            <div className="field">
              <div className="ui left icon input">
                <i className="user icon" />
                <input
                  type="text"
                  name="email"
                  value={this.state.id}
                  onChange={this.handleUsername}
                  placeholder="E-mail address"
                />
              </div>
            </div>
            <div className="field">
              <div className="ui left icon input">
                <i className="lock icon" />
                <input
                  type="password"
                  name="password"
                  value={this.state.pwd}
                  onChange={this.handlePwd}
                  placeholder="Password"
                />
              </div>
            </div>
            <input
              className="ui fluid large blue submit button"
              type="submit"
              value="Submit"
            />
          </form>

          <div className="ui message">
            {this.state.isErr && (
              <h5 className="ui message">{this.state.loginErrMsg}</h5>
            )}
            <a href="#">Forgot Password ?</a>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
