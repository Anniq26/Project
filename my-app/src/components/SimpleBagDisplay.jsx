import React from 'react';
import styles from '../styles.module.css';
import imgBagone from '../style/bagone.webp';
import imgBagtwo from '../style/bagtwo.webp';
import imgBagthree from '../style/bagthree.webp';

const SimpleBagDisplay = () => {
    const bags = [
        { id: 1, image: imgBagone, title: "მოხატული ჩანთა", secondary_title: '"პატარა პრინცი"' },
        { id: 2, image: imgBagtwo, title: "მოქარგული ჩანთა", secondary_title: '"ყვავილები"' },
        { id: 3, image: imgBagthree, title: "მოქარგული ჩანთა", secondary_title: '"ყვავილები"' },
        { id: 4, image: imgBagone, title: "მოხატული ჩანთა", secondary_title: '"ფუტკრები"' },
        { id: 5, image: imgBagtwo, title: "მოხატული ჩანთა", secondary_title: '"გვირილები"' },
        { id: 6, image: imgBagthree, title: "მოხატული ჩანთა", secondary_title: '"ყვავილები და გოგონა"' },
        { id: 7, image: imgBagone, title: "მოხატული ჩანთა", secondary_title: '"გოგონა და ფისო"' },
        { id: 8, image: imgBagtwo, title: "მოხატული ჩანთა", secondary_title: '"წამიყვანე შენთან ერთად"' }
    ];

    return (
        <div  className={styles.flexContainer}>
            {bags.map(bag => (
                <div className={styles.cardd} key={bag.id}>
                    <img className={styles.itemimages} src={bag.image} alt={bag.title} />
                    <div className={styles.cardtexts}>
                        <h3>{bag.title}</h3>
                        <h4>{bag.secondary_title}</h4>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SimpleBagDisplay;
