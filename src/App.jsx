import React from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='w-full'>
      <Navbar />
      <Home />
    </div>
  )
}

export default App