// // FilterContainer.js
// import React, { useState } from 'react';
// import ColorFilters from './ColorFilters';
// import PriceFilters from './PriceFilters';
// import ProductStatusFilter from './ProductStatusFilter';
// import TypeFilters from './TypeFilters';
// import VisualFilters from './VisualFilters';
// import ClearFilter from './ClearFilter'; // Import the ClearFilter component

// const FilterContainer = () => {
//   const [ setFilters] = useState([]);

//   const clearFilters = () => {
//     console.log('Clearing filters...');
//     setFilters([]); // Clear the filters
//   };

//   return (
//     <div>
//       {/* Render all filter components */}
//       <ColorFilters />
//       <PriceFilters />
//       <ProductStatusFilter />
//       <TypeFilters />
//       <VisualFilters />
//       {/* Render the ClearFilter component and pass clearFilters as a prop */}
//       <ClearFilter clearFilters={clearFilters} />
//     </div>
//   );
// };

// export default FilterContainer;
