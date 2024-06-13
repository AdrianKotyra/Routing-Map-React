import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/product";
import Pricing from "./pages/pricing";
import Homepage from "./pages/homepage";
import PageNotFound from "./pages/pageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login"

export default function App(){
  return (
    <BrowserRouter>  
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="product" element={<Product/>} />
        <Route path="pricing" element={<Pricing/>} />
        <Route path="app" element={<AppLayout/>} />
        <Route path="login" element={<Login/>} />
        <Route path="*" element={<PageNotFound/>} />
       
      </Routes>
      
      
      
    </BrowserRouter>
    
  )
}