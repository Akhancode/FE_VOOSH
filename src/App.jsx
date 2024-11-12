import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './component/layout/Navbar'
import Login from './pages/Login'
import ProtectedRoute from './component/protected/ProtectedRoute'
import Register from './pages/Register'
import ErrorPage from './pages/ErrorPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<ErrorPage />} /> 
        </Routes>
      </div>
    </Router>
  )
}

export default App
