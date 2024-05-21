import React, { useState, useRef } from 'react';
import imgUpload from '../style/add_a_photo.png';
import styles from '../madebyustyles.module.css';
import imgEdit from '../style/border_color.png';
import imgDel from '../style/delete.png';

const ImageInput = () => {
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleEditClick = () => {
    fileInputRef.current.click(); // Trigger file input click
  };

  const handleDeleteClick = () => {
    setImage(null); // Reset image state to delete the selected image
  };

  return (
    <div>
      <div className={styles.imgupload}>
        <div className={styles.instruments}>
          <button onClick={handleEditClick}><img src={imgEdit} alt="edit" /></button>
          <button onClick={handleDeleteClick}><img src={imgDel} alt="img" /></button>
        </div>
        <div className={styles.stylelabel}>
          <label htmlFor="imageUpload" className={styles.mbylabel}>
            {image ? (
              <img className={styles.selectedimg} src={URL.createObjectURL(image)} alt="Selected" />
            ) : (
              <>
                <img src={imgUpload} className={styles.addimage} alt="img" />
                <p>ატვირთე სასურველი ფოტო</p>
              </>
            )}
          </label>
          <input
            type="file"
            ref={fileInputRef}
            id="imageUpload"
            name="imageUpload"
            accept="image/*"
            onChange={handleImageChange}
            style={{ position: 'absolute', top: 0, left: 0, width: 0, height: 0, opacity: 0 }} 
          />
        </div>
      </div>
    </div>
  );
};

export default ImageInput;
