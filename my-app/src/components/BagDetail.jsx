import React, {useState} from 'react';
import imgArr from '../style/arr.png';
import styles from '../bagdetailspg.module.css';
import imgOne from '../style/bagdetailsone.png';
import imgTwo from '../style/bagdetailstwo.png';
import imgThree from '../style/bagdetailsthree.png';
import imgFour from '../style/bagdetailsfour.png';
import imgMain from '../style/bagdetailsmain.png';
import imgLeftArrow from '../style/arrowleft.png';
import imgRigtArrow from '../style/arrowright.png';
import imgBagone from '../style/bagone.png';
import imgBagtwo from '../style/bagtwo.png';
import imgBagthree from '../style/bagthree.png';
import imgBagfour from '../style/bagfour.png';
import imgBagfive from '../style/bagfive.png';
import imgBagsix from '../style/bagsix.png';
import imgBagseven from '../style/bagseven.png';
import imgBageight from '../style/bageight.png';
import imgBagnine from '../style/bagnine.png';
import { Link } from 'react-router-dom';

const items = [
    {
      id: 1,
      image: imgBagone,
      title: 'სახელწოდება: ჟირაფი',
      size: "ჩანთის ზომა: 30X32",
      price: "ჩანთის ფასი: ",
      num: "35₾"
    },
    {
      id: 2,
      image: imgBagtwo,
      title: 'სახელწოდება: ფისო',
      size: "ჩანთის ზომა: 30X32",
      price: "ჩანთის ფასი: ",
      num: "35₾"
    },
    {
      id: 3,
      image: imgBagthree,
      title: 'სახელწოდება: SHhhh!',
      size: "ჩანთის ზომა: 30X32",
      price: "ჩანთის ფასი: ",
      num: "35₾"
    },
    {
      id: 4,
      image: imgBagfour,
      title: 'სახელწოდება: სკა',
      size: "ჩანთის ზომა: 30X32",
      price: "ჩანთის ფასი: ",
      num: "35₾"
    },
    {
      id: 5,
      image: imgBagfive,
      title: 'სახელწოდება: ფისუნია',
      size: "ჩანთის ზომა: 30X32",
      price: "ფასდაკლებით: ",
      num: '60₾'
    },
    {
      id: 6,
      image: imgBagsix,
      title: 'სახელწოდება: სპანჯბობი',
      size: "ჩანთის ზომა: 30X32",
      price: "ფასდაკლებით: ",
      num: '60₾'
    },
    {
      id: 7,
      image: imgBagseven,
      title: 'სახელწოდება: რთველი',
      size: "ჩანთის ზომა: 30X32",
      price: "ფასდაკლებით: ",
      num: '60₾'
    },
    {
      id: 8,
      image: imgBageight,
      title: 'სახელწოდება: ეიფელის კოშკი',
      size: "ჩანთის ზომა: 30X32",
      price: "ფასდაკლებით: ",
      num: '60₾'
    },
    {
      id: 9,
      image: imgBagnine,
      title: 'სახელწოდება: ფუტკრები',
      size: "ჩანთის ზომა: 30X32",
      price: "ჩანთის ფასი: ",
      num: "35₾"
    }
  ];
  

  const imgArray = [
      { id: 1, img: imgOne },
      { id: 2, img: imgTwo },
      { id: 3, img: imgThree },
      { id: 4, img: imgFour },
  ];
  
  const infoArray = [
      { id: 1, title: 'სკა და ფუტკრები', price: '35₾' },
      { id: 2, info: 'ჩანთა “სკა და ფუტკრები” შექმნილია: თეთრი ფერის ტილოს ნაჭრის ჩანთაზე. მოხატულია აკვარელებით ყვითელ, მწვანე, ყავისფერ, თეთრ და შავ ტონალობებში' },
      { id: 3, color:'ჩანთის ფერი: თეთრი' , material:'ჩანთის ქსოვილი: ტილო', size:'ჩანთის ზომა: 32X45' },
  ];
  
  const BagDetail = () => {  
      const [startIndex, setStartIndex] = useState(0);

      const showNext = () => {
          const nextIndex = Math.min(startIndex + 4, items.length - 4);
          setStartIndex(nextIndex);
      };
      
      const showPrevious = () => {
          const previousIndex = Math.max(startIndex - 4, 0);
          setStartIndex(previousIndex);
      };
  
      // Calculate the slice of items to display based on the startIndex
      const displayedItems = items.slice(startIndex, startIndex + 4);
      return (
          <div className={styles.bagdetail}>
              <div className={styles.pageorient}>
                  <Link className={styles.madebyuplink} to={'/main'}>მთავარი</Link>
                  <img className={styles.collecsecbtnimg} src={imgArr} alt="img" />
                  <Link className={styles.madebyuplink} to={'/collections'}>ჩანთების კოლექცია</Link>
                  <img className={styles.collecsecbtnimg} src={imgArr} alt="img" />
                  <Link className={styles.madebyuplink} to={'/collections/bagdetail'}>ჩანთა</Link>
              </div>
              <div className={styles.maincontentwrp}>
                  <div className={styles.imgarray}>
                      {imgArray.map(item => (
                          <img key={item.id} src={item.img} alt={item.id} />
                      ))}
                  </div>
                  <div className={styles.imgdetailmainwrp}>
                      <img className={styles.imgdetailmain} src={imgMain} alt="img" />
                  </div>
                  <div>
                      {infoArray.map(item => (
                          <div className={styles.baginfo} key={item.id}>
                              <div className={styles.maintitle}>
                                  <h2 className={styles.maintitleh2}>{item.title}</h2>
                                  <h3 className={styles.maintitleprice}>{item.price}</h3>
                              </div>
                              <p className={styles.mainbaginfo}>{item.info}</p>
                              <div>
                                  <h6 className={styles.mainbaginfoh6}>{item.color}</h6>
                                  <h6 className={styles.mainbaginfoh6}>{item.material}</h6>
                                  <h6 className={styles.mainbaginfoh6}>{item.size}</h6>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
              <div className={styles.baginfotitleall}>
                  <h3 className={styles.baginfoh3}>მსგავსი პროდუქცია</h3>
                  <div className={styles.collecsecbtn}>
                      <p>ყველა</p>
                      <button className={styles.collecbutton} onClick={showPrevious}><img className={styles.collecsecbtnimg} src={imgLeftArrow} alt="img" /></button>
                      <button className={styles.collecbutton} onClick={showNext}><img className={styles.collecsecbtnimg} src={imgRigtArrow} alt="img" /></button>
                  </div>
                  
              </div>
              <div className={styles.flexContainer}>
                {displayedItems.map(item => (
                    <Link to={`/collections/bagdetail/${item.id}`} className={styles.collectionscard} key={item.id}>
                    <img className={styles.itemimages} src={item.image} alt="img" />
                    <div className={styles.cardtexts}>
                        <h3 className={styles.cardtitles}>{item.title}</h3>
                        <h4 className={styles.cardtitles}>{item.size}</h4>
                        <span className={styles.spanstyle}>
                        <h4 className={styles.cardtitles} style={{ color: item.id >= 5 && item.id <= 8 ? '#EB000E' : '' }}>{item.price}</h4>
                        <h4 className={styles.price}>{item.num}</h4>
                        </span>
                    </div>
                    </Link>
                ))}
                </div>
          </div>
      );
  };
  
  export default BagDetail;