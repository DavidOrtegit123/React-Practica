import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './views/Login'
import Profile from './views/Profile'
import ResponsiveAppBar from './components/AppBar'
import { useState } from 'react'

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <BrowserRouter>

      {isLogin && <ResponsiveAppBar />}

      <Routes>

        <Route path='/login' element={<Login setIsLogin={setIsLogin} />} />

        <Route 
          path='/profile' 
          element={isLogin ? <Profile /> : <Navigate to="/login" />} 
        />
        <Route path='*' element={<Navigate to="/login" />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App