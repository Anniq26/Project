import React from "react";
import styles from '../styles.module.css';
import { Link, NavLink } from "react-router-dom";
import imgVector from '../style/sectiononeimg.webp';
import imgBag from '../style/sectiononebag.webp';
// import MainPageItems from "../components/MainPageItems";
import MainPageItemscopy from "../components/MainPageItemscopy";
import SimpleBagDisplay from "../components/SimpleBagDisplay";  // Ensure this is imported

const MainPage = () => {
    return (
        <div className={styles.mainpagediv}>
            {/* section first */}
            <div className={styles.sectionfirst}>
                <div className={styles.firstsecitems}>
                    <div className={styles.titleone}>
                        <h2 className={styles.firsttitle}>ხელნაკეთი ჩანთების</h2>
                        <h2 className={styles.firsttitle}>მრავალფეროვანი არჩევანი!</h2>
                    </div>
                    <img className={styles.imgVector} src={imgVector} alt="img" />
                </div>
                <img className={styles.firstsecbag} src={imgBag} alt="ჩანთა" />
            </div>

            {/* section second */}
            <div className={styles.sectionsecond}>
                <h2 className={styles.secondtitle}>პოპულარული ჩანთები</h2>
                <div className={styles.sectwoitems}>
                    <MainPageItemscopy />
                </div>
            </div>

            {/* third section - Simplified Bag Display */}
            <div className={styles.sectionsecond}>
                <h2 className={styles.secondtitle}>ჩანთები</h2>
                <SimpleBagDisplay />
            </div>
        </div>
    );
}

export default MainPage;
