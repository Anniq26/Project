import React from 'react';
import { Link, Outlet } from "react-router-dom";
import styles from '../styles.module.css';
import FooterList from "../components/FooterList";
import imgLogo from '../style/logo.webp';
import ChangeLanguage from "../components/ChangeLanguage";
import HeaderFrame from "../components/HeaderFrame"; // Make sure this is correctly imported
import SearchInput from '../components/SearchInput'; // Import the Search Component

const LinkLayout = () => {
    return (
        <div className={styles.layoutRoot}>
            <HeaderFrame />
            <div className={styles.header}>   
                <img src={imgLogo} alt="ლოგო" className={styles.logoStyle} />           
                <div className={styles.linksstyle}>
                    <Link className={styles.link} to={'/main'}>მთავარი</Link>
                    <Link className={styles.link} to={'/collections'}>კოლექცია</Link>
                    <Link className={styles.link} to={'/offers'}>შეთავაზებები</Link>
                    <Link className={styles.link} to={'/madebyu'}>შექმენი შენით</Link>
                    <Link className={styles.link} to={'/contact'}>კონტაქტი</Link>
                    <Link className={styles.link} to={'/aboutus'}>ჩვენ შესახებ</Link>
                </div>
                <ChangeLanguage />
            </div>
            <SearchInput />  {/* Include the SearchInput component here */}
            <Outlet/>
            <FooterList/>
        </div>
    )
}

export default LinkLayout;
