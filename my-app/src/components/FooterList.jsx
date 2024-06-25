import React from "react";
import instaImg from '../style/instagram.png';
import fbImg from '../style/facebook.png';
import imgBarcode from '../style/barcode.png';
import styles from '../footerpgstyles.module.css';
import { Link } from "react-router-dom";

const FooterItems = [
  { id: 1, title: 'მობილურის ნომერი:', number: '+995 574 085 413' },
  { id: 2, title: 'Gmail:', mail: 'Qina@gmail.com' },
  { id: 3, title: 'მისამართი:', address: 'ჩხოროწყუ, მუხური.' }
];

const FooterParts = [
  { id: 2, image: fbImg, link: 'https://bit.ly/3Uwu3Sv' },
  { id: 1, image: instaImg, link: 'https://bit.ly/3UynU89' },
];

const FooterAboutUs = [
  { id: 1, title: 'ქინას ისტორია', link:'/aboutus' },
  { id: 2, title: 'სამომავლო გეგმები', link:'/aboutus' }
];

const FooterList = () => {

    const handleImageClick = (link) => {
        window.open(link, "_blank");
      }

  return (
    <div className={styles.footer}>
      <div className={styles.footerPartOne}>
        <h5 className={styles.footeroneItemsP}>საკონტაქტო:</h5>
        <div className={styles.footerone}>
          {FooterItems.map(item => (
            <div className={styles.footeroneItems} key={item.id}>
              <p className={styles.footeroneItemsP}>{item.title}</p>
              <Link className={styles.footerlinks} to={'/contact'}>{item.number}{item.mail}{item.address}</Link>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.aboutusfooter}>
        <div className={styles.footerPartOne}>
          <h5 className={styles.footeroneItemsP}>ჩვენ შესახებ</h5>
          <div className={styles.footerone}>
            {FooterAboutUs.map(item => (
              <div className={styles.footeroneItems} key={item.id}>
                <Link className={styles.footerlinksptwo} to={item.link}>{item.title}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.footertwo}>
        <div className={styles.footerPartOne}>
          <h5 className={styles.footeroneItemsP}>დაგვიმეგობრდით:</h5>
          <div className={styles.footericons}>
            {FooterParts.map(item => (
              <div key={item.id} >
                <img src={item.image} alt={item.title} onClick={() => handleImageClick(item.link)} />
              </div>
            ))}            
          </div>
        </div>

      </div>
      <img className={styles.imgbarcode} src={imgBarcode} alt="img" />
    </div>
  )
}

export default FooterList;
