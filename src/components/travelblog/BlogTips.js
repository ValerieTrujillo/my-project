import React from "react";
import {
  Col,
  Row,
  Container,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle
  // Button
} from "reactstrap";
import BlogService from "../../services/BlogService";
// import BlogsForm from "./BlogsForm";

class BlogTips extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pagedItems: []
    };
  }
  componentDidMount() {
    BlogService.DisplayAll(this.state, this.onDisplaySuccess, this.onError);
  }
  onDisplaySuccess = resp => {
    console.log("===========This is my blog data===========", resp);
    this.setState({
      pagedItems: resp.data.Items
    });
  };
  onError = err => {
    console.log("======Error=====", err);
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col
              style={{
                width: "35vw",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <header className="card-header">
                <h1 className="card-title mt-2">Travel Tips</h1>
              </header>
              <br />
              {this.state.pagedItems.map(item => (
                <Card body outline color="secondary">
                  <CardImg
                    top
                    width="90%"
                    src={item.Image}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle className="text">{item.Header}</CardTitle>
                    <CardText className="text">{item.Description}</CardText>
                    <a href="https://theblondeabroad.com/travel-blog/">
                      Read More!
                    </a>
                  </CardBody>
                </Card>
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default BlogTips;
