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
import MapContainer from "../googlemaps/MapContainer";

class Blogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      header: "",
      description: "",
      blogPost: "",
      image: "",
      pagedItems: []
    };
  }
  componentDidMount() {
    BlogService.DisplayMyPosts(this.state, this.onDisplaySuccess, this.onError);
  }
  onDisplaySuccess = resp => {
    this.setState({
      pagedItems: resp.data.Items
    });
  };
  onError = err => {
    console.log("======Error=====", err);
  };
  handleNewBlogClick = evt => {
    this.props.history.push("/blogFormPage");
  };
  onPostSuccess = evt => {
    console.log("this is from MyBlogs!!!!!!!!!!!!");
    this.props.history.push("/Myblog");
  };
  handleDeleteClick = evt => {
    const id = evt.currentTarget.id;
    BlogService.delete(id, this.onDeleteSuccess, this.onError);
  };
  onDeleteSuccess = evt => {
    BlogService.DisplayMyPosts(this.onDisplaySuccess, this.onError);
  };
  handleEditClick = evt => {
    console.log("handleClick.Edit!!!!!!!!!!!!!!!!!", evt.target.id);
    const id = evt.target.id;
    this.props.history.push("/blogFormPage/" + id);
  };


  render() {
    return (
      <Container className=".col-sm-auto .offset-sm-1"
      >
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
              <h1 className="card-title mt-2">Travel Blog</h1>
            </header>
            <button
              tag="a"
              color="info"
              size="small"
              target="_blank"
              className="btn btn-outline-primary"
              onClick={this.handleNewBlogClick}
            >
              Create New Blog
            </button>
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
                  <CardText className="text">{item.BlogPost}</CardText>
                </CardBody>
                <button
                  id={item.Id}
                  style={{ marginTop: 12 }}
                  type="edit"
                  className="btn btn-outline-primary"
                  onClick={this.handleEditClick}
                >
                  {" "}
                  Edit{" "}
                </button>
                <button
                  id={item.Id}
                  style={{ marginTop: 12 }}
                  type="delete"
                  className="btn btn-outline-secondary"
                  onClick={this.handleDeleteClick}
                >
                  {" "}
                  Delete{" "}
                </button>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    );
    
  }
}

export default Blogs;
