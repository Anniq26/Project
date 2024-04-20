import React from 'react'
import imgBagfive from '../style/bagfive.png';
import imgBagsix from '../style/bagsix.png';
import imgBagseven from '../style/bagseven.png';
import imgBageight from '../style/bageight.png';
import styles from '../styles.module.css';

const items = [
    {
      id: 1,
      image: imgBagfive,
      title: 'სახელწოდება: ფისო',
      size: "ჩანთის ზომა: 45X60",
      price: "ფასდაკლებით: ",
      num:'60₾'
    },
    {
      id: 2,
      image: imgBagsix,
      title: 'სახელწოდება: ფისო',
      size: "ჩანთის ზომა: 45X60",
      price: "ფასდაკლებით: ",
      num:'55₾'
    },
    {
      id: 3,
      image: imgBagseven,
      title: 'სახელწოდება: ფისო',
      size: "ჩანთის ზომა: 45X60",
      price: "ფასდაკლებით: ",
      num:'45₾'
    },
    {
      id: 4,
      image: imgBageight,
      title: 'სახელწოდება: ფისო',
      size: "ჩანთის ზომა: 45X60",
      price: "ფასდაკლებით: ",
      num:'60₾'
    }      
]




export const SalesBag = () => {
  return (
    <div className={styles.flexContainer}>
        {items.map(item => (
            <div className={styles.cardd} key={item.id}>
                <img className={styles.itemimages} src={item.image} alt='img' />
                <div className={styles.cardtexts}>
                    <h3 className={styles.cardtitles}>{item.title}</h3>
                    <h4 className={styles.cardtitles}>{item.size}</h4>
                    <span className={styles.spanstyle}>
                    <h4 className={styles.sale}>{item.price}</h4>
                    <h4 className={styles.price}>{item.num}</h4>
                    </span>
                </div>
            </div>
        ))}
    </div>
  )
}

export default SalesBag