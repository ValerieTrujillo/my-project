import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "reactstrap";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  password: Yup.string()
    .required("Password Required")
    .min(6, "Minimum of 6 Characters")
    .max(100, "Maximum 100 characters")
});

const LoginForm = props => {
  return (
    <div>
      <h4 className="card-title mt-2">Login</h4>

      <Formik
        intialValues={{
          email: "",
          password: ""
        }}
        validationSchema={LoginSchema}
        // onSubmit={this.handleSubmit}
        render={props => {
          return (
            <Form>
              <div className="form-group">
                <label>Email</label>
                <br />
                <Field
                  type="email"
                  name="email"
                  className="form-control"
                  style={
                    {
                      // width: "25vw"
                    }
                  }
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
                  Sign In
                </Button>
              </div>
              <br />
            </Form>
          );
        }}
      />
    </div>
  );
};

export default LoginForm;
