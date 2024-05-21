import React, { useState } from 'react';
import styles from '../madebyustyles.module.css';
import imgEdit from '../style/border_color.png';
import imgDel from '../style/delete.png';

const items = [
    { title: 'სასურველი ჩანთის სახეობა' },
    { title: 'სასურველი ჩანთის ფერი' },
    { title: 'სასურველი ჩანთის ზომა' },
    { title: 'სასურველი ჩანთის ნაქარგი' },
    { title: 'სასურველი ჩანთის წარწერა' }
]

const TextInput = () => {
    const [values, setValues] = useState(items.map(() => ''));
    const [setEditingIndex] = useState(-1);

    const handleChange = (e, index) => {
        const newValues = [...values];
        newValues[index] = e.target.value;
        setValues(newValues);
    }

    const handleEditText = (index) => {
        setEditingIndex(index);
    }

    const handleDeleteText = (index) => {
        const newValues = [...values];
        newValues[index] = '';
        setValues(newValues);
    }

   return (
        <div>
            <div className={styles.txtinptwrp}> 
                {items.map((item, index) => (
                    <div key={index} className={styles.text}>
                        <label className={styles.txtlabel} htmlFor={`textInput-${index}`}>
                            <input 
                                className={styles.textinput}
                                type="text" 
                                placeholder={item.title}
                                id={`textInput-${index}`}
                                value={values[index]}
                                onChange={(e) => handleChange(e, index)}
                            />
                        </label>
                        <div className={styles.instrumentstext}>
                            <button onClick={() => handleEditText(index)}><img src={imgEdit} alt="edit" /></button>
                            <button onClick={() => handleDeleteText(index)}><img src={imgDel} alt="delete" /></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TextInput;