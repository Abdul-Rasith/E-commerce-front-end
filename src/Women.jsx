import React, { useState, useContext } from "react";
import Card from "./Card";
import ProductModal from "./ProductModal";
import { CartContext } from "./CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const Women = () => {
  const { addToCart } = useContext(CartContext);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 7,
      img: "https://images.pexels.com/photos/137603/pexels-photo-137603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Women Kitten Heels",
      price: 79.9,
      originalPrice: 99.9,
      rating: "⭐⭐⭐⭐",
    },
    {
      id: 8,
      img: "https://images.pexels.com/photos/8165285/pexels-photo-8165285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Women Loafers Shoe",
      price: 89.9,
      originalPrice: 104.9,
      rating: "⭐⭐⭐",
    },
    {
      id: 9,
      img: "https://images.pexels.com/photos/1667502/pexels-photo-1667502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Women Pumps shoe",
      price: 89.9,
      originalPrice: 104.9,
      rating: "⭐⭐⭐⭐",
    },
    {
      id: 10,
      img: "https://images.pexels.com/photos/2918562/pexels-photo-2918562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Women Stilettos Shoe",
      price: 79.9,
      originalPrice: 99.9,
      rating: "⭐⭐⭐",
    },
    {
      id: 11,
      img: "https://images.pexels.com/photos/9595286/pexels-photo-9595286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Women Mules Shoe",
      price: 79.9,
      originalPrice: 99.9,
      rating: "⭐⭐⭐⭐",
    },
    {
      id: 12,
      img: "https://images.pexels.com/photos/313705/pexels-photo-313705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Women Ballet Shoe",
      price: 89.9,
      originalPrice: 104.9,
      rating: "⭐⭐⭐⭐⭐",
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
        <h1>WOMEN'S</h1>
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

export default Women;
