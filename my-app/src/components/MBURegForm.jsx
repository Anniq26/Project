import React, { useState, useEffect } from 'react';
import styles from '../madebyustyles.module.css';
import imgEdit from '../style/border_color.png';
import imgDel from '../style/delete.png';
import { createEntry, readEntries, updateEntry, deleteEntry } from '../api';
import { useNavigate } from 'react-router-dom'; 
const MBURegForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        address: ''
    });
    const [entries, setEntries] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const navigate = useNavigate(); // Initialize navigate
    useEffect(() => {
        fetchEntries();
    }, []);

    const fetchEntries = async () => {
        try {
            const data = await readEntries();
            if (Array.isArray(data)) {
                setEntries(data);
            } else {
                console.error('API response is not an array:', data);
            }
        } catch (error) {
            console.error('Failed to fetch entries:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editIndex !== null) {
                await updateEntry(entries[editIndex].id, formData);
            } else {
                await createEntry(formData);
            }
            setFormData({ fullName: '', phoneNumber: '', address: '' });
            setEditIndex(null);
            fetchEntries();
            navigate('/registered'); // Navigate to /registered route
        } catch (error) {
            console.error('Failed to submit form:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteEntry(id);
            fetchEntries();
        } catch (error) {
            console.error('Failed to delete entry:', error);
        }
    };

    const handleEdit = (index) => {
        setEditIndex(index);
        setFormData(entries[index]);
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className={styles.txtinptwrp}>
                <div className={styles.regtext}>
                    <label htmlFor="fullName" className={styles.regtxtlabel}>
                        <input
                            className={styles.textinput}
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
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
                            onChange={handleChange}
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
                            onChange={handleChange}
                            placeholder="მისამართი"
                            required
                        />
                    </label>
                </div>
                <button className={styles.more} type="submit">
                    {editIndex !== null ? 'განახლება' : 'რეგისტრაცია'}
                </button>
            </form>
            <div>
                {Array.isArray(entries) && entries.map((entry, index) => (
                    <div key={entry.id} className={styles.regtext}>
                        <span>{entry.fullName}</span>
                        <span>{entry.phoneNumber}</span>
                        <span>{entry.address}</span>
                        <div className={styles.instrumentstext}>
                            <button onClick={() => handleEdit(index)}>
                                <img src={imgEdit} alt="edit" />
                            </button>
                            <button onClick={() => handleDelete(entry.id)}>
                                <img src={imgDel} alt="delete" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MBURegForm;
