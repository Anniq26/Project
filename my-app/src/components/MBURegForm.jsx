import React, { useState } from 'react';
import styles from '../madebyustyles.module.css';
import imgEdit from '../style/border_color.png';
import imgDel from '../style/delete.png';

const MBURegForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        address: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

    const handleDeleteText = (fieldName) => {
        console.log('Deleting field:', fieldName);
        setFormData({ ...formData, [fieldName]: '' });
    };

    const handleEditText = (index) => {
        // Add your logic for editing a specific field here
    };

    const clearFormFields = () => {
        setFormData({
            fullName: '',
            phoneNumber: '',
            address: ''
        });
    };

    const fields = [
        { name: 'fullName', placeholder: 'სახელი და გვარი' },
        { name: 'phoneNumber', placeholder: 'ტელეფონის ნომერი' },
        { name: 'address', placeholder: 'მისამართი' }
    ];

    return (
        <form onSubmit={handleSubmit} className={styles.txtinptwrp}>
            {fields.map((field, index) => (
                <div key={index} className={styles.regtext}>
                    <label htmlFor={field.name} className={styles.regtxtlabel}>
                        <input
                            className={styles.textinput}
                            type="text"
                            id={field.name}
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleChange}
                            placeholder={field.placeholder}
                            required
                        />
                    </label>
                    <div className={styles.instrumentstext}>
                        <button onClick={() => handleEditText(index)}><img src={imgEdit} alt="edit" /></button>
                        <button onClick={() => handleDeleteText(field.name)}><img src={imgDel} alt="delete" /></button>
                    </div>
                </div>
            ))}
            <button className={styles.more} type="submit" onClick={clearFormFields}>რეგისტრაცია</button>
        </form>
    );
};

export default MBURegForm;
