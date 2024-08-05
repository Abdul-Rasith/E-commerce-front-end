// ProductDetail.jsx
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "./CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  // Example product data; in a real app, this should come from an API or state
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details based on id; using static data here for simplicity
    const fetchedProduct = {
      id: parseInt(id),
      img: `/product-${id}.jpg`,
      name: `Product ${id}`,
      price: 89.9,
      originalPrice: 104.9,
      rating: "⭐⭐⭐⭐⭐",
    };
    setProduct(fetchedProduct);
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <img src={product.img} className="img-fluid" alt={product.name} />
        </div>
        <div className="col-md-6">
          <h1>{product.name}</h1>
          <p className="text-muted">
            {product.originalPrice && (
              <span>
                <del>${product.originalPrice}</del>{" "}
              </span>
            )}
            <span className="text-danger">${product.price}</span>
          </p>
          <p>{product.rating}</p>
          <button
            className="btn btn-primary"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
