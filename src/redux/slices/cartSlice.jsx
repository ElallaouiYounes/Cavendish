import { createSlice } from "@reduxjs/toolkit";
import i5 from "../../../public/i5.webp";
import lap from "../../../public/lap.webp";
import redd from "../../../public/red.webp";
import nt from "../../../public/nt.jpeg";
import ps from "../../../public/ps.jpeg";
import lh from "../../../public/lh.webp";
import rm from "../../../public/rm.webp";
import gd from "../../../public/gd.webp";

const initialState = {
  cartProduct: [
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
      id: 8,
      name: "Sony PlayStation 5",
      quantity: 1,
      price: 7500,
      image: ps,
      oldPrice: "8000",
      rating: "4.8",
      sold: "900+",
    },
    {
      id: 9,
      name: "Nintendo Switch OLED",
      quantity: 1,
      price: 4000,
      image: nt,
      oldPrice: "5600",
      rating: "4.9",
      sold: "600+",
    },
    {
      id: 10,
      name: "Logitech G733 Wireless Headset",
      quantity: 1,
      price: 900,
      image: lh,
      oldPrice: "1200",
      rating: "4.2",
      sold: "300+",
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = state.cartProduct.find((p) => p.id === action.payload.id);
      if (product) {
        product.quantity += 1;
      } else {
        state.cartProduct.push({ ...action.payload, quantity: 1 });
      }
    },
    increment: (state, action) => {
      const product = state.cartProduct.find((i) => i.id === action.payload);
      if (product) {
        product.quantity += 1;
      }
    },
    decrement: (state, action) => {
      const product = state.cartProduct.find((i) => i.id === action.payload);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    },
    deleteProduct: (state, action) => {
      state.cartProduct = state.cartProduct.filter(
        (i) => i.id !== action.payload
      );
    },
  },
});

export const { addToCart, increment, decrement, deleteProduct } =
  cartSlice.actions;
export default cartSlice.reducer;
