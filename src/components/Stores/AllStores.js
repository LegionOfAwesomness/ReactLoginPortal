import React from "react";


var storesList = [];



class AllStores extends React.Component {
  constructor(props) {
    super(props);
    this.callAllUserService();
  }

  state = {
    value: storesList
  }


  callAllUserService = () => {

    var url = "http://localhost:9999/getCJDeveloperFromDB";
    fetch(url)
        .then(res => res.json())
        .then(
          (result) => {
            storesList = result;
            console.log(storesList);
            this.setState(
              { value: storesList},
              () => {
               console.log(this.state);
             })
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            console.log(error);

          }
        )
        console.log("state");
        console.log(this.state)
}



  render() {
    return (
      <div>
      <h1>wowowowowowowowo</h1>
      { this.state.value.map((post) =>
      <div key={post.id}>
        <h3>{post.advertiser_name}</h3>
        <p>{post.content}</p>
      </div>
    )}
      </div>


)
}
}
export default AllStores;
