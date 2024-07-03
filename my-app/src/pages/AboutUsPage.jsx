import React from "react"
import styles from '../contactsxaboutuspgstyles.module.css';
import imgAboutUs from '../style/aboutus.png';



const AboutUsPage = () => {
  
  const aboutUsInfo = [
    {title: 'ჩვენ შესახებ:', content:'ქინა დაარსდა 2023 წელს. მისი შექმნის იდეა განაპირობა: ხატვის სიყვარულმა და ნიჭმა, ორიგინალურობამ, განსაკუთრებულობამ, განსხვავებულისადმი სიყვარულმა და ინტერესმა. ქინა არის ბრენდი, რომელიც ქმნის ჩანთებს სასურველი ნახატით, წარწერითა და მოქარგული ორნამენტებით. მუშაობის პროცესში ვიყენებთ: მაღალი ხარისხის აკვარელს, საქსოვ ძაფებს და ჩანთის ქსოვილად წარმოდგენილია ტილო, თუმცა ნებისმიერი ნაჭრის მოხატვაა შესაძლებელი.'},
    {title: 'სამომავლო გეგმები', content:'მომავალში, რა თქმა უნდა, ქინას სურს, მიაღწიოს ბევრ წარმატებას, გავიდეს ფართო მასშტაბებზე და მომხმარებლების შეფასებებიდან, სურვილების ასრულებიდან და სიყვარულიდან გამომდინარე, მასზე გაიზარდოს მოთხოვნა. არა მხოლოდ საქართველოში, არამედ მის ფარგლებს გარეთაც. ქინა ახალ კოლექციაში ასევე ცდილობს, ქართული კულტურისათვის დამახასიათებელი ელემენტების გამოყენებას ორნამენტების სახით, რათა კარგად გამოაჩინოს თავისი იდენტურობა და ხაზი გაუსვას პროდუქტის წარმოშობას, სწორედ ამ დამახასიათებელი ქართული ორნამენტებით.'}
  ]

    return (    
    <div className={styles.contactspage}>
      <div className={styles.contactspagewrp}>
        <div className={styles.contactspicturewrapper}>
          <img className={styles.contactspicture} src={imgAboutUs} alt="img" />
        </div>
        <div className={styles.contactstext}>
        {aboutUsInfo.map(({title, content}) => (
            <div className={styles.contentwrapper}>
            <h3 className={styles.aboutustitlemain}>{title}</h3>
            <p className={styles.aboutustext}>{content}</p>
            </div>
        ))}
        </div>        
      </div>
    </div>
    )
}

export default AboutUsPage