import React from "react";
import Footer from './Footer';
import './modal.css';
import ValidateModal from './ValidateModal';
import SignIn  from './signin/SignIn';
import Modal from './signin/Modal';
import SignUp from './signin/SignUp';
import './homepage.css';


class HomeHeader  extends React.Component{
  constructor(props) {
          super(props);
          this.username= "this is a test";
          this.state = {
                        messageShown: false,
                        username: '',
                        pwd : '',
                        isShowing: false,
                        showModal: true
                       };
          }

  loginDetails = (formData) => {
  console.log("inside log in details")
            console.log(formData)
            this.setState({
                messageShown: true ,
                username: formData.username,
                pwd: formData.pwd
            });
  }

// visible invisible toggle for modal
  openModalHandler = () => {
       this.setState({
           isShowing: true
       });
   }

   closeModalHandler = () => {
       this.setState({
           isShowing: false
       });
   }

// validation method for referal code
   validatereferal = (modalState) => {

if(this.callValidationService(modalState.referalcode)){
console.log(modalState.referalcode);
console.log("wow true");
this.toggleModalOff();
}
else{
console.log(modalState.referalcode);
console.log("wow false");
}
   }

   // calling validation service

   callValidationService = (referalCodevalue) => {

     return referalCodevalue==="bhargav"?true:false;
   }

   toggleModalOff = () => {
       this.setState({
           showModal: false
       });
   }


  render(){


    return (
      <div id="root">

      <div className="pushable">
        {/* <div class="ui inverted vertical ui push left visible sidebar menu">
          <a class="active item">Home</a>
          <a class="item">Work</a>
          <a class="item">Company</a>
          <a class="item">Careers</a>
          <a class="item">Log in</a>
          <a class="item">Sign Up</a>
        </div> */}

        <div className="ui inverted vertical center aligned segment" style={{minHeight: '700px', padding: "1em 0em"}}>
          <div className="ui large inverted pointing secondary menu">
            <div className="ui container">
              <a className="active item">Home</a>
              {this.state.showModal &&
              <div className="right item">
                <a className="ui inverted button" role="button" style={{marginLeft: '0.5em'}} onClick={this.openModalHandler}>Sign Up</a>
              </div>}
            </div>
          </div>
          <div className="ui text container">


           <div className="ui middle aligned center aligned grid">
             { this.state.isShowing && this.state.showModal &&
               <Modal
               className="modal"
               show={this.state.isShowing}
               close={this.closeModalHandler}
               validate={this.validatereferal}>
              Enter referral code / email to get started
              </Modal>
            }
            { !this.state.isShowing &&  <SignIn
            loginForm = {this.loginDetails}
            state ={this.state}
          />}
{ !this.state.showModal  && <SignUp />}

       </div>
         {this.state.showModal &&
            <div>
            <h1 className="ui inverted header" style={{fontSize: '4em', fontWeight: 'normal' , marginBottom: '0px', marginTop: '3em'}}>Imagine-a-Company</h1>
            <h2 className="ui inverted header" style={{fontSize: '1.7em',  fontWeight: 'normal' ,marginTop: '1.5em'}}>Do whatever you want when you want to.</h2>
            <button className="ui huge primary button">Get Started<i aria-hidden="true" class="right arrow icon"></i></button>

          </div>
        }
          </div>
        </div>
      </div>


      {this.state.showModal &&
      <div className="ui vertical segment" style={{padding: '8em 0em'}}>
        <div className="ui container stackable middle aligned grid">
          <div className="row">
            <div className="eight wide column">
              <h3 className="ui header" style={{fontSize: '2em'}}>We Help Companies and Companions</h3>
              <p className={{fontSize: '2em'}}>We can give your company superpowers to do things that they never thought possible. Let us delight your customers and empower your needs... through pure data analytics.</p>
              <h3 className="ui header" style={{fontSize: '2em'}}>We Make Bananas That Can Dance</h3>
              <p style={{fontSize: '2em'}}>Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.</p>
            </div>
            <div className="right floated six wide column">
              <img src="/images/wireframe/white-image.png" class="ui large bordered rounded image"/>

              </div>
            </div>
            <div className="row"><div class="center aligned column">
              <button className="ui huge button">Check Them Out</button>
            </div>
          </div>
        </div>
      </div>
    }

    {
      this.state.showModal &&
      <div className="ui vertical segment" style={{padding: '0em'}}>
        <div className="ui stackable internally celled equal width grid">
          <div className="center aligned row">
            <div className="column" style={{paddingBottom: '5em', paddingTop: '5em'}}>
              <h3 className="ui header" style={{fontSize: '2em'}}>"What a Company"</h3>
              <p style={{fontSize: '2em'}}>That is what they all say about us</p>
            </div>
            <div className="column" style={{paddingBottom: '5em', paddingTop: '5em'}}>
              <h3 className="ui header" style={{fontSize: '2em'}}>"I shouldn't have gone with their competitor."</h3>
              <p style={{fontSize: '1.33em'}}>
                <img src="/images/avatar/large/nan.jpg" class="ui avatar image"/>
                <b>Nan</b> Chief Fun Officer Acme Toys</p>
              </div>
            </div>
          </div>
        </div>
}


        <div className="ui inverted vertical segment" style={{padding: '5em 0em'}}>
          <div className="ui container">
            <div className="ui inverted stackable divided grid">
              <div className="row">
                <div className="three wide column">
                  <h4 className="ui inverted header">About</h4>
                  <div role="list" className="ui inverted link list">
                    <a role="listitem" className="item">Sitemap</a>
                    <a role="listitem" className="item">Contact Us</a>
                  </div>
                </div>
                <div className="three wide column">
                  <h4 className="ui inverted header">Services</h4>
                  <div role="list" className="ui inverted link list">
                    <a role="listitem" className="item">Banana Pre-Order</a>
                    <a role="listitem" className="item">DNA FAQ</a>
                  </div>
                </div>
              </div>
                <h6 className="ui inverted header">	© Copyright Kewlwallet 2018 | All Rights Reserved</h6>
            </div>
          </div>
        </div>

</div>
      );
  }
}


export default HomeHeader;
