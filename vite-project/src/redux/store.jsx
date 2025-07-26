import { configureStore } from '@reduxjs/toolkit' 
import { cartSlice } from './cartSlice'
import React from "react";

export const store = configureStore({
  reducer: {
    cart : cartSlice
  },
})