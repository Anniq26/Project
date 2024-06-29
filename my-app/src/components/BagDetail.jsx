import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from '../bagdetailspg.module.css';
import imgLeftArrow from '../style/arrow_back_ios.png';
import imgRightArrow from '../style/arrow_forward_ios.png';

const BagDetail = () => {
  const { id } = useParams();
  const [bag, setBag] = useState(null);
  const [bags, setBags] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    fetchBag(id);
    fetchBags();
  }, [id]);

  const fetchBag = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/bags/products/${id}/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch bag');
      }
      const data = await response.json();
      setBag(data); // Assuming the API returns the bag object directly
    } catch (error) {
      console.error('Error fetching bag:', error.message);
    }
  };

  const fetchBags = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/bags/products/', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch bags');
      }
      const data = await response.json();
      setBags(data.results); // Assuming the API returns an array of bag objects
    } catch (error) {
      console.error('Error fetching bags:', error.message);
    }
  };

  const showNext = () => {
    const nextIndex = Math.min(startIndex + 4, bags.length - 4);
    setStartIndex(nextIndex);
  };

  const showPrevious = () => {
    const previousIndex = Math.max(startIndex - 4, 0);
    setStartIndex(previousIndex);
  };

  // Calculate the slice of items to display based on the startIndex
  const displayedItems = bags.slice(startIndex, startIndex + 4);

  if (!bag) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.bagdetail}>
      <div className={styles.bagdetailpgwrapper}>
      <div className={styles.maincontentwrp}>

        <div className={styles.imgarray}>
          {bag.image_urls && bag.image_urls.map((image, index) => (
            <div className={styles.arryitemwrapper}>
              <img className={styles.imgarryitem} key={index} src={image.image} alt={`img-${index}`} />
            </div>
          ))}
        </div>
        <div className={styles.imgdetailmainwrp}>
          {bag.image_urls && bag.image_urls[0] && 
            <img className={styles.imgdetailmain} src={bag.image_urls[0].image} alt="img" />
          }
        </div>

        <div>
          <div className={styles.baginfo}>
            <div className={styles.maintitle}>
              <h2 className={styles.maintitleh2}>{bag.name}</h2>
              <h3 className={styles.maintitleprice}>{Math.floor(parseFloat(bag.price))}₾</h3>
            </div>
            {bag.description !== "no description" && (
            <p className={styles.mainbaginfo}>{bag.description}</p>
            )}
            
            <div>
              <h6 className={styles.mainbaginfoh6}> ჩანთის ზომა: {Math.floor(parseFloat(bag.width))} x {Math.floor(parseFloat(bag.length))}</h6>
            </div>
          </div>
        </div>

      </div>

    <div>
      <div className={styles.secondtitlewrp}>
        <h2 className={styles.secondtitle}>რჩევები შენთვის</h2>
      </div>
      <div className={styles.flexContainer}>
        {displayedItems.map(({ id, name, width, length, description, category, price, image_urls }) => (
          <Link to={`/collections/bagdetail/${id}`}  className={styles.collectionscard} key={id}>
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
          <button className={styles.collectbtnmore} onClick={showPrevious}>
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


  </div>
    </div>
  );
};

export default BagDetail;
