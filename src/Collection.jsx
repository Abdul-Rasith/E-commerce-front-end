import React, { useState, useContext } from "react";
import Card from "./Card";
import ProductModal from "./ProductModal";
import { CartContext } from "./CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
const Collection = () => {
  const { addToCart } = useContext(CartContext);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 13,
      img: "https://images.unsplash.com/photo-1465453869711-7e174808ace9?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Chelsea Boots",
      price: 89.9,
      originalPrice: 104.9,
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      id: 14,
      img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNob2VzfGVufDB8fDB8fHww",
      name: "Booties",
      price: 79.9,
      originalPrice: 99.9,
      rating: "⭐⭐⭐⭐",
    },
    {
      id: 15,
      img: "https://images.pexels.com/photos/292999/pexels-photo-292999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Men's Running Shoe",
      price: 89.9,
      originalPrice: 104.9,
      rating: "⭐⭐⭐",
    },
    {
      id: 16,
      img: "https://images.pexels.com/photos/137603/pexels-photo-137603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Women Kitten Heels",
      price: 79.9,
      originalPrice: 99.9,
      rating: "⭐⭐⭐⭐",
    },
    {
      id: 17,
      img: "https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Men's Leather Shoe",
      price: 89.9,
      originalPrice: 104.9,
      rating: "⭐⭐⭐",
    },
    {
      id: 18,
      img: "https://images.pexels.com/photos/313705/pexels-photo-313705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Women Loafers Shoe",
      price: 89.9,
      originalPrice: 104.9,
      rating: "⭐⭐⭐⭐",
    },
    {
      id: 19,
      img: "https://images.pexels.com/photos/1476209/pexels-photo-1476209.jpeg",
      name: "Men's Oxford Shoe",
      price: 79.9,
      originalPrice: 99.9,
      rating: "⭐⭐⭐",
    },
    {
      id: 20,
      img: "https://images.pexels.com/photos/1667502/pexels-photo-1667502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Women Pumps shoe",
      price: 79.9,
      originalPrice: 99.9,
      rating: "⭐⭐⭐⭐",
    },
    {
      id: 21,
      img: "https://images.pexels.com/photos/3261068/pexels-photo-3261068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Men's Derby Shoe",
      price: 89.9,
      originalPrice: 104.9,
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      id: 22,
      img: "https://images.pexels.com/photos/9595286/pexels-photo-9595286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Women Mules Shoe",
      price: 79.9,
      originalPrice: 99.9,
      rating: "⭐⭐⭐⭐",
    },
    {
      id: 23,
      img: "https://images.pexels.com/photos/7710997/pexels-photo-7710997.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Men's Formal Shoe",
      price: 89.9,
      originalPrice: 104.9,
      rating: "⭐⭐⭐⭐",
    },
    {
      id: 24,
      img: "https://images.pexels.com/photos/8165285/pexels-photo-8165285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Women Ballet Shoe",
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
        <h1>COLLECTION</h1>
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

export default Collection;
