import React from "react";
// import MyBlogs from "./MyBlogs";
import BlogsForm from "./BlogsForm";
import BlogService from "../../services/BlogService";
// import Panel from '../Panel';

class BlogFormPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      header: "",
      description: "",
      blogPost: "",
      image: "",
      form: "",
      buttonText: "Submit"
    };
  }
  componentDidMount() {
    if (this.props.match.params.id) {
      const id = this.props.match.params.id;
      this.setState({
        id: id
      });
      BlogService.selectMyBlogById(
        id,
        this.selectByIdSuccess,
        this.selectByIdError
      );
    }
  }

  changeImageState=image=>{
    this.setState({image:image})
  }
  selectByIdSuccess = resp => {
    console.log("==========select By Id success=======", resp);
    this.setState({
      buttonText: "Update",
      header: resp.data.Item.Header,
      description: resp.data.Item.Description,
      blogPost: resp.data.Item.BlogPost,
      image: resp.data.Item.Image
    });
    console.log(resp);
  };
  selectByIdError = error => {
    console.log(error);
  };

  onGetByIdError = error => {
    console.log(error);
  };
  onGetByIdSuccess = resp => {
    console.log("=====Get by id success=======", resp);
  };
  onPostSuccess = resp => {
    console.log("on post success???????????", resp);
    this.props.history.push("/Myblogs");
  };

  onError = err => {
    console.log(err);
  };

  onUpdateBlogsSuccess = resp => {
    console.log("===========update Success========", resp);
  };
  handleDeleteClick = evt => {
    const id = evt.currentTarget.id;
    BlogService.delete(id, this.onDeleteSuccess, this.onError);
  };
  render() {
    return (
      <BlogsForm
        id={this.state.id}
        header={this.state.header}
        description={this.state.description}
        blogPost={this.state.blogPost}
        image={this.state.image}
        submitBtnText={this.state.buttonText}
        onSuccess={this.onUpdateBlogsSuccess}
        onError={this.onError}
        handleCancelClick={this.handleCancelClick}
        onDeleteClick={this.handleDeleteClick}
        changeImageState={this.changeImageState}
      />
    );
  }
  handleCancelClick = evt => {
    this.props.history.push("/Myblogs");
  };
}

export default BlogFormPage;
