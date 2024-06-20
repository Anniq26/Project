import React from "react"
import styles from '../contactsxaboutuspgstyles.module.css';
import { Link, } from "react-router-dom";
import imgAboutUs from '../style/aboutus.png';
import imgArr from '../style/arr.png';



const AboutUsPage = () => {
  
  const aboutUsInfo = [
    {title: 'ჩვენ შესახებ:', content:'ქინა დაარსდა 2023 წელს. ქინას შექმნის იდეა განაპირობა: ხატვის სიყვარულმა და ნიჭმა,  ორიგინალურობამ, განსაკუთრებულობამ, განსხვავებულობისადმი სიყვარულმა და ინტერესმა. ქინა არის ბრენდი, რომელიც ქმნის ჩანთებს სასურველი ნახატით, წარწერითა და ასევე მოქარგული ორნამენტებით. მუშაობის პროცესში ვიყენებთ: მაღალი ხარისხის აკვარელს, საქსოვ ძაფებს და ჩანთის ქსოვილად წარმოდგენილია ტილო, თუმცა ნებისმიერი ნაჭრის მოხატვაა შესაძლებელი.'},
    {title: 'სამომავლო გეგმები', content:'მომავალში, რა თქმა უნდა, ქინას სურს, მიაღწიოს ბევრ წარმატებას, ფართო მასშტაბებზე გავიდეს და მომხმარებლების შეფასებებიდან, სურვილების ასრულებიდან და სიყვარულიდან გამომდინარე, მასზე გაიზარდოს მოთხოვნა. არა მხოლოდ საქართველოში, არამედ მის ფარგლებს გარეთაც. ქინა, ასევე ცდილობს, ქართული კულტურისთვის დამახასიათებელი ელემენტების გამოყენებას ორნამენტების სახით, ახალ კოლექციაში, რათა კარგად გამოაჩინოს თავისი იდენტურობა და ხაზი გაუსვას პროდუქტის წარმოშობას, სწორედ ამ დამახასიათებელი ქართული ორნამენტებით.'}
  ]

    return (    
        <div className={styles.contactspage}>
      <div className={styles.pageorient}>
        <Link className={styles.contactsplink} to={'/main'}>მთავარი</Link>
        <img className={styles.collecsecbtnimg} src={imgArr} alt="img" />
        <Link className={styles.contactsplink} to={'/aboutus'}>ჩვენ შესახებ</Link>
      </div>
      <div className={styles.contactspagewrp}>
        <div className={styles.contactspicturewrapper}>
          <img className={styles.contactspicture} src={imgAboutUs} alt="img" />
        </div>
        <div className={styles.contactstext}>
        {aboutUsInfo.map(({title, content}) => (
            <div className={styles.contentwrapper}>
            <h2 className={styles.contacttitle}>{title}</h2>
            <p className={styles.aboutustext}>{content}</p>
            </div>
        ))}
      </div>        
      </div>
    </div>
    )
}

export default AboutUsPage