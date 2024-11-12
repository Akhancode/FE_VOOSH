import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    // Check if access token exists in localStorage
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
        // Redirect to login page if no access token
        return <Navigate to="/login" replace />;
    }

    // Render the protected component if access token exists
    return children;
};

export default ProtectedRoute;
