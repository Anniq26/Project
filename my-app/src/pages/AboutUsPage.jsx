import React from "react"
import styles from '../styles.module.css';
import { Link, NavLink, Route, Router } from "react-router-dom";
import imgAboutUs from '../style/aboutus.png';
import imgArr from '../style/arr.png';


const AboutUsPage = () => {
    return (    
        <div className={styles.contactspage}>
      <div className={styles.pageorient}>
        <Link className={styles.contactsplink} to={'/main'}>მთავარი</Link>
        <img className={styles.collecsecbtnimg} src={imgArr} alt="img" />
        <Link className={styles.contactsplink} to={'/aboutus'}>ჩვენს შესახებ</Link>
      </div>
      <div className={styles.contactspagewrp}>
        <div className={styles.contactspicturewrapper}>
          <img className={styles.contactspicture} src={imgAboutUs} alt="img" />
        </div>
        <div className={styles.contactstext}>
          <div className={styles.contentwrapper}>
            <h2 className={styles.contacttitle} >ჩვენს შესახებ:</h2>
            <p className={styles.phonenmbp}>
            ქინა დაარსდა 2023 წელს. ქინას შექმნის იდეა ხატვის             სიყვარულმა და ნიჭმა განაპირობა, ორიგინამურობამ,
            განსაკთრებულობამ, განსხვავებულისადმი სიყვარულმა            და ინტერსემა. ქინა არის ბრენდი, რომელიც ქმნის ჩანთებს
            სასურველი ნახატით წარწერით და ასევე მოქარგული             ორნამენტებით. მუშაობის პროცესში ვიყენებთ მაღალი ხარისხის 
            აკვარელებს, საქსოვ ძაფებს და ჩანთის ქსოვილად წამოდგენილია             ტილო, თუმცა ნებისმიერი ნაჭრის მოხატვაა შესაძლებელი. 
            </p>
          </div>
          <div className={styles.contentwrapper}>
            <h2 className={styles.contacttitle}>სამომავლო გეგმები</h2>
            <p className={styles.phonenmbp}>
            მომავალში, რათქმაუნდა ქინას უნდა მიაღწიოს ბევრ წარმატებას,            ფართო მაშტაბებზე გავიდეს და მომხმარებლების შეფასებებიდან 
            სურვილების ასრულებიდან და სიყვარულიდან გამომდინარე მასზე            გაიზარდოს მოთხოვნა. არა მხოლოდ საქართველოში არამედ მის
            ფარგლებს გარეთაც.ქინა ასევე ცდილობს ქართული კულტურისთვის             დამახასიათებელი ემენეტების გამოყენებას ორნამენტების სახით 
            ახალ კოლექციაში, რათა კარგად გამოაჩინოს თავისი იდენტურეობა             და ხაზი გასუვას პროდუქტის წამოშობას სწორად ამ დამახასიატებლი 
            ქართული ორნამენტებით.
            </p>
          </div>
        </div>
      </div>
    </div>
    )
}

export default AboutUsPage