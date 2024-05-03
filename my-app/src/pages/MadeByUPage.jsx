import React from 'react'
import ImageInput from '../components/ImageInput'
import styles from '../madebyustyles.module.css';
import TextInput from '../components/TextInput';
import MBURegForm from '../components/MBURegForm';
import { Link } from 'react-router-dom';
import imgArr from '../style/arr.png';
import imgReg from '../style/app_registration.png';



const MadeByUPage = () => {
  return (
    <div className={styles.madebyu}>
       <div className={styles.pageorient}>
        <Link className={styles.madebyuplink} to={'/main'}>მთავარი</Link>
        <img className={styles.collecsecbtnimg} src={imgArr} alt="img" />
        <Link className={styles.madebyuplink} to={'/madebyu'}>შექმენი შენით</Link>
      </div>
      <div className={styles.inputs}>
      <ImageInput/>
      <TextInput/>
      </div>
      <div className={styles.regrequire}> 
        <p className={styles.registrationneed}>შესაკვეთად გაიარე რეგისტრაცია</p>
        <img className={styles.regicon} src={imgReg} alt="img" />
      </div>
      <MBURegForm/>

    </div>

  )
}

export default MadeByUPage