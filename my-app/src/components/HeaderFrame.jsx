import React from 'react';
import styles from '../headerpgstyles.module.css'; 
import imgFav from '../style/favorite.png';
import { Link } from "react-router-dom";


const HeaderFrame = () => {
    return (
    <div className={styles.headerFramewrapper}>    
        <div className={styles.headerFrame}>
            <div className={styles.headerframtxtwrp}>
                <p className={styles.headerframtxtv1}>დამზადებულია სიყვარულით ქინასგან</p> 
                <img src={imgFav} alt="img" />
                <Link to='/collections' className={styles.headerframtxtv2}><p >შეუკვეთე ახლავე!</p></Link>
            </div>
        </div>
    </div>
    );
};

export default HeaderFrame;