import React from 'react';
import { Link, Outlet } from "react-router-dom";
import styles from '../headerfooterpgstyles.module.css';
import FooterList from "../components/FooterList";
import imgLogo from '../style/logo axali.png';
import SearchInput from '../components/SearchInput'; 
import HeaderFrame from '../components/HeaderFrame';

const LinkLayout = () => {
    return (
      <div className={styles.layoutRoot}>
        <HeaderFrame />
        <div className={styles.headerwrappr}>
          <div className={styles.header}>
            <Link to="/main" className={styles.logoStyle}>
              <img src={imgLogo} alt="ლოგო" className={styles.logoStyle} />
            </Link>
            <div className={styles.searchwrp}>
              <SearchInput />
            </div>
            {/* <div className={styles.linksstyle}>
              <HeaderLinks />
            </div>
            <ChangeLanguage /> */}
          </div>
        </div>
        {/* <Messages /> */}
        <Outlet />
        <FooterList />
      </div>
    );
  };
  
export default LinkLayout;
