import React from "react";
import Logo from "../../assets/images/logo.png";
import "../../assets/Styles/footer.css"

export default function Footer() {
  return (
    <>
      <div className="container-fluid footer">
        <div className="row justify-content-evenly p-5">
          <div className="col-lg-3 col-md-6 col-sm-11">
            <div>
              <h1>
                <img src={Logo} alt="logo" />
              </h1>
              <div className="para text-justify">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
                perspiciatis aut ad minima error! Natus incidunt quasi repellat
                recusandae reprehenderit?
              </p>
              </div>
            </div>
            <div className="d-flex icon">
              <i className="bi bi-facebook mx-2 fs-5"></i>
              <i className="bi bi-twitter mx-2 fs-5"></i>
              <i className="bi bi-linkedin mx-2 fs-5"></i>
            </div>
            <div className="star d-flex mt-4 mb-4">
              <div
                className="triangle mx-2"
                style={{
                  width: "12px",
                  height: "12px",
                  backgroundColor: "#fff",
                  transform: "rotate(45deg)",
                }}
              ></div>
              <div
                className="triangle mx-2"
                style={{
                  width: "12px",
                  height: "12px",
                  backgroundColor: "#fff",
                  transform: "rotate(45deg)",
                }}
              ></div>
              <div
                className="triangle mx-2"
                style={{
                  width: "12px",
                  height: "12px",
                  backgroundColor: "#fff",
                  transform: "rotate(45deg)",
                }}
              ></div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-11">
            <h5>Contact Us</h5>
            <div className="address">
            <p><i className="bi bi-geo-alt-fill mx-2"></i>Gachibowli,Hyderabad 500032</p>
            <p><i className="bi bi-envelope mx-2"></i>ashadjamalhyt@gmail.com</p>
            <p><i class="bi bi-telephone-fill mx-2"></i>91-7321857364</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-11">
            <h5>Useful Links</h5>
            <div className="links">
              <p><i class="bi bi-diamond-fill mx-2"></i>Costumer Service</p>
              <p><i class="bi bi-diamond-fill mx-2"></i>Help Desk</p>
              <p><i class="bi bi-diamond-fill mx-2"></i>Forum</p>
              <p><i class="bi bi-diamond-fill mx-2"></i>Staff Profile</p>
              <p><i class="bi bi-diamond-fill mx-2"></i>Live Chat</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
