import React from 'react'
import imgBagone from '../style/bagone.png';
import imgBagtwo from '../style/bagtwo.png';
import imgBagthree from '../style/bagthree.png';
import imgBagfour from '../style/bagfour.png';
import imgBagfive from '../style/bagfive.png';
import imgBagsix from '../style/bagsix.png';
import imgBagseven from '../style/bagseven.png';
import imgBageight from '../style/bageight.png';
import imgBagnine from '../style/bagnine.png';
import styles from '../styles.module.css';


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
      },
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
      },
      {
        id: 9,
        image: imgBagnine,
        title: 'სახელწოდება: ფუტკრები',
        size: "ჩანთის ზომა: 30X32",
        price: "ჩანთის ფასი: ",
        num: "35₾"
      }       
]






const CollectionsPageBags = () => {
  return (
    <div className={styles.flexContainer}>
      {items.map(item => (
        <div className={styles.collectionscard} key={item.id}>
          <img className={styles.itemimages} src={item.image} alt="img" />
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

export default CollectionsPageBags