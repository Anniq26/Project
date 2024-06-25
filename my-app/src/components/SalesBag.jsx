import React, { useEffect, useState } from 'react';
import styles from '../mainpgstyles.module.css';
import { Link } from 'react-router-dom';
import imgLeftArrow from '../style/arrow_back_ios.png';
import imgRightArrow from '../style/arrow_forward_ios.png';

const SalesBag = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [startIndex, setStartIndex] = useState(4);

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
        const nextIndex = Math.min(startIndex + 4, data.results.length + 4);
        setStartIndex(nextIndex);
    };

    const showPrevious = () => {
        const previousIndex = Math.max(startIndex - 4, 0);
        setStartIndex(previousIndex);
    };

    const firstFourProducts = data.results.slice(startIndex, startIndex + 4);
    const handleClick = (route) => {
        window.open(route, '_self');
    };


    return (
    <div className={styles.mainpgbags}>
    <div className={styles.flexContainer}>
        {firstFourProducts.map(({ id, name, width, length, description, category, price, image_urls }) => (
            <Link to={`/collections/bagdetail/${id}`}  className={styles.salescard} key={id}>
                <div className={styles.salepercwrp}>
                    <h2  className={styles.saleperc}>-20%</h2> 
                </div> 
                <div className={styles.salesitemimageswrp} >
                    <img className={styles.collitemimages} src={image_urls[0].image} alt="img" />
                </div>
                <div className={styles.salestexts}>
                    <span className={styles.salesspanprice}>
                        <h4 className={styles.salespricenew}>{Math.floor(parseFloat(price))}₾</h4>
                        <h4 className={styles.salespriceold}>75₾</h4>
                    </span>
                </div>
            </Link>
        ))}
    </div>
    <div className={styles.collecsecbtnwrp}>
            <div className={styles.collecsecbtn}>
                <button onClick={() => handleClick('/collections/offers')} className={styles.collectbtnmore}>
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

export default SalesBag;
