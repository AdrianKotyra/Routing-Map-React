import styles from "./Footer.modules.css"

function Footer(){
    return (
        <div className={styles.footer}>
           <p className={styles.copyright}></p>
           &copy; Copyright {new Date().getFullYear()} by Worldwise Inc
        </div>
    )
}
export default Footer