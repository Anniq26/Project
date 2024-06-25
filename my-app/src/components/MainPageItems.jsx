import React, { useEffect, useState } from 'react';
import styles from '../mainpgstyles.module.css';
import { Link } from 'react-router-dom';
import imgLeftArrow from '../style/arrow_back_ios.png';
import imgRightArrow from '../style/arrow_forward_ios.png';


const MainPageItems = () => {
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

    // Extract the first four products

    const showNext = () => {
        const nextIndex = Math.min(startIndex + 4, data.results.length - 4);
        setStartIndex(nextIndex);
    };

    const showPrevious = () => {
        const previousIndex = Math.max(startIndex - 4, 0);
        setStartIndex(previousIndex);
    };

    const currentProducts = data.results.slice(startIndex, startIndex + 4);
    const handleClick = (route) => {
        window.open(route, '_self');
    };

    return (
    <div className={styles.mainpgbags}>
        <div className={styles.flexContainer}>
            {currentProducts.map(({ id, name, width, length, description, category, price, old_price, image_urls }) => (
                <Link to={`/collections/bagdetail/${id}`} className={styles.collectionscard} key={id}>
                    <span className={styles.spanstyle}>
                        <h4 className={styles.pricecollect}>{Math.floor(parseFloat(price))}₾</h4>
                    </span>
                    <div className={styles.colitemimgwrp}>
                        <img className={styles.collitemimages} src={image_urls[0].image} alt="img" />
                    </div>
                    <div className={styles.collcardtexts}>
                        <h3 className={styles.collcardtitles}>{name}</h3>
                        <h4 className={styles.collsizetitles}>{Math.floor(parseFloat(width))} X {Math.floor(parseFloat(length))}</h4>
                    </div>
                </Link>
            ))}
        </div>
        <div className={styles.collecsecbtnwrp}>
            <div className={styles.collecsecbtn}>
                <button onClick={() => handleClick('/collections')} className={styles.collectbtnmore}>
                    ყველას ნახვა 
                </button>
                <button className={styles.collecbutton} onClick={showPrevious}>
                    <img className={styles.collecsecbtnimg} src={imgLeftArrow} alt="img" />
                </button>
                <button className={styles.collecbutton} onClick={showNext}>
                    <img className={styles.collecsecbtnimg} src={imgRightArrow} alt="img" />
                </button>
            </div>
        </div>
    </div>
    );
};

export default MainPageItems;
