import React from "react";
import Pagination from "pagination-component";
import { css } from "glamor";
import { ListGroup, Tab } from "react-bootstrap";
var storesList = [];
let size = 0;

const pageLink = css({
  margin: "2px",
  display: "inline-block",
  padding: "2px",
  WebkitBorderRadius: "20px",
  MozBorderRadius: "20px",
  borderRadius: "20px"
});

const currentLink = css({
  backgroundColor: "#0074c2",
  display: "inline-block",
  color: "#FFFFFF",
  "a:link": { color: "#FFFFFF" },
  "a:visited": { color: "#FFFFFF" },
  "a:active": { color: "#FFFFFF" }
});

class AllStores extends React.Component {
  constructor(props) {
    super(props);
    this.callAllUserService();
  }

  state = {
    value: storesList,
    renderPage: []
  };

  setListTOPages = (perPage, pageNum) => {
    //finding the total pages
    let totalPages = Math.ceil(storesList.length / perPage);
    console.log(totalPages);
    var storesPerPageList = [];
    var count = 0;
    for (var i = 0; i < totalPages; i++) {
      storesPerPageList.push(i * perPage);
    }
    storesPerPageList.push(storesList.length);
    console.log(storesPerPageList);

    //creating a mini list for the pagination
    var renderPageList = [];
    for (
      var i = storesPerPageList[pageNum];
      i < storesPerPageList[pageNum + 1];
      i++
    ) {
      renderPageList.push(this.state.value[i]);
    }
    this.setState({ renderPage: renderPageList }, () => {
      console.log("logging page list " + pageNum);
      console.log(this.state.renderPage);
      //  this.renderPaginationList(this.state.renderPage);
    });
  };

  //render the store
  renderPaginationList = () => {
    return (
      <div class="ui cards">
      {
    this.state.renderPage.map((post) => {
      //let boundItemClick = this.getStore.bind( this,post);
    //  console.log(boundItemClick);
      // Construct the onClick with our bound function
      return (     <div class="card"  key={post.advertiser_id} onClick={()=> {this.getStore(post.advertiser_id)}}>
        
              <div class="content">
                <img
                  class="right floated mini ui image"
                  src="/images/avatar/large/elliot.jpg"
                />
                <div class="header">{post.advertiser_name}</div>
                <div class="meta">clothes</div>
                <div class="description">{post.content}</div>
              </div>

            </div>)
    })
  }
      </div>
    );
  };
  callAllUserService = () => {
    var url = "http://localhost:9999/getCJDeveloperFromDB";
    fetch(url)
      .then(res => res.json())
      .then(
        result => {
          storesList = result;
          console.log("this is real one");
          console.log(Math.ceil(storesList.length / 50));
          this.setState({ value: storesList }, () => {
            console.log("all the stores");
            console.log(this.state.value);
            this.setListTOPages(50, 0);
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          console.log(error);
        }
      );

    console.log("state");
    console.log(this.state);
  };

getStore = (advertiserId) =>{
  this.props.showSelectedStore(advertiserId);
  console.log(advertiserId);
}

  render() {
    return (
      <div>
        <div class="ui borderless menu">
          <Pagination
            currentPage={0}
            pageCount={Math.ceil(storesList.length / 50)}
            pageLinkClassName={pageLink}
            currentLinkClassName={currentLink}
            onPageClick={i => {
              this.setListTOPages(50, i);
              console.log(`Link to page ${i} was clicked.`);
            }}
          />
          <a class="item">A</a>
          <a class="item">B</a>
          <a class="item">C</a>
          <a class="item">D</a>
          <a class="item">E</a>
          <a class="item">F</a>
          <a class="item">G</a>
          <a class="item">H</a>
          <a class="item">I</a>
          <a class="item">J</a>
          <a class="item">K</a>
          <a class="item">L</a>
          <a class="item">M</a>
          <a class="item">N</a>
          <a class="item">O</a>
          <a class="item">P</a>
          <a class="item">Q</a>
          <a class="item">R</a>
          <a class="item">S</a>
          <a class="item">T</a>
          <a class="item">U</a>
          <a class="item">V</a>
          <a class="item">W</a>
          <a class="item">X</a>
          <a class="item">Y</a>
          <a class="item">Z</a>
        </div>

        <div class="ui grid">
          <div class="four wide column">
            <div class="ui vertical fluid tabular menu">
              <a class="item">Clothing</a>
              <a class="item">Accesories</a>
              <a class="item">Travel & Vacations</a>
              <a class="item">Health & Beauty</a>
              <a class="item">Shoes & Handbags</a>
              <a class="item">Electronics</a>
              <a class="item">Home Decor & Furniture</a>
              <a class="item">Home Improvement & Appliances</a>
              <a class="item">Pet Supplies</a>
              <a class="item">Food & Restaurants</a>
              <a class="item">Office Supplies</a>
              <a class="item active">All Stores</a>
            </div>
          </div>
          <div class="twelve wide stretched column">
            <div class="ui segment">{this.renderPaginationList()}</div>
          </div>
        </div>
      </div>
    );
  }
}
export default AllStores;
