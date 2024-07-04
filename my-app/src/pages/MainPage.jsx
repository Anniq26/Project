import React from "react";
import styles from '../mainpgstyles.module.css';
import imgMain from '../style/mainpgpic.png';
import CustomDesignSection from "../components/CustomDesignSection"; 
import MainPageItems from "../components/MainPageItems";
import SalesBag from "../components/SalesBag";


const FirstTitle = [
    {id:1, text:'ხელნაკეთი ჩანთების'},
    {id:2, text:'მრავალფეროვანი არჩევანი!'}
]
const SecondTitle = [
    {id:1, text:'შეუკვეთე ქინას ხელნაკეთი ჩანთა და ჩვენ'},
    {id:2, text:'მას ნებისმიერ ადგილას გამოგიგზავნით.'}
]

const MainPage = () => {

return (
<div className={styles.pagewrapper}>
    <div className={styles.mainpagediv}>


    {/* section first */}
    <div className={styles.firstsecbckg}>
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
        </div>
    </div>


{/* section second */}
<div className={styles.sectionsecondwrapper}>
    <div className={styles.secondsecbackgrwrp}>
        <div className={styles.secondtitlewrp}>
            <h2 className={styles.secondtitle}> პოპულარული ჩანთები</h2>
        </div>
    </div>
    <div className={styles.sectionsecond}>
        <MainPageItems />
        <CustomDesignSection />
    </div>
</div>

    <div className={styles.sectionsecondwrapper}>
        <div className={styles.secondsecbackgrwrp}>
            <div className={styles.secondtitlewrp}>
                <h2 className={styles.secondtitle}> თვის ფასდაკლებები</h2>
            </div>
        </div>
        <div className={styles.salesbagssection}>
            <SalesBag/>
        </div>
        </div>
    </div>
</div>
    );
}

export default MainPage;
