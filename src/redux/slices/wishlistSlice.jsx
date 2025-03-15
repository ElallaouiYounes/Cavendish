import { createSlice } from "@reduxjs/toolkit";


const initialState = {
      wishlist : []  ,

}

const wishlistSlice = createSlice({
    name : 'wishlist' , 
    initialState  , 
    reducers : {
          addWishList : (state,action) => {
               const Product = {
                     ...action.payload.product , 
                     AmountQuantity : action.payload.amount 
               }
               state.wishlist.push(Product)
          } , 
          removeWishList : (state,action) => {
                state.wishlist = state.wishlist.filter(wish => wish.id !== action.payload)
          } , 
          incrementQuantity: (state, action) => {
            const item = state.wishlist.find(item => item.id === action.payload);
            if(item.AmountQuantity < item.quantity) {
                  item.AmountQuantity += 1;
            }
             
           
          },
          decrementQuantity: (state, action) => {
            const item = state.wishlist.find(item => item.id === action.payload);
            if (item && item.AmountQuantity > 1) {
              item.AmountQuantity -= 1;
            }
          },
          
    }
})


export const {addWishList,removeWishList ,incrementQuantity ,decrementQuantity } = wishlistSlice.actions
export default wishlistSlice.reducer