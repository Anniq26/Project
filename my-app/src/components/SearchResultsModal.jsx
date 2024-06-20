import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../headerfooterpgstyles.module.css';

const SearchResultModal = ({ results, onClose, searchTerm }) => {
  // Filter results where the first three letters of the name match the search term
  const filteredResults = results.filter(result => result.name.slice(0, 3).toLowerCase() === searchTerm.slice(0, 3).toLowerCase());

  const handleCloseModal = () => {
    onClose();
  };

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <div className={styles.modalclosebtnwrp}>
        <button onClick={onClose} className={styles.modalCloseButton}>
          &times;
        </button>
        </div>
        <div className={styles.modalBody}>
          {filteredResults.length > 0 ? (
            filteredResults.map((result) => (
              <Link 
                to={`/collections/bagdetail/${result.id}`}
                key={result.id}
                className={styles.modalwrp}
                onClick={handleCloseModal} 
              >
                <img src={result.image_urls[0].image} alt={result.name} className={styles.modalImage} />
                <p className={styles.modalText}>{result.name}</p>
              </Link>
            ))
          ) : (
            <p className={styles.modalText}>პროდუქტი არ მოიძებნა</p>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default SearchResultModal;
