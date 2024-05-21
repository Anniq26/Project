import React from 'react'
import imgMessages from '../style/messenger.png';
import styles from '../styles.module.css';


const Messages = () => {

  return (
    <div className={styles.messagescont}>
        <img className={styles.messages} src={imgMessages} alt="img" />
    </div>
  )
}

export default Messages
