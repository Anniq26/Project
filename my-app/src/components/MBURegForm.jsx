import React from 'react';
import styles from '../madebyustyles.module.css';

const MBURegForm = ({ formData, onFormDataChange, entries, setEditIndex }) => {
    return (
        <div>
            <form className={styles.txtinptwrp}>
                <div className={styles.regtext}>
                    <label htmlFor="fullName" className={styles.regtxtlabel}>
                        <input
                            className={styles.textinput}
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={onFormDataChange}
                            placeholder="სახელი და გვარი"
                            required
                        />
                    </label>
                </div>
                <div className={styles.regtext}>
                    <label htmlFor="phoneNumber" className={styles.regtxtlabel}>
                        <input
                            className={styles.textinput}
                            type="text"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={onFormDataChange}
                            placeholder="ტელეფონის ნომერი"
                            required
                        />
                    </label>
                </div>
                <div className={styles.regtext}>
                    <label htmlFor="address" className={styles.regtxtlabel}>
                        <input
                            className={styles.textinput}
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={onFormDataChange}
                            placeholder="მისამართი"
                            required
                        />
                    </label>
                </div>
            </form>
            <div>
                {Array.isArray(entries) && entries.map((entry, index) => (
                    <div key={entry.id} className={styles.regtext}>
                        <span>{entry.fullName}</span>
                        <span>{entry.phoneNumber}</span>
                        <span>{entry.address}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MBURegForm;
