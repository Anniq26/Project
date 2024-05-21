import React, { useState } from 'react';
import { Link, } from 'react-router-dom';
import styles from '../collectionspgstyles.module.css';
import CollectionsPageBags from '../components/CollectionsPageBags';
import imgLeftArrow from '../style/arrowleft.png';
import imgRigtArrow from '../style/arrowright.png';
import imgArr from '../style/arr.png';
import imgFilter from '../style/tune.png'
import PriceFilter from '../components/PriceFilter';
import ColorFilters from '../components/ColorFilter';
import TypeFilters from '../components/TypeFilters';
import VisualFilters from '../components/VisualFilters';
import ProductStatusFilter from '../components/ProductStatusFilter';
import ClearFilter from '../components/ClearFilter';

const CollectionsPage = () => {
  const [ setFilters] = useState([]);

  const handleClearFilters = () => {
    setFilters([]);
  };

  return (
    <div>
      <div className={styles.pageorient}>
        <Link className={styles.madebyuplink} to={'/main'}>მთავარი</Link>
        <img className={styles.collecsecbtnimg} src={imgArr} alt="img" />
        <Link className={styles.madebyuplink} to={'/collections'}>ჩანთების კოლექცია</Link>
      </div>

      <div className={styles.collectionspage}>
        <div className={styles.filter}>
          <h5 className={styles.allfilterstitle}>მოძებნე უფრო მარტივად <img src={imgFilter} alt='img'/></h5>
          <PriceFilter/>
          <ColorFilters/>
          <TypeFilters/>
          <VisualFilters/>
          <ProductStatusFilter/>
          <ClearFilter onClick={handleClearFilters} />
        </div>
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
    </div>
  );
}

export default CollectionsPage;
