import { createSlice } from "@reduxjs/toolkit";
import i5 from "../../../public/i5.webp";
import lap from "../../../public/lap.webp";
import redd from "../../../public/red.webp";
import sm from "../../../public/sm.webp";
import nt from "../../../public/nt.jpeg";
import ps from "../../../public/ps.jpeg";
import lh from "../../../public/lh.webp";
import mac from "../../../public/mac.webp";
import rx from "../../../public/rx.webp";
import rm from "../../../public/rm.webp";
import ck from "../../../public/ck.webp";
import gd from "../../../public/gd.webp";
import desktop from "../../../public/desktop.png";
import laptop from "../../../public/laptop.png";
import phone from "../../../public/phone.png";
import game from "../../../public/game.png";
import gpu from "../../../public/gpu.png";
import headset from "../../../public/headset.png";
import banner1 from "../../../public/banner1.png"
import banner2 from "../../../public/banner2.png"
import banner3 from "../../../public/banner3.png"
import banner4 from "../../../public/banner4.png"

const initialState = {
  products: [
    {
      id: 1,
      name: "Intel Core i5-13600K",
      quantity: 3,
      price: 2500,
      image: i5,
      oldPrice: "3000",
      rating: "4.1",
      sold: "900+",
    },
    {
      id: 2,
      name: "Acer Aspire 3 AMD Ryzen 3 7320U",
      quantity: 1,
      price: 7500,
      image: lap,
      oldPrice: "8000",
      rating: "4.8",
      sold: "600+",
    },
    {
      id: 3,
      name: "Red Dead Redemption 2",
      quantity: 9,
      price: 800,
      image: redd,
      oldPrice: "850",
      rating: "4.9",
      sold: "200+",
    },
    {
      id: 4,
      name: "Alienware Gaming PC",
      quantity: 1,
      price: 12500,
      image: gd,
      oldPrice: "14000",
      rating: "4.8",
      sold: "300+",
    },
    {
      id: 5,
      name: "Razer DeathAdder V2 Gaming Mouse",
      quantity: 1,
      price: 550,
      image: rm,
      oldPrice: "700",
      rating: "4.3",
      sold: "500+",
    },
    {
      id: 6,
      name: "Corsair K70 RGB Gaming Keyboard",
      quantity: 1,
      price: 1250,
      image: ck,
      oldPrice: "1350",
      rating:"4.2",
      sold: "700+",
    },
    {
      id: 7,
      name: "Samsung 970 EVO Plus SSD 1TB",
      quantity: 1,
      price: 1400,
      image: sm,
      oldPrice: "1600",
      rating:"4.8",
      sold: "400+",
    },
    {
      id: 8,
      name: "Sony PlayStation 5",
      quantity: 1,
      price: 7500,
      image: ps,
      oldPrice: "8000",
      rating:"4.8",
      sold: "900+",
    },
    {
      id: 9,
      name: "Nintendo Switch OLED",
      quantity: 1,
      price: 4000,
      image: nt,
      oldPrice: "5600",
      rating:"4.9",
      sold: "600+",
    },
    {
      id: 10,
      name: "Logitech G733 Wireless Headset",
      quantity: 1,
      price: 900,
      image: lh,
      oldPrice: "1200",
      rating:"4.2",
      sold: "300+",
    },
    {
      id: 11,
      name: "MSI RTX 3060 Ti Gaming X",
      quantity: 1,
      price: 4200,
      image: rx,
      oldPrice: "5000",
      rating:"4.5",
      sold: "600+",
    },
    {
      id: 12,
      name: "Apple MacBook Pro 14-inch",
      quantity: 1,
      price: 22000,
      image: mac,
      oldPrice: "23000",
      rating:"4.6",
      sold: "300+",
    },
  ],

  CategoriesItems:[
    {
      label:"Desktops",
      image:desktop,
      name:"desktops",
    },
    {
      label:"Laptops",
      image:laptop,
      name:"laptops",
    },
    {
      label:"Phones",
      image:phone,
      name:"phones",
    },
    {
      label:"Games",
      image:game,
      name:"games",
    },
    {
      label:"Desktop Components",
      image:gpu,
      name:"components",
    },
    {
      label:"Accessories",
      image:headset,
      name:"accessories",
    }
  ],

  heroSlides: [
    {
      id:1,
      img:banner2,
    },
    {
      id:2,
      img:banner1,
    },
    {
      id:3,
      img:banner3,
    },
    {
      id:4,
      img:banner4,
    },
  ],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    increment: (state, action) => {
      const product = state.products.find((i) => i.id === action.payload);
      if (product) {
        product.quantity += 1;
      }
    },
    decrement: (state, action) => {
      const product = state.products.find((i) => i.id === action.payload);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter((i) => i.id !== action.payload);
    },
  },
});

export const { increment, decrement, deleteProduct } = dataSlice.actions;
export default dataSlice.reducer;
