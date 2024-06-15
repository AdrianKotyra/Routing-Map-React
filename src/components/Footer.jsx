import styles from "./Footer.modules.css"

function Footer(){
    return (
        <div className={styles.footer}>
           <p className={styles.copyright}></p>
           <div className={styles.copyright}>
            &copy; Copyright {new Date().getFullYear()} by Worldwise Inc
            
           </div>
       
        </div>
    )
}
export default Footer