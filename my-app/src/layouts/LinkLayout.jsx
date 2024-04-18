import { Link, Outlet } from "react-router-dom";
import styles from '../styles.module.css';
import FooterList from "../components/FooterList";
import imgSearch from '../style/search.webp';
import imgLogo from '../style/logo.webp';
import ChangeLanguage from "../components/ChangeLanguage";



const LinkLayout = () => {
    return (
        <div>
            {/* header */}
            <div className={styles.header}>   
                <img src={imgLogo} alt="ლოგო" />            
                <div className={styles.linksstyle}>
                    <Link className={styles.link} to={'/main'}>მთავარი</Link>
                    <Link className={styles.link} to={'/collections'}>კოლექცია</Link>
                    <Link className={styles.link} to={'/offers'}>შეთავაზებები</Link>
                    <Link className={styles.link} to={'/madebyu'}>შექმენი შენით</Link>
                    <Link className={styles.link} to={'/contact'}>კონტაქტი</Link>
                    <Link className={styles.link} to={'/aboutus'}>ჩვენ შესახებ</Link>
                      
                </div>
                <ChangeLanguage/> 
                {/* <img className={styles.linkimg} src={imgSearch} alt="search" /> */}
            </div>
            <Outlet/>
            <FooterList/>
        </div>
    )
}

export default LinkLayout