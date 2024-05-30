import React,{useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Register() {
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
        <div className="row justify-content-center">
          <div className="col-md-5 col-10 pt-4 pb-5">
            <div className="card m-auto p-4">
                <h3>Register</h3>
                <Form
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
                method="post"
                action="/register"
              >
                <Form.Group controlId="validationCustom01">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="First Name"
                  />
                </Form.Group>
                
                <Form.Group controlId="validationCustom01">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Last Name"
                  />
                </Form.Group>
                <Form.Group controlId="validationCustom01">
                  <Form.Label>Username Or Email Address</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Email Or Username"
                  />
                </Form.Group>
                <Form.Group controlId="validationCustom01">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    required
                    type="Phone"
                    placeholder="Mobile No"
                  />
                </Form.Group>
                <Form.Group controlId="validationCustom01">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="User Name"
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
