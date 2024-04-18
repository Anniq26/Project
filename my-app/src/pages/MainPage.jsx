import React from "react";
import styles from '../styles.module.css';
import { Link, NavLink } from "react-router-dom";
import imgVector from '../style/sectiononeimg.webp';
import imgBag from '../style/sectiononebag.webp';
// import MainPageItems from "../components/MainPageItems";
import MainPageItemscopy from "../components/MainPageItemscopy";
import SimpleBagDisplay from "../components/SimpleBagDisplay";  // Ensure this is imported



const FirstTitle = [
    {id:1, text:'ხელნაკეთი ჩანთების'},
    {id:2, text:'მრავალფეროვანი არჩევანი'}
]
const SecondTitle = [
    {id:1, text:'შეუკვეთე შენთვის სასურველი ფორმის, ზომის და ფერის ჩანთა'},
    {id:2, text:'ჩვენ მას გამოგიგზავნით ნებისმიერ ადგილას'}
]




const MainPage = () => {
    return (
        <div className={styles.mainpagediv}>
            {/* section first */}
            <div className={styles.sectionfirst}>
                <div className={styles.firstsecitems}>
                    <div className={styles.titleone}>
                        {FirstTitle.map(item => (
                        <div key={item.id}>
                        <h2  className={styles.seconefirsttitle}>{item.text}</h2>
                        </div>
                        ))}
                    </div>
                <div className={styles.titletwo}>
                    {SecondTitle.map(item => (
                        <div key={item.id}>
                        <h2  className={styles.seconetwotitle}>{item.text}</h2>
                        </div>
                    ))}
                </div>
            </div>
                
        </div>

            {/* section second */}
            <div className={styles.sectionsecond}>
                <h2 className={styles.secondtitle}>ქინას პოპულარული ჩანთები</h2>
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
