import React from 'react'
import Navbar from '../components/home/Navbar'
import CartSlider from '../components/home/CartSlider'
import CatSlider from '../components/home/CatSlider'
import { useSelector } from 'react-redux';
import Footer from '../components/home/Footer';
import Hero from '../components/home/Hero';
import ShopByCategory from '../components/home/ShopByCategory';
import MoreToLove from '../components/home/MoreToLove';
import More from '../components/home/More';

const Home = () => {

  const openCart = useSelector((state) => state.Actions.openCart);
  const openCategorie = useSelector((state) => state.Actions.openCategories);

  return (
    <div>
        <Navbar />
        {openCart && <CartSlider  />}
        {openCategorie && <CatSlider />}
        <Hero />
        <ShopByCategory />
        {/* <MoreToLove /> */}
        <More />
        <Footer />
    </div>
  )
}

export default Home