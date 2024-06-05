
const API_URL = 'http://127.0.0.1:8000/bags/products';

export const createEntry = async (data) => {
    const response = await fetch(`${API_URL}/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
};

export const readEntries = async () => {
    const response = await fetch(`${API_URL}/`);
    return response.json();
};

export const updateEntry = async (id, data) => {
    const response = await fetch(`${API_URL}/${id}/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
};

export const deleteEntry = async (id) => {
    const response = await fetch(`${API_URL}/${id}/`, {
        method: 'DELETE'
    });
    return response.json();
};
