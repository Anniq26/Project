import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../headerpgstyles.module.css';
import imgSearch from '../style/search.webp';

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://127.0.0.1:8000/bags/products/?search=${encodeURIComponent(searchTerm)}`);
      if (!response.ok) {
        throw new Error('Failed to fetch search results');
      }
      const data = await response.json();
      navigate('/search', { state: { searchResults: data.results, searchTerm } });
      setSearchTerm(''); // Clear the input field
    } catch (error) {
      console.error('Error searching:', error.message);
    }
  };

  return (
    <div className={styles.searchContainer}>
      <form onSubmit={handleSearchSubmit} className={styles.searchForm}>
        <button type="submit" className={styles.searchButton}>
          <img src={imgSearch} alt="Search" className={styles.searchIcon} />
        </button>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="რას ეძებ?"
          className={styles.searchInput}
        />
      </form>
    </div>
  );
};

export default SearchInput;
