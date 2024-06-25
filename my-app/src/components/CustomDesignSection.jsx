import React from "react";
import styles from '../mainpgstyles.module.css';
import { Link } from "react-router-dom";


const CustomDesignSection = () => {
 return (
    <div className={styles.customDesignSectionswrapper}>
        <div className={styles.customDesignSections}>
            <Link to='/madebyu' className={styles.captionDesign}>
                <h2 className={styles.captionDesigntitle}>შექმენი შენით!</h2> 
            </Link>
            <div className={styles.mbudescribtextwrp}>
                <p className={styles.mbudescribtext}>შექმენი შენი სასურველი დიზაინით ჩანთა, 
                    რომელიც დაკავშირეული იქნება შენს სურვილებთან, 
                    მოგონებებთან და საყვარელ ადმიანებთან. </p>
            </div>
        </div>
    </div>
);
};

export default CustomDesignSection;
