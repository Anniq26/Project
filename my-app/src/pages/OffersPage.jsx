import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
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
import Bagimg from '../style/offerspagebag.png'


const OffersPage = () => {
  const [filters, setFilters] = useState([]);

  const handleClearFilters = () => {
    setFilters([]);
  };

  return ( 
      <div className={styles.offerspagewraper}>
      <div className={styles.pageorient}>
        <Link className={styles.madebyuplink} to={'/main'}>მთავარი</Link>
        <img className={styles.collecsecbtnimg} src={imgArr} alt="img" />
        <Link className={styles.madebyuplink} to={'/collections'}>ჩანთების კოლექცია</Link>
        <img className={styles.collecsecbtnimg} src={imgArr} alt="img" />
        <Link className={styles.madebyuplink} to={'/collections/offers'}>შეთავაზებები</Link>
      </div>
      <div className={styles.mainsectionone}>
          <div className={styles.mainseconep}>
            <h4 className={styles.mainseconeheading}>შეიძინე ერთი ჩანთა და მიიღე მეორეზე 10%-იანი ფასდაკლება!</h4>
            <p className={styles.mainseconeheadingtwo}>იყავი განსაკუთრებული და ატარე განსაკუთრებული ჩანთა, განსაკუთრებული მოგონებებით</p>
          </div>
          <img className={styles.mainseconeimg} src={Bagimg} alt="img" />
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

export default OffersPage