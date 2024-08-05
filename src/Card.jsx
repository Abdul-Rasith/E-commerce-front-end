// Card.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const Card = ({
  id,
  img,
  name,
  price,
  originalPrice,
  rating,
  sale,
  onAddToCart,
}) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            {sale && (
              <span className="text-muted">
                <del>${originalPrice}</del>
              </span>
            )}{" "}
            <span className="text-danger">${price}</span>
          </p>
          <p className="card-text">{rating}</p>
          <button className="btn btn-primary" onClick={onAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
