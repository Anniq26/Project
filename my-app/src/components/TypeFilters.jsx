import React, { useState } from 'react';
import styles from '../typefilters.module.css';

const TypeFilters = () => {
  const types = [
    { name: 'ნაჭრის მხარჩანთა', color: '#FEF2D1CB' },
    { name: 'ნაჭრის ზურგჩანთა', color: '#FEF2D1CB' },
  ];

  // Local state for selected type
  const [selectedType, setSelectedType] = useState('');

  // Function to set filter
  const setFilter = (type) => {
    setSelectedType(type);
  };

  return (
    <div className={styles.typefilterwrp}>
      <h6 className={styles.filtertitle}>ჩანთის სახეობა</h6>
      <div className={styles.typeFilterContainer}>
        {types.map((type, index) => (
          <div key={index} className={styles.typeItem}>
            <span className={styles.label}>{type.name}</span>
            <div
              className={`${styles.typeSquare} ${selectedType === type.name ? styles.selected : ''}`}
              style={{ backgroundColor: selectedType === type.name ? '#FDDE8B' : type.color }}
              onClick={() => setFilter(type.name)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TypeFilters;
