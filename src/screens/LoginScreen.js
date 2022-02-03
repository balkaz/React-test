import React, { useContext, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { Auth } from "../context/AuthContext";

const LoginScreen = () => {
  let navigate = useNavigate();

  const { user, setUser } = useContext(Auth);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <Container>
      <Row className="align-items-center justify-content-center">
        <Col md={6} sm={12}>
          <h3 className="mt-4 mb-4">Login</h3>
        </Col>
      </Row>
      <Row className="align-items-center justify-content-center">
        <Col md={6} sm={12}>
          <Formik
            initialValues={{ email: "", password: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.email || !values.password) {
                errors.email = "Email cant be empty";
                errors.password = "Password cant be empty";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                localStorage.setItem(
                  "userInfo",
                  JSON.stringify(values, null, 2)
                );
                setUser(values);
                setSubmitting(false);
                navigate("/");
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="email">
                  <Form.Control
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="Email"
                  />
                </Form.Group>
                {errors.email && touched.email && errors.email}
                <Form.Group className="mt-3" controlId="email">
                  <Form.Control
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    placeholder="Password"
                  />
                </Form.Group>
                {errors.password && touched.password && errors.password}
                <Form.Group>
                  <Button
                    className="mt-3"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Submit
                  </Button>
                </Form.Group>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginScreen;
