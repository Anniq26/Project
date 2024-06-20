import React from "react";
import styles from '../mainpgstyles.module.css';
import customDesignImage from '../style/კოლექცია (1).png';


const CustomDesignSection = () => {
 return (
    <div className={styles.customDesignSectionswrapper}>
        <div className={styles.customDesignSections}>
        <div className={styles.captionDesign}>
            <h2 className={styles.captionDesigntitle}>შექმენი შენი დიზაინით!</h2> 
        </div>
        <div className={styles.mbuimagesboard}>
            <img src={customDesignImage} alt="Custom Design" className={styles.customDesignImage} />
            <img src={customDesignImage} alt="Custom Design" className={styles.customDesignImagespan} />
        </div>
        </div>
    </div>
);
};

export default CustomDesignSection;
