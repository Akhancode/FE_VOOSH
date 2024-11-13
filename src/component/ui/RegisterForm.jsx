import React, { useState } from 'react';
import { login, register } from '../../api/auth';
import { useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';

function RegisterForm() {
    const [error, setError] = useState(''); // Error state for handling error messages

    const initialFormData = {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    };
    const showError = (message) => {
        setError(message);

        setTimeout(() => {
            setError('');
        }, 10000); 
    };
    const [formData, setFormData] = useState(initialFormData)
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        await register(formData)
        navigate('/');
    };
    const redirectLogin = async (e) => {
        navigate('/login');
    };
    async function handleGoogleRegisterSuccess(tokenResponse) {
        try {
            const accessToken = tokenResponse.access_token;
            const response = await register({
                googleAccessToken: accessToken
            })
            navigate('/')

        } catch (error) {
            showError(error.response.data.message || error.message)
        }
    }
    const registerWithGoogle = useGoogleLogin({ onSuccess: handleGoogleRegisterSuccess });

    return (
        <div className="bg-blue-100 p-8 rounded-lg w-4/5 md:w-2/5 shadow-md border-blue-600  border-2">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Signup</h2>
            <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
                {Object.keys(formData).map((fieldName) => (
                    <div key={fieldName} className="">
                        <input
                            type={fieldName === 'password' || fieldName === 'confirmPassword' ? 'password' : 'text'}
                            id={fieldName}
                            name={fieldName}
                            placeholder={fieldName}
                            className="border border-gray-300 p-2 w-full"
                            value={formData[fieldName]}
                            onChange={handleChange}
                            required
                        />
                    </div>
                ))}

                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded"
                >
                    Signup
                </button>

                {error && (
                    <div className="text-red-500 text-sm mb-4">
                        {error}
                    </div>
                )}
            </form>
            <div className="text-center mt-4">
                <p>Don't have an account? <a href="#" className="text-blue-500" onClick={redirectLogin}>Login</a></p>
                <button onClick={registerWithGoogle} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
                    Signup  with Google
                </button>
            </div>
        </div>
    );
}

export default RegisterForm;