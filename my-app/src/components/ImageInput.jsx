import React, { useState } from 'react';
import imgUpload from '../style/add_a_photo.png';
import styles from '../styles.module.css';


const ImageInput = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <div>
      <div className={styles.imgupload}>
        <label htmlFor="imageUpload" className={styles.mbylabel}>
          <img src={imgUpload} className={styles.addimage}alt="Add a photo" />
          <p>ატვირთე სასურველი ფოტო</p>
        </label>
        <input
          type="file"
          id="imageUpload"
          name="imageUpload"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: 'none' }} 
        />
        {image && <img src={URL.createObjectURL(image)} alt="Selected" />}
      </div>
    </div>
  );
};

export default ImageInput;
