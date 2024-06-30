import { createContext, useContext, useEffect, useState } from "react";

const BASE_URL = "http://localhost:9000";
const CitiesContext = createContext()

function CitiesProvider({children}){
    const [cities, setCities] = useState([])
    const [isLoading, setIsloading] = useState(false)
    const [currentCity, setCurrentCity] = useState({})
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
   
    async function getCity(id){
      try {
        setIsloading(true)
        const res = await fetch(`${BASE_URL}/cities/${id}`);
        const data = await res.json()
        setCurrentCity(data)  
      } 
      catch {
        console.log("there was an error loading data")
      }

      finally {
        setIsloading(false)
      }
    


    }
    
    return <CitiesContext.Provider value={{
      cities, isLoading, currentCity, getCity
    }}>

    {children}
    </CitiesContext.Provider>
}


function useCities(){
    const context = useContext(CitiesContext)
    return context;
}
export {useCities, CitiesProvider }