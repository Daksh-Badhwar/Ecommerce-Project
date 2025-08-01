import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from "./redux/store";
import { Provider } from "react-redux";


ReactDom.createRoot(document.getElementById('root')).render(
   <Provider store={store}>
    <App />
    </Provider>
    
  
)
