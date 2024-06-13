
import styles from "./Sidebar.module.css"
import Logo from "./Logo"
import AppNav from "./AppNav"
import Footer from "./Footer"

function Sitebar(){
    return (
        <div className={styles.sidebar}>
            <Logo/>
            <AppNav/>
            <Footer/>
        </div>
    )
}
export default Sitebar