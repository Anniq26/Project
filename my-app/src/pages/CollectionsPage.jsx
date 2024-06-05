import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../collectionspgstyles.module.css';
import CollectionsPageBags from '../components/CollectionsPageBags';
import imgLeftArrow from '../style/arrowleft.png';
import imgRigtArrow from '../style/arrowright.png';
import imgArr from '../style/arr.png';
import imgFilter from '../style/tune.png';
import PriceFilter from '../components/PriceFilter';
import ColorFilters from '../components/ColorFilter';
import TypeFilters from '../components/TypeFilters';
import VisualFilters from '../components/VisualFilters';
import ProductStatusFilter from '../components/ProductStatusFilter';
import ClearFilter from '../components/ClearFilter';

const CollectionsPage = () => {
  const [priceRange, setPriceRange] = useState([0, Infinity]); // State for price range
  const [colorFilters, setColorFilters] = useState([]); // State for color filters
  const [typeFilters, setTypeFilters] = useState([]); // State for type filters
  const [visualFilters, setVisualFilters] = useState([]); // State for visual filters
  const [productStatus, setProductStatus] = useState(null); // State for product status

  // Function to handle price range changes
  const handlePriceRangeChange = (range) => {
    console.log('Selected price range:', range);
    setPriceRange(range);
  };

  // Function to handle color filter changes
  const handleColorFilterChange = (filters) => {
    console.log('Selected color filters:', filters);
    setColorFilters(filters);
  };

  // Function to handle type filter changes
  const handleTypeFilterChange = (filters) => {
    console.log('Selected type filters:', filters);
    setTypeFilters(filters);
  };

  // Function to handle visual filter changes
  const handleVisualFilterChange = (filters) => {
    console.log('Selected visual filters:', filters);
    setVisualFilters(filters);
  };

  // Function to handle product status filter change
  const handleProductStatusChange = (status) => {
    console.log('Selected product status:', status);
    setProductStatus(status);
  };

  // Function to clear all filters
  const clearFilters = () => {
    console.log('Clearing all filters...');
    setPriceRange([0, Infinity]);
    setColorFilters([]);
    setTypeFilters([]);
    setVisualFilters([]);
    setProductStatus(null);
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
          <PriceFilter setFilter={handlePriceRangeChange} />
          <ColorFilters setFilter={handleColorFilterChange} />
          <TypeFilters setFilter={handleTypeFilterChange} />
          <VisualFilters setFilter={handleVisualFilterChange} />
          <ProductStatusFilter setFilter={handleProductStatusChange} />
          <ClearFilter onClick={clearFilters} />
        </div>
        <div className={styles.collectionssecone}>
          <div className={styles.collectionsbags}>
            <CollectionsPageBags 
              priceRange={priceRange} 
              colorFilters={colorFilters} 
              typeFilters={typeFilters} 
              visualFilters={visualFilters} 
              productStatus={productStatus} 
            />
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
