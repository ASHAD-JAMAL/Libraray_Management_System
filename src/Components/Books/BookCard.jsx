import React from "react";
import { Link } from "react-router-dom";
export default function BookCard({image,book,author,para}) {
  return (
    <>
      <div className="card">
        <div className="row d-flex justify-content-between align-content-between p-4">
          <div className="col-md-4">
            <img src={image} alt="" />
          </div>
          <div className="col-md-6 p-2">
            <p>{book}</p>
            <p>{author}</p>
            <div className="icon">
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            </div>
            <p>{para}</p>
            <Link>See The Book</Link>
          </div>
        </div>
      </div>
    </>
  );
}
