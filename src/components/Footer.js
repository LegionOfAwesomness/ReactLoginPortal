import React from "react";
import './homepage.css';
import { Link } from "react-router-dom";

class Footer  extends React.Component{
  constructor(props){
    super(props);

  }

  componentDidMount(){
    console.log('footer did mount ');
  }
  //
  componentDidUpdate(){
    console.log('footer did load');
  }

  render(){
    return (
      <div class="pusher">


    <div class="ui inverted vertical footer segment">
      <div class="ui container">
        <div class="ui stackable inverted divided equal height stackable grid">
          <div class="three wide column">
            <h4 class="ui inverted header">About</h4>
            <div class="ui inverted link list">
            <Link class="item" to="/">Home</Link>
            <Link class="item" to="/Contact">Contact Us</Link>
            <Link class="item" to="/home">About Us</Link>
            </div>
          </div>
        </div>
        <h6 className="ui inverted header">	© Copyright Kewlwallet 2018 | All Rights Reserved</h6>
      </div>
    </div>
  </div>
      );
  }
}

export default Footer;
