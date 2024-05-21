import React from 'react';
import { Outlet } from "react-router-dom";
import styles from '../headerfooterpgstyles.module.css';
import FooterList from "../components/FooterList";
import imgLogo from '../style/logo.webp';
import ChangeLanguage from "../components/ChangeLanguage";
import HeaderFrame from "../components/HeaderFrame"; 
import SearchInput from '../components/SearchInput'; 
import Messages from '../components/Messages';
import HeaderLinks from '../components/HeaderLinks';

const LinkLayout = () => {
    return (
        <div className={styles.layoutRoot}>
            <HeaderFrame />
            <div className={styles.headerwrappr}> 
                <div className={styles.header}> 
                <img src={imgLogo} alt="ლოგო" className={styles.logoStyle} />           
                <div className={styles.linksstyle}>
                <HeaderLinks/>
                </div>
                <ChangeLanguage />
                <div className={styles.searchwrp}>
                <SearchInput />  
                </div>
                </div> 
            </div>
            <Messages/>
            <Outlet/>
            <FooterList/>
        </div>
    )
}

export default LinkLayout;
