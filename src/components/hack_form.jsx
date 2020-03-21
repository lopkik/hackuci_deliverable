import React from "react";
import { Form, Button } from "react-bootstrap";
import { withFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const axios = require("axios");

const HackForm = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleSubmit,
    isSubmitting
  } = props;
  return (
    <Form noValidate onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          name="name"
          type="text"
          value={values.name}
          placeholder="Name"
          onChange={handleChange}
          isValid={touched.name && !errors.name}
          isInvalid={touched.name && errors.name}
        />
        <Form.Control.Feedback type="invalid">
          {errors.name}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          name="email"
          type="email"
          value={values.email}
          placeholder="Email"
          onChange={handleChange}
          isValid={touched.email && !errors.email}
          isInvalid={touched.email && errors.email}
        />
        <Form.Control.Feedback type="invalid">
          {errors.email}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="fun_fact">
        <Form.Label>Fun Fact</Form.Label>
        <Form.Control
          name="funFact"
          as="textarea"
          rows="2"
          value={values.funFact}
          placeholder="Fun Fact"
          onChange={handleChange}
          isValid={touched.funFact && !errors.funFact}
          isInvalid={touched.funFact && errors.funFact}
        />
        <Form.Control.Feedback type="invalid">
          {errors.funFact}
        </Form.Control.Feedback>
      </Form.Group>
      <Button type="submit" disabled={isSubmitting}>
        Submit
      </Button>
    </Form>
  );
};

const FormikHackForm = withFormik({
  mapPropsToValues: ({ name, email, funFact }) => {
    return {
      name: name || "",
      email: email || "",
      funFact: funFact || ""
    };
  },

  validationSchema: yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Email not valid")
      .required("Email is required"),
    funFact: yup.string().required("Fun fact is required")
  }),

  handleSubmit: (values, { resetForm, setSubmitting }) => {
    const { name, email, funFact } = values;
    const notify = () => toast("Successful submission!");
    axios
      .get("https://hack-uci-test-endpoint.herokuapp.com/test", {
        params: {
          name: name,
          email: email,
          funfact: funFact
        }
      })
      .then(res => {
        console.log(res);
        notify();
        resetForm();
      })
      .catch(err => {
        console.log("Something went wrong!", err);
      });
    setSubmitting(false);
  }
})(HackForm);

export default FormikHackForm;
