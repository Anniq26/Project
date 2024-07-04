import React, { useState, useEffect } from 'react';
import ImageInput from '../components/ImageInput';
import MBURegForm from '../components/MBURegForm';
import styles from '../madebyustyles.module.css';
import { createEntry, readEntries, updateEntry } from '../api';
import { useNavigate } from 'react-router-dom';

const MadeByUPage = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        address: '',
        image: null,
    });
    const [entries, setEntries] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const navigate = useNavigate();

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

    const handleFormDataChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (file) => {
        setFormData({ ...formData, image: file });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('fullName', formData.fullName);
        data.append('phoneNumber', formData.phoneNumber);
        data.append('address', formData.address);
        if (formData.image) {
            data.append('image', formData.image);
        }

        try {
            if (editIndex !== null) {
                await updateEntry(entries[editIndex].id, data);
            } else {
                await createEntry(data);
            }
            setFormData({ fullName: '', phoneNumber: '', address: '', image: null });
            setEditIndex(null);
            fetchEntries();
            navigate('/registered');
        } catch (error) {
            console.error('Failed to submit form:', error);
        }
    };

    return (
        <div className={styles.madebyu}>
            <div className={styles.inputs}>
                <ImageInput onImageChange={handleImageChange} />
                <MBURegForm formData={formData} onFormDataChange={handleFormDataChange} entries={entries} setEditIndex={setEditIndex} />
            </div>
            <div className={styles.mbubtnwrp}>
                <button className={styles.mbubutton} onClick={handleSubmit}>
                    {editIndex !== null ? 'განახლება' : 'გაგზავნა'}
                </button>
            </div>
        </div>
    );
};

export default MadeByUPage;
