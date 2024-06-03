import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using react-router-dom for navigation
import styles from '../collectionspgstyles.module.css';

const CollectionsPageBags = () => {
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

    return (
        <div className={styles.flexContainer}>
            {data.results.map(({ id, name, width, length, description, category, price, image_urls }) => (
                <Link to={`/collections/bagdetail/${id}`} className={styles.collectionscard} key={id}>
                    <img className={styles.itemimages} src={image_urls[0].image} alt="img" />
                    <div className={styles.cardtexts}>
                        <h3 className={styles.cardtitles}>სახელწოდება: {name}</h3>
                        <h4 className={styles.cardtitles}>ჩანთის ზომა: {width} x {length}</h4>
                        <span className={styles.spanstyle}>
                            <h4 className={styles.price}  style={{ color: id >= 7 && id <= 10 ? '#EB000E' : '' }}>{id >= 6 && id <= 10 ? 'ფასდაკლებით:' : 'ჩანთის ფასი:'}</h4>
                            <h4 className={styles.cardtitles} style={{ color: id >= 7 && id <= 10 ? '#EB000E' : '' }}>{Math.floor(parseFloat(price))}₾</h4>
                        </span>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default CollectionsPageBags;
