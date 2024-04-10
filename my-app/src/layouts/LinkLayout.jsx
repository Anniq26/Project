import { Link, Outlet } from "react-router-dom";
import styles from '../styles.module.css';
import FooterList from "../components/FooterList";
import imgSearch from '../style/search.webp'



const LinkLayout = () => {
    return (
        <div>
            {/* header */}
            <div className={styles.header}>   
                <img src="" alt="ლოგო" />            
                <div className={styles.linksstyle}>
                    <Link className={styles.link} to={'/main'}>მთავარი</Link>
                    <Link className={styles.link} to={'/collections'}>კოლექცია</Link>
                    <Link className={styles.link} to={'/aboutus'}>ჩვენ შესახებ</Link>
                    <Link className={styles.link} to={'/contact'}>კონტაქტი</Link>
                    <img className={styles.linkimg} src={imgSearch} alt="search" />
                </div>
            </div>
            <Outlet/>
            <FooterList/>
        </div>
    )
}

export default LinkLayout