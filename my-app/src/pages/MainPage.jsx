import React from "react";
import styles from '../mainpgstyles.module.css';
import imgMain from '../style/salemain.png';
import CustomDesignSection from "../components/CustomDesignSection"; 
import SalesBag from "../components/SalesBag";
import MainPageItems from "../components/MainPageItems";
import HeaderLinks from "../components/HeaderLinks"
import imgBorder from '../style/Rectangle 64.png';
import { Link } from "react-router-dom";



const MainPage = () => {
return (
<div className={styles.pagewrapper}>
    <div className={styles.mainpagediv}>
        <div className={styles.linksstyle}>
            <HeaderLinks />
        </div>
    {/* section first */}
    <div className={styles.secfirstwrp}>
        <div className={styles.sectionfirst}>
            <div className={styles.firstsecitems}>
                <div className={styles.titleone}>
                    <h2  className={styles.seconefirsttitle}>დღის შეთავაზება</h2>
                    <h3  className={styles.seconetwotitle}>შეუკვეთე დღეს და მიიღე 10% ფასდაკლება მეორე შენაძენზე</h3>
                </div>
            </div>
            <img className={styles.firstsecimgmain} src={imgMain} alt="img" /> 
        </div> 
        <img className={styles.firstsecimgborder} src={imgBorder} alt="img" /> 
    </div>

{/* section second */}
<div className={styles.sectionsecondwrapper}>
    <div className={styles.sectionsecond}>
        <Link to={'/collections'} className={styles.secondtitle}>
            <h2 className={styles.secondtitle}> რჩეული</h2>
        </Link>
        <div >
            <MainPageItems />
        </div>
        {/* <button onClick={() => handleClick('/collections')} className={styles.more}>მეტის ნახვა 
        <img src={imgLabel} alt="label" />
        </button> */}
        <CustomDesignSection />
    </div>
</div>
<div className={styles.sectionsecondwrapper}>       
    <div className={styles.sectionsecond}>        
        <Link to={'/sales'} className={styles.secondtitle}>
            <h2 className={styles.secondtitle}>ფასდაკლებები</h2>
        </Link>
   
        <SalesBag />

            </div>
        </div>
    </div>
</div>
    );
}

export default MainPage;
