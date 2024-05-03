import React, { useEffect, useState } from 'react'
import imgBagone from '../style/bagone.png';
import imgBagtwo from '../style/bagtwo.png';
import imgBagthree from '../style/bagthree.png';
import imgBagfour from '../style/bagfour.png';
import styles from '../mainpgstyles.module.css';

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
          title: 'სახელწოდება: ჟირაფი',
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
        }      
]

const MainPageItemscopy = () => {

  return (
    <div className={styles.flexContainer}>
        {items.map(item => (
            <div className={styles.cardd} key={item.id}>
                <img className={styles.itemimages} src={item.image} alt='img' />
                <div className={styles.cardtexts}>
                    <h3 className={styles.cardtitles}>{item.title}</h3>
                    <h4 className={styles.cardtitles}>{item.size}</h4>
                    <span className={styles.spanstyle}>
                      <h4 className={styles.cardtitles}>{item.price}</h4>
                      <h4 className={styles.price}>{item.num}</h4>
                    </span>
                </div>
            </div>
        ))}
    </div>
  )
}

export default MainPageItemscopy