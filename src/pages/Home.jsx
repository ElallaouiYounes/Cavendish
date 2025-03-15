import React from "react";
import Navbar from "../components/home/Navbar";
import CartSlider from "../components/home/CartSlider";
import CatSlider from "../components/home/CatSlider";
import { useSelector } from "react-redux";
import Footer from "../components/home/Footer";
import Hero from "../components/home/Hero";
import More from "../components/home/More";
import Shopbycategorie from "../components/home/Shopbycategorie";
import TopSales from "../components/home/TopSales";

const Home = () => {
  const openCart = useSelector((state) => state.Actions.openCart);
  const openCategorie = useSelector((state) => state.Actions.openCategories);

  return (
    <div>
      <Navbar />
      {openCart && <CartSlider />}
      {openCategorie && <CatSlider />}
      <Hero />
      <TopSales />
      <Shopbycategorie />
      <More />
      <Footer />
    </div>
  );
};

export default Home;
