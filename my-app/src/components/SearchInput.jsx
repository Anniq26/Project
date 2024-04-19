import React, { useState } from 'react';
import styles from '../styles.module.css';
import imgSearch from '../style/search.webp'; // Ensure this path matches where your image is stored

const SearchInput = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        // Implement your search logic or a callback here
        alert('Search for: ' + searchTerm);
    };

    return (
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
    );
};

export default SearchInput;
