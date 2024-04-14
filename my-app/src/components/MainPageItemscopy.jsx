import React, { useEffect, useState } from 'react'
import imgBagone from '../style/bagone.webp';
import imgBagtwo from '../style/bagtwo.webp';
import imgBagthree from '../style/bagthree.webp';
import styles from '../styles.module.css';

const items = [
        {
          id: 1,
          image: imgBagone,
          title: "მოხატული ჩანთა",
          secondary_title: '"პატარა პრინცი"',
          size: "27x30 სმ",
          price: "30 ₾"
        },
        {
          id: 2,
          image: imgBagtwo,
          title: "მოქარგული ჩანთა",
          secondary_title: '"ყვავილები"',
          size: "27x30 სმ",
          price: "35 ₾"
        },
        {
            id: 3,
            image: imgBagthree,
            title: "მოქარგული ჩანთა",
            secondary_title: '"ყვავილები"',
            size: "34x35 სმ",
            price: "35 ₾"
          }
]
const MainPageItemscopy = () => {

  return (
    <div className={styles.sectwoitems}>
        {items.map(item => (
            <div className={styles.card} key={item.id}>
                <img className={styles.itemimage} src={item.image} alt='img' />
                <div className={styles.cardtext}>
                    <h3>{item.title}</h3>
                    <h4>{item.secondary_title}</h4>
                    <p className={styles.itemsize}>{item.size}</p>
                    <p className={styles.itemprice}>{item.price}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default MainPageItemscopy