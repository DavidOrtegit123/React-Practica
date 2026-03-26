
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './views/Login'
import Profile from './views/Profile'
import ResponsiveAppBar from './components/AppBar'

function App() {
  const isLogin = true;


  return (
    <>
     <BrowserRouter>
     {isLogin && <ResponsiveAppBar/> } 
    <Routes>
    
  
      <Route path='/login' element={<Login />} />
      <Route path='/login' element={<Profile />} />


    </Routes>
     </BrowserRouter>
  
    </>
  )
}

export default App
