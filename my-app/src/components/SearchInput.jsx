import React, { useState } from 'react';
import styles from '../headerfooterpgstyles.module.css';
import imgSearch from '../style/search.webp';
import SearchResultModal from './SearchResultsModal';

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

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
      setSearchResults(data.results);
      setModalOpen(true);
    } catch (error) {
      console.error('Error searching:', error.message);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <form onSubmit={handleSearchSubmit} className={styles.searchForm}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="შეიყვანეთ საძიებო სიტყვა"
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchButton}>
          <img src={imgSearch} alt="Search" className={styles.searchIcon} />
        </button>
      </form>
      {modalOpen && (
        <SearchResultModal results={searchResults} onClose={closeModal} searchTerm={searchTerm} />
      )}
    </div>
  );
};

export default SearchInput;
