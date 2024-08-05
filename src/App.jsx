import "./App.css";
import { CartProvider } from "./CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Men from "./Men";
import Women from "./Women";
import Collection from "./Collection";
import Login from "./Login";
import Register from "./Register";
import Sale from "./Sale";
import Contact from "./Contact";
import Cart from "./Cart";
import ProductDetail from "./ProductDetail";
import PaymentPage from "./PaymentPage";
import { AuthProvider, useAuth } from "./AuthContext";
import { useState, useEffect } from "react";

const PrivateRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? element : <Navigate to="/login" />;
};

function App() {
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    setAuthChecked(true);
  }, []);

  if (!authChecked) {
    return null; // or a loading spinner, etc.
  }

  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/"
              element={<PrivateRoute element={<Collection />} />}
            />
            <Route path="/men" element={<PrivateRoute element={<Men />} />} />
            <Route
              path="/women"
              element={<PrivateRoute element={<Women />} />}
            />
            <Route path="/sale" element={<PrivateRoute element={<Sale />} />} />
            <Route
              path="/contact"
              element={<PrivateRoute element={<Contact />} />}
            />
            <Route path="/cart" element={<PrivateRoute element={<Cart />} />} />
            <Route
              path="/product/:id"
              element={<PrivateRoute element={<ProductDetail />} />}
            />
            <Route
              path="/payment"
              element={<PrivateRoute element={<PaymentPage />} />}
            />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
