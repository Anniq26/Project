import React from 'react';
import { Link, Outlet } from "react-router-dom";
import styles from '../headerfooterpgstyles.module.css';
import FooterList from "../components/FooterList";
import imgLogo from '../style/logo.webp';
import ChangeLanguage from "../components/ChangeLanguage";
import SearchInput from '../components/SearchInput'; 
import HeaderLinks from '../components/HeaderLinks';

const LinkLayout = () => {
    return (
        <div className={styles.layoutRoot}>
            <div className={styles.headerwrappr}> 
                <div className={styles.header}> 
                <Link to={`/main`}><img src={imgLogo} alt="ლოგო" className={styles.logoStyle} />  </Link>         
                <div className={styles.linksstyle}>
                <HeaderLinks/>
                </div>
                <ChangeLanguage />
                <div className={styles.searchwrp}>
                <SearchInput />  
                </div>
                </div> 
            </div>
            {/* <Messages/> */}
            <Outlet/>
            <FooterList/>
        </div>
    )
}

export default LinkLayout;
