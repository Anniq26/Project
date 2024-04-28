import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from '../styles.module.css';
import imgContact from '../style/contactimg.png';
import imgArr from '../style/arr.png';


const ContactPage = () => {
 
  return (
    <div className={styles.contactspage}>
      <div className={styles.pageorient}>
        <Link className={styles.contactsplink} to={'/main'}>მთავარი</Link>
        <img className={styles.collecsecbtnimg} src={imgArr} alt="img" />
        <Link className={styles.contactsplink} to={'/contact'}>კონტაქტი</Link>
      </div>
      <div className={styles.contactspagewrp}>
        <div className={styles.contactspicturewrapper}>
          <img className={styles.contactspicture} src={imgContact} alt="img" />
        </div>
        <div className={styles.contactstext}>
            <div className={styles.contentwrapper}>
              <h2 className={styles.contacttitle}>კონტაქტი:</h2>
              <div className={styles.infowrapper}>
                <p className={styles.phonenmb}>ტელეფონი: <Link className={styles.phonenmblink} to="tel:+995574085413">+995 574 08 54 13</Link></p> 
                <p className={styles.phonenmb}>მისამართი: <Link className={styles.phonenmblink} to="https://bit.ly/4bfqju5"> ჩხოროწყუ, მუხური.</Link></p> 
                <p className={styles.phonenmb}>Gmail: <Link className={styles.phonenmblink} to="mailto:Qina@gmsil.com">Qina@gmsil.com</Link></p>
                <p className={styles.phonenmbp}>
                  ნებისმერ დროს დაგვიკავშირდით 
                  თქვენთვის სასურველ პლათფომაზე,
                  ჩვენ მალევე გისპაუხებთ.
                </p>
              </div>
            </div>
          <div className={styles.contentwrapper}>
            <h2 className={styles.contacttitle} >მიწოდება:</h2>
            <p className={styles.phonenmbp}>
              “ქინა” უზრუნველყოფს მომხმარებლისთვის 
              სასურველ დროსა და ადგილას მომხმარებლისთვის
              ნივთის მიწოდების სერვისს. საქართველოს 
              ნებისმერ წერტილში შესაძლებელი იქნება 
              თქვენი სასურველი შეკვეთის მიღება 
              რათქმაუნდა უმოკლეს ვადაში. 
            </p>
          </div>
          <div className={styles.contentwrapper}>
            <h2 className={styles.contacttitle}>შეკვეთის გაფორმება:</h2>
            <p className={styles.phonenmbp}>
              შეკვეთის გასაფორმებლად დაგვიკავშირდით
              ნომერეზე, ან მოგვწერეთ თქვენთვის სასურველ
              სოცოალურ ქსელში, ჩვენ მალევე გიპასხუებთ.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
