import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PasswordList = () => {
    const [passwords, setPasswords] = useState([]);
    const [appName, setAppName] = useState('');
    const [category, setCategory] = useState('');
    const [password, setPassword] = useState('');
    const [tags, setTags] = useState('');

    useEffect(() => {
        const fetchPasswords = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/passwords/');
                setPasswords(response.data);
            } catch (error) {
                console.error('Error fetching passwords:', error);
            }
        };

        fetchPasswords();
    }, []);

    const addPassword = async (e) => {
        e.preventDefault();
        const newEntry = {
            app_name: appName,
            category: category,
            password: password,
            tags: tags.split(",").map(tag => tag.trim()).join(","),
        };
        
        try {
            const response = await axios.post('http://localhost:8000/api/passwords/', newEntry);
            setPasswords([...passwords, response.data]);
            setAppName('');
            setCategory('');
            setPassword('');
            setTags('');
        } catch (error) {
            console.error('Error adding password:', error);
        }
    };

    return (
        <div className="max-w-lg mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Passwords</h1>
            <ul className="bg-white shadow-md rounded-lg divide-y divide-gray-200">
                {passwords.map((entry) => (
                    <li key={entry.id} className="p-3 flex justify-between items-center hover:bg-gray-100">
                        <span>{entry.app_name} - {entry.category}</span>
                    </li>
                ))}
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">Add Password</h2>
            <form onSubmit={addPassword} className="bg-white shadow-md rounded-lg p-4">
                <input
                    type="text"
                    placeholder="App Name"
                    value={appName}
                    onChange={(e) => setAppName(e.target.value)}
                    required
                    className="border border-gray-300 rounded-md p-2 mb-4 w-full"
                />
                <input
                    type="text"
                    placeholder="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                    className="border border-gray-300 rounded-md p-2 mb-4 w-full"
                />
                <input
                    type="text"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="border border-gray-300 rounded-md p-2 mb-4 w-full"
                />
                <input
                    type="text"
                    placeholder="Tags (comma separated)"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    className="border border-gray-300 rounded-md p-2 mb-4 w-full"
                />
                <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600">
                    Add Password
                </button>
            </form>
        </div>
    );
};

export default PasswordList;
