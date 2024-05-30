import React, { useState } from "react";
import loginImg from "../../assets/images/loginImage.jpeg";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
function Login() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    event.preventDefault();
  };
  return (
    <>
      <div className="container">
        <div className="row justify-content-center align-items-center p-4">
          <div className="col-md-5 col-11">
            <img src={loginImg} className="img-fluid" alt="" />
          </div>
          <div className="col-md-5 col-11">
            <div className="card p-4">
              <h2>Login</h2>
              <Form
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
                method="post"
                action="/login"
              >
                <Form.Group controlId="validationCustom01">
                  <Form.Label>Username Or Email Address</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Email Or Username"
                  />
                </Form.Group>
                <Form.Group controlId="validationCustom02">
                  <Form.Label>Password</Form.Label>
                  <Form.Control required type="text" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3 mt-3">
                  <Form.Check
                    required
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                  />
                </Form.Group>
                <Button
                    type="submit"
                    onClick={handleSubmit}
                >
                    Submit Form
                </Button>
              </Form>
              <Link to="/register" className="mt-2">
                Register 
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
