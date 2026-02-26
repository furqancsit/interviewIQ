import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className='min-h-screen w-full flex flex-col'>
      <Router>
        <Navbar />
        <main className='flex-1'>

          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </main>

        <Footer />
      </Router>
    </div>
  )
}

export default App