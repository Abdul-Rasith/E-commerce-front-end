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
      id: 1,
      img: "/m-cap-toe.jpg",
      name: "Men's Running Shoe",
      price: 89.9,
      originalPrice: 104.9,
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      id: 2,
      img: "/penny-shoe.png",
      name: "Men's Penny Shoe",
      price: 79.9,
      originalPrice: 99.9,
      rating: "⭐⭐⭐⭐",
    },
    {
      id: 3,
      img: "/oxford-shoe.jpg",
      name: "Men's Oxford Shoe",
      price: 89.9,
      originalPrice: 104.9,
      rating: "⭐⭐⭐",
    },
    {
      id: 7,
      img: "/wm-kitten-heels.jpg",
      name: "Women Kitten Heels",
      price: 79.9,
      originalPrice: 99.9,
      rating: "⭐⭐⭐⭐",
    },
    {
      id: 8,
      img: "/wm-loafers.jpg",
      name: "Women Loafers Shoe",
      price: 89.9,
      originalPrice: 104.9,
      rating: "⭐⭐⭐",
    },
    {
      id: 9,
      img: "/wm-pumps.jpg",
      name: "Women Pumps shoe",
      price: 89.9,
      originalPrice: 104.9,
      rating: "⭐⭐⭐⭐",
    },
    {
      id: 10,
      img: "/wm-stilettos.jpg",
      name: "Women Stilettos Shoe",
      price: 79.9,
      originalPrice: 99.9,
      rating: "⭐⭐⭐",
    },
    {
      id: 11,
      img: "/wm-mules.jpg",
      name: "Women Mules Shoe",
      price: 79.9,
      originalPrice: 99.9,
      rating: "⭐⭐⭐⭐",
    },
    {
      id: 12,
      img: "/wm-ballet-flats.jpg",
      name: "Women Ballet Shoe",
      price: 89.9,
      originalPrice: 104.9,
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      id: 4,
      img: "/leather-shoe.png",
      name: "Men's Leather Shoe",
      price: 79.9,
      originalPrice: 99.9,
      rating: "⭐⭐⭐⭐",
    },
    {
      id: 5,
      img: "/derby-shoe.jpg",
      name: "Men's Derby Shoe",
      price: 89.9,
      originalPrice: 104.9,
      rating: "⭐⭐⭐⭐",
    },
    {
      id: 6,
      img: "/formal-shoe.jpg",
      name: "Men's Formal Shoe",
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
