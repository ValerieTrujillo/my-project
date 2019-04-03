import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "reactstrap";


const registerSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  LastName: Yup.string().required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  password: Yup.string()
    .required("Password Required")
    .min(6, "Minimum of 6 Characters")
    .max(100, "Maximum 100 characters"),
  
});

const RegisterForm = props => {
  return (
    <div>
      <header>
        <h4 className="card-title mt-2">Register</h4>
      </header>
      <article className="card-body">
      <Formik
        intialValues={{
          firstName: "",
          middleInitial: "",
          lastName: "",
          email: "",
          password: ""
        }}
        validationSchema={registerSchema}
        // onSubmit={this.handleSubmit}
        render={props => {
          return (
            <Form>
                <div className="form-group">
                <label>First Name</label>
                <br />
                <Field
                  type="firstName"
                  name="firstName"
                  className="form-control"
                />
                <ErrorMessage name="firstName" />
              </div>
              <div className="form-group">
                <label>Middle Initial</label>
                <br />
                <Field
                  type="middleInitital"
                  name="middleInitital"
                  className="form-control"
                />
                <ErrorMessage name="middleInitital" />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <br />
                <Field
                  type="lastName"
                  name="lastName"
                  className="form-control"
                />
                <ErrorMessage name="lastName" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <br />
                <Field
                  type="email"
                  name="email"
                  className="form-control"
                />
                <ErrorMessage name="email" />
              </div>
              <div className="form-group">
                <label>Password</label>
                <br />
                <Field
                  type="password"
                  name="password"
                  className="form-control"
                />
                <ErrorMessage name="password" />
              </div>
              <div className="form-group">
                <Button
                  outline
                  color="primary"
                  // disabled={formProps.isSubmitting}
                >
                  Sign Up
                </Button>
              </div>
              <br />
            </Form>
          );
        }}
      />
      </article>
    </div>
  );
};

export default RegisterForm;
