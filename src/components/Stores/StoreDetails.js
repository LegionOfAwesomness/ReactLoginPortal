/**
 * This class is used to display store info and all the coupons available from the store
 * 
 */

import React from "react";
import { Button, ButtonGroup,Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Col, Container, Jumbotron, Row } from "reactstrap";

class StoreDetails extends React.Component {
  constructor(props) {
    super(props);
    this.callStoreDetailService(this.props.id);
  }
/**
 * extracts the url  from htm_url  variable
 */
  createMarkup = (doc) => {
    // console.log(doc);
    var str = doc.substring(9, doc.indexOf('\">\n<img'));
    console.log('qqqqqqqqqqq' + str);
    return str;
  }

  callStoreDetailService = id => {
    var url =
      "http://localhost:8080/getCouponsForAdvertiser/" +
      id;
    fetch(url, {
      method: "get",
      headers: new Headers({
        Authorization: "Basic Y29uc3VtZXJBcGk6c3VwZXJTM2NyM3Q=",
        "Content-Type": "application/x-www-form-urlencoded"
      })
    })
      .then(res => res.json())
      .then(
        result => {
          this.setState({ value: result }, () => {
            console.log(this.state.value)
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          console.log(error);
        }
      );
  };
  // image and description on the left of the page
  //this is static data as of now.
  getAdvertiser = () => {
    console.log("inde the advertiser method");

    return (
      <Card>
        <CardImg
          top
          width="100%"
          src="/997-medium_default.jpg"
          alt="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
        />
        <CardBody>
          <CardTitle>Store Name</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    );
  };
/**
 * displays coupons for selected advertiser
 */
  getAllCoupons = () => {
    return (
      <div>
        {this.state !== null &&
          this.state.value.map(post => {
            var link = post.link_code_html
            return (
              <div class="ui message" >
                <div class="header">{post.link_name}</div>
                {post.coupon_code !== "" && (
                  <div class="ui tag labels">
                    <a class="ui teal tag label">{post.coupon_code}</a>
                  </div>
                )}
                <div
                  class="ui bottom attached button"
            
                />
                <ButtonGroup>
                  <Button outline color="primary" href={this.createMarkup(post.link_code_html)} active={this.state.rSelected === 1}>Visit Store</Button>
                </ButtonGroup>
              </div>
            );
          })}
      </div>
    );
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col xs="12">
              <Jumbotron />
            </Col>
          </Row>
          <Row>
            <p />
          </Row>
          <Row>
            <Col xs="4">{this.getAdvertiser()}</Col>
            <Col xs="8">{this.getAllCoupons()}</Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default StoreDetails;
