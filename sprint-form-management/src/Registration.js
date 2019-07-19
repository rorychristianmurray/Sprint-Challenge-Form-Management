import React from "react";
import { withFormik, Form, Field, ErrorMessage, yupToFormErrors } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { Redirect } from "react-router-dom";

const Registration = ({ touched, errors }) => {
  const token = localStorage.getItem("token");

  if (token) {
    return <Redirect to="/data" />;
  }

  return (
    <Form className="login-form">
      <div className="form-group">
        <label className="label">Username</label>
        <Field
          className="input"
          name="username"
          type="text"
          autoComplete="off"
        />
        <p>{touched.username && errors.username}</p>
      </div>
      <div className="form-group">
        <label className="label">Password</label>
        <Field
          className="input"
          name="password"
          type="password"
          autoComplete="off"
        />
        <p>{touched.password && errors.password}</p>
      </div>
      <button>Submit</button>
    </Form>
  );
};

export default withFormik({
  mapPropsToValues() {
    return {
      username: "",
      password: ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string()
      .min(4)
      .required()
  }),

  handleSubmit(values) {
    console.log("handleSubmit values", values);
    const url = "http://localhost:5000/api/register";
    axios
      .post(url, values)
      .then(response => {
        console.log("handleSubmit response", response);
        localStorage.setItem("token", response.data.token);
      })
      .catch(error => {
        console.log("handleSubmit error", error);
      });
  }
})(Registration);
