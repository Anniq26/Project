import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from '../bagdetailspg.module.css';
import imgArr from '../style/arr.png';
import imgLeftArrow from '../style/arrowleft.png';
import imgRigtArrow from '../style/arrowright.png';

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
      <div className={styles.pageorient}>
        <Link className={styles.madebyuplink} to={'/main'}>მთავარი</Link>
        <img className={styles.collecsecbtnimg} src={imgArr} alt="img" />
        <Link className={styles.madebyuplink} to={'/collections'}>ჩანთების კოლექცია</Link>
        <img className={styles.collecsecbtnimg} src={imgArr} alt="img" />
        <Link className={styles.madebyuplink} to={`/collections/bagdetail/${id}`}>ჩანთა</Link>
      </div>
      <div className={styles.maincontentwrp}>
        <div className={styles.imgarray}>
          {bag.image_urls && bag.image_urls.map((image, index) => (
            <img key={index} src={image.image} alt={`img-${index}`} />
          ))}
        </div>
        <div className={styles.imgdetailmainwrp}>
          {bag.image_urls && bag.image_urls[0] && <img className={styles.imgdetailmain} src={bag.image_urls[0].image} alt="img" />}
        </div>
        <div>
          <div className={styles.baginfo}>
            <div className={styles.maintitle}>
              <h2 className={styles.maintitleh2}>{bag.name}</h2>
              <h3 className={styles.maintitleprice}>{bag.price}₾</h3>
            </div>
            {bag.description !== "no description" && (
            <p className={styles.mainbaginfo}>{bag.description}</p>
            )}
            <div>
              {/* <h6 className={styles.mainbaginfoh6}>ფერი: {bag.color}</h6>
              <h6 className={styles.mainbaginfoh6}>მასალა: {bag.material}</h6> */}
              <h6 className={styles.mainbaginfoh6}>ზომა: {bag.width} x {bag.length}</h6>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.baginfotitleall}>
        <h3 className={styles.baginfoh3}>მსგავსი პროდუქცია</h3>
        <div className={styles.collecsecbtn}>
          <p>ყველა</p>
          <button className={styles.collecbutton} onClick={showPrevious}>
            <img className={styles.collecsecbtnimg} src={imgLeftArrow} alt="img" />
          </button>
          <button className={styles.collecbutton} onClick={showNext}>
            <img className={styles.collecsecbtnimg} src={imgRigtArrow} alt="img" />
          </button>
        </div>
      </div>
      <div className={styles.flexContainer}>
      {displayedItems.map(({ id, name, width, length, description, category, price, image_urls }) => (
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
    </div>
  );
};

export default BagDetail;
