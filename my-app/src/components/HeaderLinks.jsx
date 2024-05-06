import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import styles from '../headerfooterpgstyles.module.css';



const HeaderLinks = () => {
    const location = useLocation();

    const links = [
      { path: '/main', label: 'მთავარი' },
      { path: '/collections', label: 'კოლექცია' },
      { path: '/collections/offers', label: 'შეთავაზებები' },
      { path: '/madebyu', label: 'შექმენი შენით' },
      { path: '/contact', label: 'კონტაქტი' },
      { path: '/aboutus', label: 'ჩვენ შესახებ' },
    ];
  
    return (
      <div className={styles.linksstyle}>
        {links.map(({ path, label }) => (
          <Link
            key={path}
            className={`${styles.link} ${location.pathname === path ? styles.activeLink : ''}`}
            to={path}
          >
            {label}
          </Link>
        ))}
      </div>
    );
}

export default HeaderLinks