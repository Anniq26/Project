import React from 'react';
import { Outlet } from "react-router-dom";
import styles from '../linklayout.module.css';
import FooterList from "../components/FooterList";
import HeaderFrame from '../components/HeaderFrame';
import Header from '../components/Header';

const LinkLayout = () => {
    return (
      <div className={styles.layoutRoot}>
        <HeaderFrame />
        <Header/>
        <Outlet />
        <FooterList />
      </div>
    );
  };
  
export default LinkLayout;
