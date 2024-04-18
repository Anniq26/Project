import React from "react";
import phoneImg from '../style/phone.webp';
import mailImg from '../style/mail.webp';
import instaImg from '../style/instagram.webp';
import fbImg from '../style/facebook.webp';
import styles from '../styles.module.css';
import { Link } from "react-router-dom";

const FooterItems = [
{id:1, title:'მობილურის ნომერი:', number: '+995 574 085 413'},
{id:2, title:'Gmail:', mail: 'Qina@gmail.com'},
{id:3, title:'მისამართი:', address: 'ჩხოროწყუ, მუხური.'}
];

const FooterParts = [
    {id:1, image: instaImg},
    {id:2, image: fbImg},
]

const FooterAboutUs = [
    {id:1, title: 'ქინას ისტორია'},
    {id:2, title: 'სამომავლო გეგმები'}
]

const FooterList = () => (
    <div className={styles.footer}> 
        <div className={styles.footerPartOne}>
            <h5 className={styles.footeroneItemsP}>საკონტაქტო:</h5>
            <div className={styles.footerone}>
                {FooterItems.map(item => (
                    <div className={styles.footeroneItems} key={item.id}>
                    <p className={styles.footeroneItemsP}>{item.title}</p>
                    <Link className={styles.footerlinks}>{item.number}{item.mail}{item.address}</Link>
                    </div>
                ))}
            </div>
        </div>

        <div className={styles.aboutusfooter}>
            <div className={styles.footerPartOne}>
                <h5 className={styles.footeroneItemsP}>ჩვენს შესახებ</h5> 
                {
                    FooterAboutUs.map(item => (
                        <div className={styles.footeroneItems} key={item.id}>
                            <Link className={styles.footerlinksptwo}>{item.title}</Link>
                        </div>
                    ))
                }
            </div>
        </div>

        <div className={styles.footertwo}>
            <div className={styles.footerPartOne}>
                <h5 className={styles.footeroneItemsP}>დაგვიმეგობრდით სოციალურ გვერდებზე:</h5>
                <div className={styles.footericons} >
                {FooterParts.map(item => (
                    <div key={item.id}>
                        <img  src={item.image} alt={item.title} />
                    </div>
                ))}
                </div>
            </div>
        </div>
    </div>
)

export default FooterList