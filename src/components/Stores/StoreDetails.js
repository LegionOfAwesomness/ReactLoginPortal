import React from "react";
import { Container, Row, Col } from "reactstrap";
import {
  Jumbotron,
  Media,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

class StoreDetails extends React.Component {


  constructor(props) {
    super(props);

    this.callStoreDetailService(this.props.id);
  }

  callStoreDetailService = id => {
    console.log("reached service call");
    var url =
      "http://sandbox.kewlwallet.com:8080/serviceapi/getCouponsForAdvertiser/" +
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

  getAllCoupons = () => {
    return (
      <div>
        {this.state !== null &&
          this.state.value.map(post => {
            var link = post.link_code_html
            return (
              <div class="ui message" >
                <div class="header">{post.link_name}</div>
                {post.coupon_code != "" && (
                  <div class="ui tag labels">
                    <a class="ui teal tag label">{post.coupon_code}</a>
                  </div>
                )}
                <div
                  class="ui bottom attached button"
                  dangerouslySetInnerHTML={{
                    __html: post.link_code_javascript
                  }}
                />
              </div>
            );
          })}
        }
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
