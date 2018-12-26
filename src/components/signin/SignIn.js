import React from 'react';



class SignIn extends  React.Component{
  constructor(props) {
      super(props);
      this.state = {id: '', pwd : ''};
      this.onformSubmit = this.onformSubmit.bind(this);
      this.handleUsername = this.handleUsername.bind(this);
      this.handlePwd = this.handlePwd.bind(this);

    }

    onformSubmit(event){
      event.preventDefault();
    this.props.loginForm(this.state);

    }
  handleUsername(event) {

      this.setState({id: event.target.value});
    }

    handlePwd(event) {

        this.setState({pwd: event.target.value});
      }

  render(){
    return (
    <div>
      <h2 className="ui blue image header">
        <div className="content">
          Log-in to your account
        </div>
      </h2>
      <form className="ui large form" onSubmit={this.onformSubmit}>
        <div className="ui stacked segment">
          <div className="field">
            <div className="ui left icon input">
              <i className="user icon"></i>
              <input type="text" name="email" value = {this.state.id} onChange={this.handleUsername} placeholder="E-mail address"/>

            </div>
          </div>
          <div className="field">
            <div className="ui left icon input">
              <i className="lock icon"></i>
              <input type="password" name="password" value = {this.state.pwd} onChange={this.handlePwd} placeholder="Password"/>
            </div>
          </div>
          <input className="ui fluid large blue submit button" type="submit" value="Submit" />

        </div>

        <div className="ui error message"></div>

      </form>

      <div className="ui message">
        <a href="#">Forgot Password ?</a>
      </div>

  </div>
);

 }
}

export default SignIn;
