import React, { useState } from 'react';
import { login } from '../../api/auth';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleSubmit =async (e) => {
        e.preventDefault();
        let userData = {email,password}
        await login(userData)
        navigate('/');
    };
    const redirectToRegister =async (e) => {
        e.preventDefault();
        
        navigate('/register');
    };

    return (
        <div className="bg-blue-100 p-8 rounded-lg w-4/5 md:w-2/5 shadow-md border-blue-600  border-2">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="border border-gray-300 p-2 w-full"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="border border-gray-300 p-2 w-full"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded"
                >
                    Login
                </button>
            </form>
            <div className="text-center mt-4">
                <p>Don't have an account? <a href="#" className="text-blue-500" onClick={redirectToRegister}>Signup</a></p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
                    Login with Google
                </button>
            </div>
        </div>
    );
}

export default LoginForm;