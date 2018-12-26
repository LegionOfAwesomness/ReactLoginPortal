import React from 'react';

import './modal.css';

class Modal extends React.Component  {

  constructor(props) {
      super(props);
        this.state = {referalcode: ''};
          this.handleChange = this.handleChange.bind(this);
          this.onformSubmit = this.onformSubmit.bind(this);

    }


 //showHideClassName = this.props.show ? "modal display-block" : "modal display-none";
  onformSubmit(event){
    event.preventDefault();
  this.props.validate(this.state);

  }

  handleChange (event) {
  console.log(event.target.value)
  this.setState({referalcode: event.target.value});
  }

  render () {

    return (

      <div
        style={{
          transform: this.props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
        }}>
        <span className="close-modal-btn" onClick={this.props.close}>x</span>
        <h2 className="ui blue image header">
          <div className="content">
             <h2>Member Sign-up</h2>
           </div>
         </h2>
         <form className="ui large form" onSubmit={this.onformSubmit}>
           <div className="ui stacked segment">
             <div className="field">
               <div className="ui left input">
                 <input type="text" name="email" value = {this.state.referalcode} onChange={this.handleChange} placeholder="E-mail address"/>
               </div>
             </div>

             <input class="ui fluid large blue submit button" type="submit" value="VALIDATE" />

           </div>

          <div className="ui error message"></div>

       </form>

        <div className="ui message">
          Already an User <a href="#">Sign In</a>
         </div>

     </div>


    )
}}

export default Modal;
