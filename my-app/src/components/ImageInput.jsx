import React, { useState, useRef } from 'react';
import imgUpload from '../style/add_a_photo.png';
import styles from '../madebyustyles.module.css';

const ImageInput = ({ onImageChange }) => {
    const [image, setImage] = useState(null);
    const fileInputRef = useRef(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        onImageChange(file); // Pass the selected file back to the parent component
    };

    return (
        <div>
            <div className={styles.imgupload}>
                <label htmlFor="imageUpload" className={styles.mbylabel}>
                    {image ? (
                        <img className={styles.selectedimg} src={URL.createObjectURL(image)} alt="Selected" />
                    ) : (
                        <>
                            <img src={imgUpload} className={styles.addimage} alt="img" />
                            <p className={styles.imageinputtext}>ატვირთე სასურველი ფოტო</p>
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
    );
};

export default ImageInput;
