import React from 'react';
import styles from '../colorfilter.module.css';

const ColorFilters = () => {
  const colors = ['#FCCA46', '#FBBEAC', '#7A9278', '#75949E', '#233D4D', '#F0F0F0', '#000000'];

  return (
    <div className={styles.colorfilterwrp}>
        <h5 className={styles.filtertitle}>ჩანთის ფერის მიხედვით</h5>
    <div className={styles.colorFilterContainer}>
        
      {colors.map((color, index) => (
        <div key={index} className={styles.colorFilter} style={{ backgroundColor: color }} />
      ))}
    </div>
    </div>
  );
};

export default ColorFilters;
