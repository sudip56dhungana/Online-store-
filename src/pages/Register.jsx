import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const Register = () => {
  return (
    <Formik
      initialValues={{
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmpassword: "",
      }}
      validationSchema={Yup.object({
        firstname: Yup.string()
          .required("first name is mandatory")
          .max(20, "20 characters or less"),

        lastname: Yup.string()
          .required("last name is mandatory")
          .max(20, "20 characters or less"),

        email: Yup.string()
          .required("email is mandatory")
          .email("Invalid email format"),

        password: Yup.string()
          .required("password is mandatory")
          .matches(
            /^(?=.[A-Za-z])(?=.\d)(?=.[@$!%#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "must contain one uppercase,onelowercase,one digit and one special character and must be minimum of 8 characters"
          ),

        confirmpassword: Yup.string()
          .required("confirm password is mandatory")
          .oneOf( [Yup.ref("password"), null],'password and confirmpassword doesnot match '),
      })}
    >
      <div className="container my-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6 shadow p-3">
            <Form>
              <div className="mb-2">
                <label htmlFor="firstname">FirstName</label>
                <Field
                  type="text"
                  name="firstname"
                  id="firstname"
                  className="form-control"
                />
                <ErrorMessage name="firstname">
                  {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                </ErrorMessage>
              </div>

              <div className="mb-2">
                <label htmlFor="lastname">LastName</label>
                <Field
                  type="text"
                  name="lastname"
                  id="lastname"
                  className="form-control"
                />
                <ErrorMessage name="lastname">
                  {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                </ErrorMessage>
              </div>

              <div className="mb-2">
                <label htmlFor="email">Email</label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                />
                <ErrorMessage name="email">
                  {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                </ErrorMessage>
              </div>

              <div className="mb-2">
                <label htmlFor="password">password</label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                />
                <ErrorMessage name="password">
                  {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                </ErrorMessage>
              </div>

              <div className="mb-2">
                <label htmlFor="confirmpassword">Confirm password</label>
                <Field
                  type="password"
                  name="confirmpassword"
                  id="confirmpassword"
                  className="form-control"
                />
                <ErrorMessage name="confirmpassword">
                  {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="mb-2">
                <button className="btn btn-primary">Register</button>
              </div>

            </Form>
          </div>
        </div>
      </div>
    </Formik>
  );
};

export default Register;