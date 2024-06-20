import React, { useEffect, useState } from 'react';
import styles from '../collectionspgstyles.module.css';
import { Link } from 'react-router-dom';
import imgCardBorder from '../style/Rectangle 84.png';


const SalesBag = () => {
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

    const firstFourProducts = data.results.slice(4, 7);

    return (
    <div className={styles.salesflexContainer}>
        {firstFourProducts.map(({ id, name, width, length, description, category, price, image_urls }) => (
            <Link to={`/collections/bagdetail/${id}`}  className={styles.salescardwrp} key={id}>
                <div className={styles.salescardwrp2}>
                    <div className={styles.salescard}>
                        <div className={styles.salesitemimageswrp} >
                        <img className={styles.salesitemimages} src={image_urls[0].image} alt="img" />
                        </div>
                        <div className={styles.salestexts}>
                            <h2  className={styles.saleperc}>-30%</h2>  
                            <div className={styles.salestextspt2}>
                                <span className={styles.salesspanprice}>
                                    <h4 className={styles.pricenew}>{Math.floor(parseFloat(price))}₾</h4>
                                    <h4 className={styles.priceold}>115₾</h4>
                                </span>
                                <div className={styles.salescardtexts}>
                                    <h3 className={styles.salessizetitles}> {name}</h3>
                                    <p className={styles.salessizetitles}>{Math.floor(parseFloat(width))}X{Math.floor(parseFloat(length))}</p>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                    <div className={styles.salesimgborderwrp}>
                            <img src={imgCardBorder} alt="img" className={styles.salesimgborder}/>
                    </div>
                </div>
            </Link>
        ))}
    </div>
    );
};

export default SalesBag;
