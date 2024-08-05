import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const Cart = () => {
  const { cartItems, removeFromCart, getTotalAmount } = useContext(CartContext);

  return (
    <div className="container my-5">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="row">
            {cartItems.map((item) => (
              <div key={item.id} className="col-md-4 mb-4">
                <div className="card">
                  <img
                    src={item.img}
                    className="card-img-top"
                    alt={item.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">
                      <span className="text-muted">
                        <del>${item.originalPrice}</del>
                      </span>{" "}
                      <span className="text-danger">${item.price}</span>
                    </p>
                    <p className="card-text">Quantity: {item.quantity}</p>
                    <p className="card-text">{item.rating}</p>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="my-4">
            <h4>Total Amount: ${getTotalAmount().toFixed(2)}</h4>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
