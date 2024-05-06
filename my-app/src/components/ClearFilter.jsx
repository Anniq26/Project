
import React from 'react';
import styles from '../collectionspgstyles.module.css';

const ClearFilter = ({ onClick }) => {
  return (
    <button className={styles.clearFilter} onClick={onClick}>
      <p className={styles.clearfilterP}>ფილტრის გაუქმება</p>
    </button>
  );
};

export default ClearFilter;
