import { configureStore } from "@reduxjs/toolkit";
import CartReducer from './slices/CartSlice.jsx'

const store = configureStore({
    reducer: {
        CartReducer
    }
})

export default store