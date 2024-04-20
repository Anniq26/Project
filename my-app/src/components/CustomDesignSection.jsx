import React from "react";
import styles from '../styles.module.css';
// import customDesignImage from '../style/customDesignImage.webp'; 

const CustomDesignSection = () => {
    return (
        <div className={styles.customDesignSections}>
            <div className={styles.captionDesign}>
                <h2>შექმენი შენი დიზაინით!</h2>
                <p className={styles.subtextDesign}>
                შექმენი შენი სასურველი დიზაინით ჩანთა რომელიც
                 იქნება დაკავშირებული </p>
                 <p className={styles.subtextDesign}>შენს სურვილებთან,
                 მოგონებებთან ან საყვარელ ადამიენებთან!</p>
                 <p className={styles.subtextDesign}>იყავი უბრალო და ამავდროულად გამორჩეული</p>
            </div>
            {/* <img src={customDesignImage} alt="Custom Design" className={styles.customDesignImage} /> */}
        </div>
    );
};

export default CustomDesignSection;
