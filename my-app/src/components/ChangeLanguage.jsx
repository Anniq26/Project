import React, { useState } from 'react';
import georgianIcon from '../style/georgia.webp';
import englishIcon from '../style/english.webp';
import styles from '../styles.module.css';

const ChangeLanguage = () => {
  const [language, setLanguage] = useState('');

  const handleChangeLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  return (
    <div className={styles.ChangeLanguage}>
      <p>{language === 'georgian' ? 'ქართული' : 'English'}</p>
      <img
        src={language === 'georgian' ? georgianIcon : englishIcon}
        alt={language === 'georgian' ? 'Georgian' : 'English'}
        onClick={() => handleChangeLanguage(language === 'georgian' ? 'english' : 'georgian')}
      />
      
    </div>
  );
};

export default ChangeLanguage;
