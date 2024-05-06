import React, { useState } from 'react';
import georgianIcon from '../style/georgia.webp';
import englishIcon from '../style/english.webp';
import arrowIcon from '../style/down (1).png';
import styles from '../headerfooterpgstyles.module.css';

const ChangeLanguage = () => {
  const [language, setLanguage] = useState('georgian'); 
  const [showOptions, setShowOptions] = useState(false); 

  const handleChangeLanguage = (selectedLanguage) => {
    if (selectedLanguage === language) {
      if (!showOptions) {
        setShowOptions(true);
      }
    } else {
      setLanguage(selectedLanguage); 
      setShowOptions(false); 
    }
  };

  const toggleOptions = () => {
    setShowOptions(!showOptions); 
  };

  return (
    <div className={styles.ChangeLanguage} style={{ position: 'relative' }}>
      <img
        src={language === 'georgian' ? georgianIcon : englishIcon}
        alt={language === 'georgian' ? 'Georgian' : 'English'}
      />
      <div className={styles.languageContainer}>
        <p className={styles.changelanguagetxt} onClick={() => handleChangeLanguage(language)}>
          {language === 'georgian' ? 'ქართული' : 'English'}
        </p>
        {showOptions && (
          <div className={styles.languageOptions}>
            {language === 'georgian' ? (
              <p onClick={() => handleChangeLanguage('english')}>English</p>
            ) : (
              <p onClick={() => handleChangeLanguage('georgian')}>ქართული</p>
            )}
          </div>
        )}
      </div>
      <img
        src={arrowIcon}
        alt="Arrow"
        className={styles.imgarrowdown}
        onClick={toggleOptions}
      />
    </div>
  );
};

export default ChangeLanguage;
