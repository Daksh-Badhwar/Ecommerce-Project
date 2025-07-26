import { configureStore } from '@reduxjs/toolkit' 
import  cartReducer   from './cartSlice'
import React from "react"

export const store = configureStore({
  reducer: {
    cart : cartReducer 
  },
})