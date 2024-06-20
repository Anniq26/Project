import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import styles from '../headerfooterpgstyles.module.css';
import imgCollection from '../style/collectioncomp.png';
import imgOffer from '../style/შეთავაზებააა.png';
import imgSale from '../style/sale comp.png';
import imgMBU from '../style/madebyu.png';
import imgContact from '../style/madebyu.png';
import imgAbUs from '../style/aboutus comp.png';



const HeaderLinks = () => {
    const location = useLocation();

    const links = [
      { path: '/collections', label: 'კოლექცია' , image: imgCollection},
      { path: '/collections/offers', label: 'შეთავაზებები' , image: imgOffer},
      { path: '/sales', label: 'ფასდაკლებები' , image: imgSale},
      { path: '/madebyu', label: 'შექმენი' , image: imgMBU},
      { path: '/contact', label: 'კონტაქტი' , image: imgContact},
      { path: '/aboutus', label: 'ჩვენ შესახებ' , image: imgAbUs},
    ];
  
    return (
      <div className={styles.pageslinks}>
        {links.map(({ path, label, image }) => (
          <Link
            key={path}
            className={`${styles.link} ${location.pathname === path ? styles.activeLink : ''}`}
            to={path}
          >
            <div className={styles.linkcard}>
              <h3 className={styles.linksstyle}>{label}</h3>
              <img src={image} alt="img" className={styles.linkImgs} />
            </div>
          </Link>
        ))}
      </div>
    );
}

export default HeaderLinks