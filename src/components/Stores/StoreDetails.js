import React from "react";

class StoreDetails extends React.Component {
  constructor(props) {
    super(props);
    console.log("entered store details");
    console.log(this.props.id);
    this.callStoreDetailService(this.props.id);
  }

  callStoreDetailService = id => {
    console.log("reached service call");
    var url = "http://localhost:9999/getCouponsForAdvertiser/" + id;
    fetch(url)
      .then(res => res.json())
      .then(
        result => {
          this.setState({ value: result }, () => {
            console.log("store details");
            console.log(this.state.value);
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

  getAllCoupons = () => {
    return (
      <div>
      <div class="ui fluid placeholder">
 <div class="image header">
   <div class="line"></div>
   <div class="line"></div>
 </div>
 <div class="paragraph">
   <div class="line"></div>
   <div class="line"></div>
   <div class="line"></div>
 </div>
</div>
<div class="ui fluid placeholder">
<div class="image header">
<div class="line"></div>
<div class="line"></div>
</div>
<div class="paragraph">
<div class="line"></div>
<div class="line"></div>
<div class="line"></div>
</div>
</div>

        {this.state !== null &&
          this.state.value.map(post => {
            //let boundItemClick = this.getStore.bind( this,post);
            //  console.log(boundItemClick);
            // Construct the onClick with our bound function
            return (

              <div class="ui message">
                <div class="header">{post.link_name}</div>
                {post.coupon_code != "" && (
                  <div class="ui tag labels">
                    <a class="ui teal tag label">{post.coupon_code}</a>
                  </div>
                )}
                <div class="ui bottom attached button"  dangerouslySetInnerHTML={{__html: post.link_code_javascript}} />


              </div>

            );
          }
        )}
        }
      </div>
     );
  };

  render() {
    return <div>{this.getAllCoupons()}</div>;
  }
}

export default StoreDetails;
