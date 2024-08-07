import React, { useState, useContext } from "react";
import Card from "./Card";
import ProductModal from "./ProductModal";
import { CartContext } from "./CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
const Men = () => {
  const { addToCart } = useContext(CartContext);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/3261068/pexels-photo-3261068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Men's Formal Shoe",
      price: 89.9,
      originalPrice: 104.9,
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/5496580/pexels-photo-5496580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Men's Running Shoe",
      price: 79.9,
      originalPrice: 99.9,
      rating: "⭐⭐⭐⭐",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1476209/pexels-photo-1476209.jpeg",
      name: "Men's Oxford Shoe",
      price: 89.9,
      originalPrice: 104.9,
      rating: "⭐⭐⭐",
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Men's Leather Shoe",
      price: 79.9,
      originalPrice: 99.9,
      rating: "⭐⭐⭐⭐",
    },
    {
      id: 5,
      img: "https://images.pexels.com/photos/293406/pexels-photo-293406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Men's Penny Shoe",
      price: 89.9,
      originalPrice: 104.9,
      rating: "⭐⭐⭐⭐",
    },
    {
      id: 6,
      img: "https://images.pexels.com/photos/292999/pexels-photo-292999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Men's  Derby Shoe",
      price: 79.9,
      originalPrice: 99.9,
      rating: "⭐⭐⭐",
    },
  ];
  const handleAddToCart = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };
  return (
    <>
      <div className="d-flex flex-wrap align-items-center justify-content-center">
        <h1>MEN'S</h1>
      </div>
      <div className="container my-5">
        <div className="row">
          {products.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              img={product.img}
              name={product.name}
              price={product.price}
              originalPrice={product.originalPrice}
              rating={product.rating}
              sale={product.sale}
              onAddToCart={() => handleAddToCart(product)}
            />
          ))}
        </div>
      </div>
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={handleCloseModal}
          onAddToCart={() => {
            addToCart(selectedProduct);
            handleCloseModal();
          }}
        />
      )}
    </>
  );
};

export default Men;
