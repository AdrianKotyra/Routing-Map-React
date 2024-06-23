
import styles from "./CountriesList.module.css"
import Spinner from "./Spinner"

import Message from "./Message"
import CountryItem from "./CountryItem";

function CountriesList({cities, isLoading}){

   
  
    if(isLoading) return <Spinner/>;
    if(!cities.length) return <Message message="Add your first city by clicking on the city map"/>

    const countries = cities.reduce((arr, city) => {
        // Check if the country is already in the array
        if (!arr.map(ele => ele.country).includes(city.country)) {
            // Add the country if it's not already included
            return [...arr, { country: city.country, emoji: city.emoji }];
        } else {
            // Return the array as is if the country is already included
            return arr;
        }
    }, []);
    

    return <ul className={styles.cityList}>
    {countries.map(country=> <CountryItem country={country}  key={country}/>  )}
      
  </ul>
      
  
    
    
}
export default CountriesList