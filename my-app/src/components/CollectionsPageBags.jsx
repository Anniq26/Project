import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using react-router-dom for navigation
import styles from '../collectionspgstyles.module.css';
import imgLeftArrow from '../style/arrowleft.png';
import imgRightArrow from '../style/arrowright.png';

const CollectionsPageBags = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [startIndex, setStartIndex] = useState(0);

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

    const showNext = () => {
        const nextIndex = Math.min(startIndex + 6, data.results.length - 6);
        setStartIndex(nextIndex);
    };

    const showPrevious = () => {
        const previousIndex = Math.max(startIndex - 6, 0);
        setStartIndex(previousIndex);
    };

    const currentProducts = data.results.slice(startIndex, startIndex + 6);

    return (
        <div>
            <div className={styles.flexContainer}>
                {currentProducts.map(({ id, name, width, length, description, category, price, old_price, image_urls }) => (
                    <Link to={`/collections/bagdetail/${id}`} className={styles.collectionscard} key={id}>
                        <span className={styles.spanstyle}>
                            <h4 className={styles.price}>{Math.floor(parseFloat(price))}₾</h4>
                        </span>
                        <div className={styles.colitemimgwrp}>
                            <img className={styles.itemimages} src={image_urls[0].image} alt="img" />
                        </div>
                        <div className={styles.cardtexts}>
                            <h3 className={styles.cardtitles}>{name}</h3>
                            <h4 className={styles.sizetitles}>ტილო {Math.floor(parseFloat(width))} X {Math.floor(parseFloat(length))}</h4>
                        </div>
                    </Link>
                ))}
            </div>
            <div className={styles.collecsecbtn}>
                <p>ყველა</p>
                <button className={styles.collecbutton} onClick={showPrevious}>
                    <img className={styles.collecsecbtnimg} src={imgLeftArrow} alt="img" />
                </button>
                <button className={styles.collecbutton} onClick={showNext}>
                    <img className={styles.collecsecbtnimg} src={imgRightArrow} alt="img" />
                </button>
            </div>
        </div>
    );
};

export default CollectionsPageBags;
