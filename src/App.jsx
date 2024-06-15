import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/product";
import Pricing from "./pages/pricing";
import Homepage from "./pages/homepage";
import PageNotFound from "./pages/pageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login"
import CityList from "./components/CityList"

export default function App(){
  return (
    <BrowserRouter>  
      <Routes>
        <Route index element={<Homepage/>} />
        <Route path="product" element={<Product/>} />
        <Route path="pricing" element={<Pricing/>} />
        <Route path="app" element={<AppLayout/>}>
          <Route index path="cities" element={<CityList/>} />
          <Route path="cities" element={<CityList/>} />
          <Route path="countries" element={<p>Countries</p>} />
          <Route path="form" element={<p>Form</p>} />

        </Route>
        <Route path="login" element={<Login/>} />
        <Route path="*" element={<PageNotFound/>} />
       
      </Routes>
      
      
      
    </BrowserRouter>
    
  )
}