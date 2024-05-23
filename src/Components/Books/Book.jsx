import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "../../assets/Styles/Books.css";
export default function Book() {
  return (
    <>
      <div className="container-fluid content">
        <div className="row">
          <div className="col-md-2">
            <div className="row">
              <div className="col-md-10">
                <h1 className="fs-4">
                  <i className="bi bi-funnel-fill me-2"></i>Filter By
                </h1>
                <h1 className="fs-4">Category</h1>
                <hr />
              </div>
              <div className="col-md-10">
                <p>
                  <i className="bi bi-diamond-fill me-4"></i>Music
                </p>
                <p>
                  <i className="bi bi-diamond-fill me-4"></i>Marketing
                </p>
                <p>
                  <i className="bi bi-diamond-fill me-4"></i>Politics
                </p>
                <p>
                  <i className="bi bi-diamond-fill me-4"></i>Creative
                </p>
                <p>
                  <i className="bi bi-diamond-fill me-4"></i>Mathematics
                </p>
                <p>
                  <i className="bi bi-diamond-fill me-4"></i>Geography
                </p>
                <p>
                  <i className="bi bi-diamond-fill me-4"></i>Technology
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-8 mt-4">
            <h1 className="mt-2 fs-5">Search Box</h1>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Enter Book Name"
                aria-label="Book Name"
                aria-describedby="basic-addon2"
              />
              <Button variant="outline-secondary" id="button-addon2">
                <i className="bi bi-search"></i>
              </Button>
            </InputGroup>
            <div className="row">
              <div className="col-md-10">
                <div className="text">
                  <p>Result For How To Be a Designer</p>
                  <p>
                    <span>6</span> of <span>76</span> Book Found
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
