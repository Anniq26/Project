import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles.module.css';
import imgContact from '../style/contactimg.png';
import imgArr from '../style/arr.png';



const ContactPage = () => {

  const contactInfo = [
    { title: 'ტელეფონი:', content: '+995 574 08 54 13', link: 'tel:+995574085413' },
    { title: 'მისამართი:', content: 'ჩხოროწყუ, მუხური.', link: 'https://bit.ly/4bfqju5' },
    { title: 'Gmail:', content: 'Qina@gmsil.com', link: 'mailto:Qina@gmsil.com' },
    {content: 'ნებისმერ დროს დაგვიკავშირდით თქვენთვის სასურველ პლატფორმაზე, ჩვენ მალე გიპასუხებთ.' }
  ];

  const qinaInfo = [
    {title:'მიწოდება:' , content:'“ქინა” უზრუნველყოფს, მომხმარებლისთვის სასურველ დროსა და ადგილას, ნივთის მიწოდების სერვისს. საქართველოს ნებისმიერ წერტილში შესაძლებელი იქნება თქვენი შეკვეთის მიღება, რა თქმა უნდა, უმოკლეს ვადაში.'},
    {title:'შეკვეთის გაფორმება:' , content:'შეკვეთის გასაფორმებლად დაგვიკავშირდით ნომერზე, ან მოგვწერეთ თქვენთვის სასურველ სოციალურ ქსელში, ჩვენ მალე გიპასუხებთ.'}
  ] 
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
          {contactInfo.map(({ title, content, link }) => (
            <div key={title} className={styles.contentwrapper}>
              <h2 className={styles.contacttitle}>{title}</h2>
              <div className={styles.infowrapper}>
                {link ? (
                  <p className={styles.phonenmb}>
                    <Link className={styles.phonenmblink} to={link}>
                      {content} 
                     </Link>
                  </p>
                ) : (
                  <p className={styles.phonenmbp}>{content}</p>
                )}
              </div>
            </div>
          ))}
      
        {qinaInfo.map(({ title, content}) => (
          <div className={styles.contentwrapper}>
            <h2 className={styles.contacttitle}>{title}</h2>
            <p className={styles.phonenmbp}>{content}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default ContactPage;