import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import Product from "./pages/product";
import Pricing from "./pages/pricing";
import Homepage from "./pages/homepage";
import PageNotFound from "./pages/pageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login"
import CityList from "./components/CityList"
import CountriesList from "./components/CountriesList";
import City from "./components/City";
import Form from "./components/Form";

const BASE_URL = "http://localhost:9000";

export default function App(){
  const [cities, setCities] = useState([])
  const [isLoading, setIsloading] = useState(false)

  useEffect(function(){
    async function fetchCities(){
      try {
        setIsloading(true)
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json()
        setCities(data)  
      } 
      catch {
        console.log("there was an error loading data")
      }

      finally {
        setIsloading(false)
      }
        


    }
    fetchCities()
  },[])

  return (
    <BrowserRouter>  
      <Routes>
        <Route index element={<Homepage/>} />
        <Route path="product" element={<Product/>} />
        <Route path="pricing" element={<Pricing/>} />
        <Route path="app" element={<AppLayout/>}>
          <Route index element={<Navigate replace = "cities"/>} />
          <Route path="cities" element={<CityList cities={cities}  isLoading={isLoading}/> } />
          <Route path="cities/:id" element={<City/>} />

          <Route path="countries" element={<CountriesList cities={cities}  isLoading={isLoading}/>} />
          <Route path="form" element={<Form/>} />

        </Route>
        <Route path="login" element={<Login/>} />
        <Route path="*" element={<PageNotFound/>} />
       
      </Routes>
      
      
      
    </BrowserRouter>
    
  )
}