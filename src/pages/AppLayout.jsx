import  AppNav from "../components/AppNav"
import Map from "../components/Map"
import Sitebar from "../components/SiteBar"
import styles from "./AppLayout.module.css"
import PageNav from "../components/PageNav"

function AppLAyout(){
    return (
        <>
       
            <div className={styles.app}>
            
                <Sitebar/>

                <Map/>
            
            </div>
        </>
      
    )
}
export default AppLAyout;