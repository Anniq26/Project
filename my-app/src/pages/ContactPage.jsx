import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../contactsxaboutuspgstyles.module.css';
import imgContact from '../style/contactimg.png';



const ContactPage = () => {

  const contactInfo = [
    { title: 'ტელეფონი:', content: '+995 574 08 54 13', link: 'tel:+995574085413' },
    { title: 'მისამართი:', content: 'ჩხოროწყუ, მუხური.', link: 'https://bit.ly/4bfqju5' },
    { title: 'Gmail:', content: 'Qina@gmail.com', link: 'mailto:Qina@gmail.com' },
    {title: 'ნებისმერ დროს დაგვიკავშირდით თქვენთვის სასურველ პლატფორმაზე, ჩვენ მალე გიპასუხებთ.' }
  ];

  const qinaInfo = [
    {title:'მიწოდება:' , content:'“ქინა” უზრუნველყოფს, მომხმარებლისთვის სასურველ დროსა და ადგილას, ნივთის მიწოდების სერვისს. საქართველოს ნებისმიერ წერტილში შესაძლებელი იქნება თქვენი შეკვეთის მიღება, რა თქმა უნდა, უმოკლეს ვადაში.'},
    {title:'შეკვეთის გაფორმება:' , content:'შეკვეთის გასაფორმებლად დაგვიკავშირდით ნომერზე, ან მოგვწერეთ თქვენთვის სასურველ სოციალურ ქსელში, ჩვენ მალე გიპასუხებთ.'}
  ] 
  return (
    <div className={styles.contactspage}>
      <div className={styles.contactspagewrp}>
        <div className={styles.contactspicturewrapper}>
          <img className={styles.contactspicture} src={imgContact} alt="img" />
        </div>
        <div className={styles.contactstext}>
          <h2 className={styles.contactmaintitle}>კონტაქტი:</h2>
          {contactInfo.map(({ title, content, link }) => (
            <div key={title} className={styles.contentwrapper}>
              <h3 className={styles.contacttitle}>{title}</h3>
              <div className={styles.infowrapper}>
                {link ? (
                  <p className={styles.phonenmb}>
                    <Link className={styles.phonenmblink} to={link}>
                      {content} 
                     </Link>
                  </p>
                ) : (
                  <p className={styles.aboutustext}>{content}</p>
                )}
              </div>
            </div>
          ))}
      
        {qinaInfo.map(({ title, content}) => (
          <div className={styles.contentwrapperabout}>
            <h2 className={styles.titleabout}>{title}</h2>
            <p className={styles.aboutustext}>{content}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default ContactPage;