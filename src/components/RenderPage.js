import React from "react";
import HomeHeader from "./HomeHeader";
import UserHome from "./userlanding/UserHome";
import MyAccount from "./myaccount/MyAccount";
import MyPersonal from "./myaccount/MyPersonal";
import MyOrders from "./myaccount/MyOrders";
import MyCommisions from "./myaccount/MyCommisions";
import MyRefferals from "./myaccount/MyRefferals";
import MyWishlists from "./myaccount/MyWishlists";
import MyRewards from "./myaccount/MyRewards";
import MyVouchers from "./myaccount/MyVouchers";
import MySettings from "./myaccount/MySettings";
import ConfirmEmail from "./signin/ConfirmEmail";
import ResetPassword from "./signin/ResetPassword";
import ChangePassword from "./signin/ChangePassword";
import { connect } from 'react-redux';
import { userDetails } from '../actions';
import {
  Switch,
  Route,
  Redirect,
  withRouter
} from "react-router-dom";
import "./modal.css";
import Contact from "./ContactComponent";
class RenderPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loginSucess: false, signUpSucess: false };
  }

  //sign in processing
  /**
   * need to relook at thr flow
   */
  processSignin = signInData => {
    //this.setState({ loginSucess: true });
    if((signInData.isErr !== undefined) && !signInData.isErr){
    //updates the user object in redux
      this.props.userDetails(signInData)
      this.props.history.push('/home')
    }
  };

  //togle for langing page
  // mostly for future use
  landingPage = () => {
    this.setState(
      {
        signUpSucess: true
      },
      () => {
        this.loadLandingPage();
      }
    );
    console.log("inside render page");
    console.log(this.state.signUpSucess);
  };

  loadLandingPage = () => {
    this.setState({
      loginSucess: true
    });
  };


  render() {
console.log(this.props);
  const showAllStores = true;
    const HomePage = () => {
      return (
        <div>
          {(this.state.loginSucess || this.state.signUpSucess) && <UserHome />}
          {!this.state.loginSucess && (
            <HomeHeader
              processSignin={this.processSignin}
              landingPage={this.landingPage}
            />
          )}
        </div>
      );
    };
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <HomeHeader
                processSignin={this.processSignin}
                landingPage={this.landingPage}
              />
            )}
          />
        <Route exact path="/AllStores"  render={() => {
          console.log('home')
          return <UserHome  showAllStores={showAllStores}/>;
        } } />
          <Route exact path="/home" component={UserHome}/>
          <Route exact path="/contactus" component={Contact} />} />
          <Route exact path="/myaccount" component={MyAccount}/>
          <Route exact path="/personal" component={MyPersonal}/>
          <Route exact path="/orders" component={MyOrders}/>
          <Route exact path="/commisions" component={MyCommisions}/>
          <Route exact path="/refferals" component={MyRefferals}/>
          <Route exact path="/rewards" component={MyRewards}/>
          <Route exact path="/vouchers" component={MyVouchers}/>
          <Route exact path="/settings" component={MySettings}/>
          <Route exact path="/wishlists" component={MyWishlists}/>
          <Route exact path="/confirm" component={ConfirmEmail}/>
          <Route exact path="/password-reset" component={ResetPassword}/>
          <Route exact path="/change-password" component={ChangePassword} />
          <Route exact path="/ServerError" component={MyVouchers}/>
          <Redirect to="/"/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('inside the redux mapstate to props');
  console.log(state);
  return {
    userInfo: state
  };
};
export default  withRouter(connect(mapStateToProps, { userDetails })(RenderPage));
