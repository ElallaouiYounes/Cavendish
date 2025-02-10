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

const initialState = {
  products: [
    {
      id: 1,
      name: "Intel Core i5-13600K",
      quantity: 3,
      price: 2500,
      image: i5,
    },
    {
      id: 2,
      name: "Acer Aspire 3 AMD Ryzen 3 7320U",
      quantity: 1,
      price: 7500,
      image: lap,
    },
    {
      id: 3,
      name: "Red Dead Redemption 2",
      quantity: 9,
      price: 800,
      image: redd,
    },
    {
      id: 4,
      name: "Alienware Gaming PC",
      quantity: 1,
      price: 12500,
      image: gd,
    },
    {
      id: 5,
      name: "Razer DeathAdder V2 Gaming Mouse",
      quantity: 1,
      price: 550,
      image: rm,
    },
    {
      id: 6,
      name: "Corsair K70 RGB Gaming Keyboard",
      quantity: 1,
      price: 1250,
      image: ck,
    },
    {
      id: 7,
      name: "Samsung 970 EVO Plus SSD 1TB",
      quantity: 1,
      price: 1400,
      image: sm,
    },
    {
      id: 8,
      name: "Sony PlayStation 5",
      quantity: 1,
      price: 7500,
      image: ps,
    },
    {
      id: 9,
      name: "Nintendo Switch OLED",
      quantity: 1,
      price: 4000,
      image: nt,
    },
    {
      id: 10,
      name: "Logitech G733 Wireless Headset",
      quantity: 1,
      price: 900,
      image: lh,
    },
    {
      id: 11,
      name: "MSI RTX 3060 Ti Gaming X",
      quantity: 1,
      price: 4200,
      image: rx,
    },
    {
      id: 12,
      name: "Apple MacBook Pro 14-inch",
      quantity: 1,
      price: 22000,
      image: mac,
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
