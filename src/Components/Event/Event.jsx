import React from "react";
import "../../assets/Styles/event.css";
import pic from "../../assets/images/men1.png";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
export default function Event() {
  return (
    <>
      <div className="event container-fluid">
        <div className="row justify-content-center align-items-center text-center pt-5 pb-5">
          <div className="col-11">
            <h1>
              Upcoming <span className="eventSpan">Events</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              neque minus natus deserunt quasi quas repudiandae laudantium et
              consequatur animi!
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-5 d-none d-lg-block">
            <img src={pic} alt="" className="img-fluid" />
          </div>
          <div className="col-xs-12 col-md-7 pt-5 pb-5">
            <div className="row justify-content-center">
              <div
                className="hfour d-flex justify-content-between"
                style={{ maxWidth: "540px" }}
              >
                <div>
                  <h4 className="date">
                    <i className="bi bi-caret-right-fill"></i>
                    July 20, 2024
                  </h4>
                </div>
                <div>
                  <span className="time">02:30 PM</span>
                </div>
              </div>
              <div
                className="card mb-3 mb-5 col-10"
                style={{ maxWidth: "540px" }}
              >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={pic}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">
                        Tuesday Networking & lecture
                      </h5>
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="hfour d-flex justify-content-between"
                style={{ maxWidth: "540px" }}
              >
                <div>
                  <h4 className="date">
                    <i className="bi bi-caret-right-fill"></i>
                    July 21, 2024
                  </h4>
                </div>
                <div>
                  <span className="time">11:30 AM</span>
                </div>
              </div>
              <div
                className="card mb-3 mb-5 col-10"
                style={{ maxWidth: "540px" }}
              >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={pic}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">
                        Tuesday Networking & lecture
                      </h5>
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="viewmore p-5">
              <Link className="float-end view">View More →</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
