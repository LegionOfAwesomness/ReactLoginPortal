import React from "react";
import HomeHeader from "./HomeHeader";
import UserHome  from './userlanding/UserHome'

import "./modal.css";

class RenderPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loginSucess:false , signUpSucess:false};
  }

  //sign in processing
processSignin =  (signInData) =>{
console.log("inside RenderPage");
  console.log(signInData);
if((signInData.isErr !== undefined) && !signInData.isErr){
   console.log("looks like a " + this.state.loginSucess);
   this.setState(
     { loginSucess:true}
   );
}

}

//togle for langing page
// mostly for future use
landingPage = () => {
  this.setState({
    signUpSucess:true
  },
()=>{
  this.loadLandingPage();
})
  console.log("inside render page");
  console.log(this.state.signUpSucess);
}

loadLandingPage = () => {
  this.setState({
    loginSucess:true
  })
}
  render() {
    return (
        <div>
          { (this.state.loginSucess  || this.state.signUpSucess) &&
            <UserHome

            />
          }
          { !this.state.loginSucess &&
            <HomeHeader
              processSignin = {this.processSignin}
              landingPage  = {this.landingPage}
            />
          }

        </div>
    );
  }
}

export default RenderPage;
