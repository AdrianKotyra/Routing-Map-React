import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  return (
   
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
      <button className={styles.deleteBtn}>&times;</button>
    </li>
  );
}

export default CountryItem;
