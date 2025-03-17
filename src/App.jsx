import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Notfound from "./components/Notfound";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Notfound />} />
        <Route path="/categories" element={<Notfound />} />
        <Route path="/categories/:name" element={<Notfound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Notfound />} />
        <Route path="/profile" element={<Notfound />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about" element={<Notfound />} />
        <Route path="/reviews" element={<Notfound />} />
        <Route path="/contact" element={<Notfound />} />
        <Route path="/privacy" element={<Notfound />} />
        <Route path="/support" element={<Notfound />} />
        <Route path="/terms" element={<Notfound />} />
      </Routes>
    </>
  );
};

export default App;
