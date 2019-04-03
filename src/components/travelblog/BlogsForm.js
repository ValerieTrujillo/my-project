import React from "react";
import ImageUpload from "../imageupload/ImageUpload";
import BlogService from "../../services/BlogService";
import { Formik, Form } from "formik";
// import { FormGroup, Label, Input } from "reactstrap";
// import TextField from "material-ui/TextField";
import * as Yup from "yup";
import {
  Input,
  Col,
  Row,
  Container,
  Card,
  CardText,
  CardBody,
  CardTitle
} from "reactstrap";

const BlogsForm = props => {
  const blogsSchema = Yup.object().shape({
    header: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    blogPost: Yup.string().required("Required"),
    image: Yup.string()
      .required("Required")
      .url("Please enter a Url")
  });

  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        submitBtnText: props.submitBtnText,
        id: props.id,
        header: props.header,
        description: props.description,
        blogPost: props.blogPost,
        image: props.image
      }}
      validationSchema={blogsSchema}
      onSubmit={(values, actions) => {
        if (!values.id) {
          console.log("========insert======", values.id);
          BlogService.insert(values, props.onPostSuccess, props.onPostError);
        } else {
          BlogService.update(values.id, values, props.onSuccess, props.onError);
        }
        actions.setSubmitting(false);
        console.log("Here are the values that I'm looking for", values);
        alert("Form Submitted");
      }}
      render={({
        values,
        isSubmitting,
        handleChange,
        handleBlur,
        onRequiredChange
      }) => (
        <Form>
          <Container>
            <Row>
              <Col>
                <header className="card-header">
                  <h1 className="card-title mt-2">New Blog Post</h1>
                </header>
                <Card body outline color="secondary">
                  <ImageUpload changeImageState={props.changeImageState} />
                  <CardBody>
                    <CardTitle className="text">Blog Title</CardTitle>
                    <Input
                      type="text"
                      value={values.header}
                      name="header"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <CardText className="text">Description</CardText>
                    <Input
                      type="description"
                      value={values.description}
                      name="description"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <CardText className="text">Blog Post</CardText>
                    <Input
                      type="textarea"
                      value={values.blogPost}
                      name="blogPost"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </CardBody>
                  <button
                    style={{ marginTop: 12 }}
                    type="submit"
                    className="btn btn-outline-primary"
                    disabled={isSubmitting}
                    // onClick={props.submitHandleClick}
                  >
                    {props.submitBtnText}
                  </button>
                  <button
                    style={{ marginTop: 12 }}
                    type="delete"
                    className="btn btn-outline-secondary"
                    onClick={props.handleCancelClick}
                  >
                    Cancel
                  </button>
                </Card>
              </Col>
            </Row>
          </Container>
        </Form>
      )}
    />
  );
};

export default BlogsForm;
