import React from "react";
import styles from '../mainpgstyles.module.css';
import imgLabel from '../style/Component 2.webp';
import imgMain from '../style/mainimg.webp';
import CustomDesignSection from "../components/CustomDesignSection"; 
import SalesBag from "../components/SalesBag";
import imgEclipseone from '../style/Ellipse 3.png';
import imgEclipsetwo from '../style/Ellipse 3.png';
import MainPageItems from "../components/MainPageItems";




const FirstTitle = [
    {id:1, text:'ხელნაკეთი ჩანთების'},
    {id:2, text:'მრავალფეროვანი არჩევანი'}
]
const SecondTitle = [
    {id:1, text:'შეუკვეთე შენთვის სასურველი: ფორმის, ზომის და ფერის ჩანთა'},
    {id:2, text:'ჩვენ მას გამოგიგზავნით ნებისმიერ ადგილას'}
]



const switchCircles = [
    {id:1, image: imgEclipseone },
    {id:1, image: imgEclipsetwo }
]


const handleClick = (route) => {
    window.open(route, '_self');
};

const MainPage = () => {
    return (
        <div className={styles.mainpagediv}>
            {/* section first */}
            <div className={styles.secfirstwrp}>
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
                        <div className={styles.circlewrp} key={item.id}>
                        <h2  className={styles.seconetwotitle}>{item.text}</h2>
                        </div>
                    ))}
                </div>
                
            </div>
            <img className={styles.firstsecimgmain} src={imgMain} alt="img" /> 
          </div>
            <div  className={styles.switchsircles}>
                    {switchCircles.map (item => (
                        <div key={item.id}>
                            <img src={item.image} alt="img" />
                        </div>
                    ))}
                </div>     
        </div>

            {/* section second */}
            <div className={styles.sectionsecond}>
                <h2 className={styles.secondtitle}> ქინას პოპულარული ჩანთები</h2>
                <div className={styles.sectwoitems}>
                    <MainPageItems />
                </div>
                <button onClick={() => handleClick('/collections')} className={styles.more}>მეტის ნახვა 
                <img src={imgLabel} alt="label" />
                </button>
                <CustomDesignSection />

            </div>

          
            <div className={styles.sectionsecond}>
                <h2 className={styles.secondtitle}>თვის ფასდაკლებები</h2>
                <SalesBag />
                <button onClick={() => handleClick('/collections/offers')} className={styles.more}>მეტის ნახვა 
                <img src={imgLabel} alt="label" />
                </button>
            </div>
        </div>
    );
}

export default MainPage;
