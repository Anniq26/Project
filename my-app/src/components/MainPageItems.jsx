import React, { useEffect, useState } from 'react';
import styles from '../mainpgstyles.module.css';
import { Link } from 'react-router-dom';

const MainPageItems = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/bags/products/', {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                if (!response.ok) {
                    throw new Error("response was not ok");
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p className={styles.error}>{error}</p>;
    if (!data || data.results.length === 0) return <p>No data available</p>;

    // Extract the first four products
    const firstFourProducts = data.results.slice(0, 4);

    return (
        <div className={styles.flexContainer}>
            {firstFourProducts.map(({ id, name, width, length, description, category, price, image_urls }) => (
               <Link to={`/collections/bagdetail/${id}`}  className={styles.cardd} key={id}>
                    <span className={styles.spanstyle}>
                        <h4 className={styles.pricetitles}>{Math.floor(parseFloat(price))}₾</h4>
                    </span>
                    <img className={styles.itemimages}  src={image_urls[0].image} alt="img" />
                    <div className={styles.cardtexts}>
                        <h3 className={styles.cardtitles}> {name}</h3>
                        <h4 className={styles.sizetitles}>ტილო{Math.floor(parseFloat(width))}X{Math.floor(parseFloat(length))}</h4>

                    </div>
                </Link>
            ))}
        </div>
    );
};

export default MainPageItems;
