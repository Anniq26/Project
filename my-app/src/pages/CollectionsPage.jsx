import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from '../styles.module.css';
import CollectionsPageBags from '../components/CollectionsPageBags';
import imgLeftArrow from '../style/arrowleft.png';
import imgRigtArrow from '../style/arrowright.png';


const CollectionsPage = () => {
 
  return (
    <div className={styles.collectionspage}>
      <div className={styles.collectionssecone}>
        <div className={styles.collectionsbags}>
          <CollectionsPageBags/>
        </div>
        <div className={styles.collecsecbtn}>
          <p>ყველა</p>
          <button className={styles.collecbutton}><img  className={styles.collecsecbtnimg} src={imgLeftArrow} alt="img" /></button>
          <button className={styles.collecbutton}><img  className={styles.collecsecbtnimg} src={imgRigtArrow} alt="img" /></button>
        </div>
      </div>
    </div>
  );
}

export default CollectionsPage;
