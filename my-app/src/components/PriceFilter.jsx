import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import styles from '../pricefilters.module.css';

const priceFilters = [
  { label: 'ფასის მიხედვით', min: 25, text1: '₾-დან', max: 150, text2: '₾ ჩათვლით' },
  { label: 'ფასდაკლების მიხედვით', min: 10, text1: '%-დან', max: 50, text2: '%-ის ჩათვლით' },
];

const PriceFilter = ({ filter, setFilter }) => {
  const { label, min, max, text1, text2 } = filter;
  const [priceRange, setPriceRange] = useState([min, max]);

  const handlePriceChange = (range) => {
    setPriceRange(range);
    // Call the setFilter function to update the filter
    setFilter(range);
  };

  return (
    <div className={styles.sliderwrp}>
      <div className={styles.sliderlabel}>{label}</div>
      <Slider
        min={min}
        max={max}
        defaultValue={priceRange}
        onChange={handlePriceChange}
        range
        className={styles.slider}
        railStyle={{ backgroundColor: '#ddd', height: '1px' }}
        trackStyle={{ backgroundColor: '#051126' }}
        handleStyle={[
          { backgroundColor: '#051126', border: '2px solid #051126' },
          { backgroundColor: '#051126', border: '2px solid #051126' }
        ]}
      />

      <p className={styles.pricefilterrange}> {priceRange[0]}{text1} - {priceRange[1]}{text2}</p>
    </div>
  );
};

const PriceFilters = () => {
  // Function to handle filter changes
  const setFilter = (range) => {
    // Your logic to apply the filter...
    console.log('Applying price filter:', range);
  };

  return (
    <div className={styles.filterstyle}>
      {priceFilters.map((filter, index) => (
        <PriceFilter key={index} filter={filter} setFilter={setFilter} />
      ))}
    </div>
  );
};

export default PriceFilters;
