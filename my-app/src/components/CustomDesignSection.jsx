import React from "react";
import styles from '../styles.module.css';
import customDesignImage from '../style/artjam_totebag_diykit01_2000x 1.png';
import imgVector from '../style/vector.png';
import imgHeart from '../style/heart.png';

const CustomDesignSection = () => {
    return (
        <div className={styles.customDesignSections}>
            <div className={styles.captionDesign}>
                <h2 className={styles.captionDesigntitle}>შექმენი შენი დიზაინით!</h2>
                <div>
                <p className={styles.subtextDesign}>
                შექმენი შენი სასურველი დიზაინით ჩანთა რომელიც
                 იქნება დაკავშირებული </p>
                 <p className={styles.subtextDesign}>შენს სურვილებთან,
                 მოგონებებთან ან საყვარელ ადამიანებთან!</p>
                 <p className={styles.subtextDesign}>იყავი უბრალო და ამავდროულად გამორჩეული</p>
                 </div>
                <span className={styles.spanimages}>
                    <img className={styles.linkimg} src={imgVector} alt="img" />
                    <img className={styles.linkimg} src={imgHeart} alt="img" />
                </span>
            </div>
            <img src={customDesignImage} alt="Custom Design" className={styles.customDesignImage} />
        </div>
    );
};

export default CustomDesignSection;
