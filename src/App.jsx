import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './component/layout/Navbar'
import Test from './component/ui/Board'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
