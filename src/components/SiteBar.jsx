
import styles from "./Sidebar.module.css"
import Logo from "./Logo"
import AppNav from "./AppNav"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"

function Sitebar(){
    return (
        <div className={styles.sidebar}>
            <div>
            <Logo/>
            <AppNav/>
            <Outlet/>

            </div>
          
            <Footer/>
           
          
        </div>
          
       
    )
}
export default Sitebar