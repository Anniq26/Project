import React from 'react'
import { Link } from "react-router-dom";
import imgLogo from '../style/Logo.png';
import SearchInput from '../components/SearchInput'; 
import styles from '../headerpgstyles.module.css';
import HeaderLinks from './HeaderLinks';
import imgPhotoSearch from '../style/photo_camera.png';
import imgFav from '../style/favoriteblack.png';

const Header = () => {
  return (
    <div className={styles.headercontainer}> 
        <div className={styles.headerwrappr}>
            <div className={styles.header}>
              <div className={styles.logowrapper}>
                <Link to="/main" className={styles.logoStyle}>
                <img src={imgLogo} alt="ლოგო" className={styles.logoStyle} />
                </Link>
              </div>
              <div className={styles.searhbuttoncontainer}>
                <div className={styles.searchwrp}>
                  <SearchInput />
                  <img className={styles.searchimages} src={imgPhotoSearch} alt="img" />
                  <img className={styles.searchimages} src={imgFav} alt="img" />
                </div>
              </div>
            </div>
            <HeaderLinks />
        </div>
    </div>
  )
}

export default Header