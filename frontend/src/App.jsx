import { useState } from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
//import pages and components
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About'
import Tasks from './pages/Tasks'
import Footer from './components/Footer'
import Login from './pages/Login'
import Signup from './pages/Signup'


function App() {
  const [count, setCount] = useState(0)
  const {user} = useAuthContext()
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <div className="pages">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/tasks' element={user?<Tasks/>:<Navigate to = "/login"/>}/>
        <Route path='/login' element={!user?<Login/>:<Navigate to = "/tasks"/>}/>
        <Route path='/signup' element={!user?<Signup/>:<Navigate to = "/tasks"/>}/>
      </Routes>
      </div>
      
      </BrowserRouter>
    </div>
  )
}

export default App
