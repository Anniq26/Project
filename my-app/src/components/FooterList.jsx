import React from "react";
import phoneImg from '../style/phone.webp';
import mailImg from '../style/mail.webp';
import instaImg from '../style/instagram.webp';
import fbImg from '../style/facebook.webp';
import wtspImg from '../style/whatsapp.webp';
import styles from '../styles.module.css';


const FooterItems = [
{id:1, title:'+995 574 085 413', image: phoneImg},
{id:2, title:'Qina@gmail.com', image: mailImg}
];

const FooterParts = [
    {id:1, image: instaImg},
    {id:2, image: fbImg},
    {id:3, image: wtspImg},
]

const FooterList = () => (
    <div className={styles.footer}> 
        <div className={styles.footerone}>
            {FooterItems.map(item => (
                <div className={styles.footeroneItems} key={item.id}>
                 <img className={styles.footeroneimg} src={item.image} alt={item.title} />
                <p className={styles.footeroneItemsP}>{item.title}</p>
                </div>
            ))}
        </div>
        <div className={styles.footertwo}>
            {FooterParts.map(item => (
                <div key={item.id}>
                    <img src={item.image} alt={item.title} />
                </div>
            ))}
        </div>
    </div>
)

export default FooterList