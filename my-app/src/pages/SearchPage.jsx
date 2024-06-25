import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const SearchPage = () => {
  const location = useLocation();
  const searchResults = location.state?.searchResults || [];
  const searchTerm = location.state?.searchTerm || '';

  const filteredResults = searchResults.filter(result =>
    result.name.slice(0, 3).toLowerCase() === searchTerm.slice(0, 3).toLowerCase()
  );

  return (
    <div>
      <h1>Search Results</h1>
      {filteredResults.length > 0 ? (
        <ul>
          {filteredResults.map((result, index) => (
            <Link 
              key={index} 
              to={`/collections/bagdetail/${result.id}`}>
                <h4 >{Math.floor(parseFloat(result.price))}₾</h4>
                <img src={result.image_urls[0].image} alt={result.name} />
                <h4 >ტილო{Math.floor(parseFloat(result.width))}X{Math.floor(parseFloat(result.length))}</h4>                                   
                <h3>{result.name}</h3>
            </Link>
          ))}
        </ul>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default SearchPage;
