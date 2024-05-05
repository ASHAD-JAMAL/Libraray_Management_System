import React from "react";
import "../../assets/Styles/about.css";
import {Link} from "react-router-dom";
import Card from "./Card";
export default function About() {
  return (
    <>
      <div
        className="container-fluid p-5"
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <div className="row justify-content-center align-items-center text-center">
          <div className="col-10">
            <div className="about">
              <h1>
                About <span>Us</span>
              </h1>
            </div>
            <div className="diamond">
              <i className="bi bi-diamond-fill mx-1"></i>
              <i className="bi bi-diamond-fill mx-1"> </i>
              <i className="bi bi-diamond-fill mx-1"></i>
            </div>
            <div className="para">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
                quasi saepe? Dolores exercitationem ratione obcaecati ut dicta
                voluptates, nulla aliquid.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 col-sm-3">
            <div className="diamond">
              <i className="bi bi-diamond-fill mx-1 text-black-50"></i>
              <i className="bi bi-diamond-fill mx-1 text-black-50"> </i>
              <i className="bi bi-diamond-fill mx-1 text-black-50"></i>
            </div>
            <div className="para">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quibusdam natus corrupti, sint quas non ipsa consequuntur beatae
                fugit consectetur in iusto ad asperiores quos est
                necessitatibus, autem ratione porro explicabo.
              </p>
            </div>
            <div className="row info justify-content-between">
              <div className="col-md-5 col-sm-3">
                <div className="CardIcon">
                  <i className="bi bi-card-checklist">
                    <hr />
                  </i>
                </div>
                <h3>Member Card</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolores, quibusdam sequi fuga numquam sapiente praesentium
                  minima assumenda nulla quod cumque?
                </p>
              </div>
              <div className="col-md-5 col-10">
                <div className="CardIcon">
                  <i className="bi bi-award-fill">
                    <hr />
                  </i>
                </div>
                <h3>High Quality Books</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolores, quibusdam sequi fuga numquam sapiente praesentium
                  minima assumenda nulla quod cumque?
                </p>
              </div>
              <div className="col-md-5 col-10">
                <div className="CardIcon">
                  <i className="bi bi-book-half">
                    <hr />
                  </i>
                </div>
                <h3>Free All Books</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolores, quibusdam sequi fuga numquam sapiente praesentium
                  minima assumenda nulla quod cumque?
                </p>
              </div>
              <div className="col-md-5 col-10">
                <div className="CardIcon">
                  <i class="bi bi-book-fill">
                    <hr />
                  </i>
                </div>
                <h3>Up To Date Books</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolores, quibusdam sequi fuga numquam sapiente praesentium
                  minima assumenda nulla quod cumque?
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <p>Slider In Processing</p>
          </div>
        </div>
      </div>

      <div className="container-fluid p-5">
        <div className="row justify-content-center align-items-center text-center">
          <div className="col-10">
            <div className="category">
              <h1>Our Category</h1>
            </div>
            <div className="diamond">
              <i className="bi bi-diamond-fill mx-2"></i>
              <i className="bi bi-diamond-fill mx-2"> </i>
              <i className="bi bi-diamond-fill mx-2"></i>
            </div>
            <div className="para">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
                quasi saepe? Dolores exercitationem ratione obcaecati ut dicta
                voluptates, nulla aliquid.
              </p>
            </div>
          </div>
        </div>

        {/* 2nd section of category start  */}
        <div className="row justify-content-evenly align-items-center">
          <div className="col-md-2 col-10">
            <Card icon={<i className="bi bi-music-note-beamed text-white fw-bold"></i>} style={{backgroundColor: "#2352c5",height:"50px",width:"50px",transform:"rotate(45deg)"}} title="Music & Art"/>
          </div>
          <div className="col-md-2 col-10">
          <Card icon={<i className="bi bi-cash-coin text-white fw-bold"></i>} style={{ backgroundColor: "#d9346a",height:"50px",width:"50px",transform:"rotate(45deg)"}} title="Marketing"/>
          </div>
          <div className="col-md-2 col-10">
          <Card icon={<i className="bi bi-bank text-white fw-bold"></i>} style={{ backgroundColor: "#fec826",height:"50px",width:"50px",transform:"rotate(45deg)"}} title="Politics"/>
          </div>
          <div className="col-md-2 col-10">
          <Card icon={<i className="bi bi-globe2 text-white fw-bold"></i>} style={{ backgroundColor: "#4bbd49",height:"50px",width:"50px",transform:"rotate(45deg)"}} title="Geography"/>
          </div>
            <div className="seemorebtn text-center pt-4">
                <button className="btn">See More</button>
            </div>
        </div>
      </div>
    </>
  );
}
