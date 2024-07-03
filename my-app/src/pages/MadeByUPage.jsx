import React from 'react'
import ImageInput from '../components/ImageInput'
import styles from '../madebyustyles.module.css';
import MBURegForm from '../components/MBURegForm';



const MadeByUPage = () => {
  return (
    <div className={styles.madebyu}>
      <div className={styles.inputs}>
      <ImageInput/>
      </div>
      <MBURegForm/>
    </div>

  )
}

export default MadeByUPage