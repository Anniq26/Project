import React, { useState } from 'react';
import styles from '../collectionspgstyles.module.css';
import CollectionsPageBags from '../components/CollectionsPageBags';
import imgFilter from '../style/tune.png'
import PriceFilter from '../components/PriceFilter';
import ColorFilters from '../components/ColorFilter';
import TypeFilters from '../components/TypeFilters';
import VisualFilters from '../components/VisualFilters';
import ProductStatusFilter from '../components/ProductStatusFilter';
import ClearFilter from '../components/ClearFilter';
import { Link } from 'react-router-dom';


const OffersPage = () => {
  const [ setFilters] = useState([]);

  const handleClearFilters = () => {
    setFilters([]);
  };

  return ( 
      <div className={styles.offerspagewraper}>
        <div className={styles.customDesignSectionswrapper}>
          <div className={styles.customDesignSections}>
              <Link to='/madebyu' className={styles.captionDesign}>
                <h2 className={styles.captionDesigntitle}>შექმენი შენით!</h2> 
              </Link>
              <div className={styles.mbudescribtextwrp}>
                <p className={styles.mbudescribtext}>შექმენი შენი სასურველი დიზაინით ჩანთა, 
                  რომელიც დაკავშირეული იქნება შენს სურვილებთან, 
                  მოგონებებთან და საყვარელ ადმიანებთან. </p>
              </div>
          </div>
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
        </div>
      </div>
    </div>
  );
}

export default OffersPage