import React from "react";

class ValidateModal  extends React.Component{

  constructor(props){

    super(props)
    this.state = { showModal: false };
  }

  showHideClassName() {
    console.log("inside class " + this.props.show)
   this.setState = ({showModal : this.props.show })
   console.log("inside class 2 " +  this.setState.showModal)
    return  this.setState.showModal ? "modal display-block" : "modal display-none";
  };

hideModal = () => {
  console.log("inside com")
this.setState = ({showModal : false })
console.log("after close" + this.setState.showModal);

}



  render(){

      return(
         <div className={this.showHideClassName()}>
          <section className={"modal-main"}>

          <button  type="button" onClick={this.hideModal} >close</button>
          </section>
        </div>
      );
  }
}

export default ValidateModal;
