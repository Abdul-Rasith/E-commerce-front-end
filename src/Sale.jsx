import React, { useState, useContext } from "react";
import Card from "./Card";
import ProductModal from "./ProductModal";
import { CartContext } from "./CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const Sale = () => {
  const { addToCart } = useContext(CartContext);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/5496580/pexels-photo-5496580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Men's Derby Shoe",
      price: 89.9,
      originalPrice: 104.9,
      rating: "⭐⭐⭐⭐⭐",
      sale: true,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/8165285/pexels-photo-8165285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Women Ballet Shoe",
      price: 79.9,
      originalPrice: 99.9,
      rating: "⭐⭐⭐⭐",
      sale: true,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/3261068/pexels-photo-3261068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Men's Formal Shoe",
      price: 89.9,
      originalPrice: 104.9,
      rating: "⭐⭐⭐",
      sale: true,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/9595286/pexels-photo-9595286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Women Mules Shoe",
      price: 79.9,
      originalPrice: 99.9,
      rating: "⭐⭐⭐⭐",
      sale: true,
    },
    {
      id: 5,
      img: "https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Men's Leather Shoe",
      price: 89.9,
      originalPrice: 104.9,
      rating: "⭐⭐⭐⭐",
      sale: true,
    },
    {
      id: 6,
      img: "https://images.pexels.com/photos/1667502/pexels-photo-1667502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Women Pumps shoe",
      price: 79.9,
      originalPrice: 99.9,
      rating: "⭐⭐⭐",
      sale: true,
    },
    {
      id: 7,
      img: "https://images.pexels.com/photos/1476209/pexels-photo-1476209.jpeg",
      name: "Men's Oxford Shoe",
      price: 79.9,
      originalPrice: 99.9,
      rating: "⭐⭐⭐⭐",
      sale: true,
    },
    {
      id: 8,
      img: "https://images.pexels.com/photos/313705/pexels-photo-313705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Women Loafers Shoe",
      price: 89.9,
      originalPrice: 104.9,
      rating: "⭐⭐⭐",
      sale: true,
    },
    {
      id: 9,
      img: "https://images.unsplash.com/photo-1465453869711-7e174808ace9?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Chelsea Boots",
      price: 89.9,
      originalPrice: 104.9,
      rating: "⭐⭐⭐⭐",
      sale: true,
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
        <h1>SALE</h1>
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

export default Sale;
