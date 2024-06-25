import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import styles from '../headerpgstyles.module.css';



const HeaderLinks = () => {
    const location = useLocation();

    const links = [
      { path: '/main', label: 'მთავარი'},
      { path: '/collections/offers', label: 'შეთავაზებები'},
      { path: '/collections', label: 'კოლექცია'},
      { path: '/madebyu', label: 'შექმენი შენით'},
      { path: '/contact', label: 'კონტაქტი'},
      { path: '/aboutus', label: 'ჩვენ შესახებ'},
    ];
  
    return (
      <div className={styles.pageslinks}>
        {links.map(({ path, label,  }) => (
          <Link
            key={path}
            className={`${styles.link} ${location.pathname === path ? styles.activeLink : ''}`}
            to={path}
          >
            <h3 className={styles.linksstyle}>{label}</h3>
          </Link>
        ))}
      </div>
    );
}

export default HeaderLinks