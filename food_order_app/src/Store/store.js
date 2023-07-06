import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../Utils/cartSlice";

const store = configureStore({
    reducer:{
        cart:cartSlice
    }

})

export default store;