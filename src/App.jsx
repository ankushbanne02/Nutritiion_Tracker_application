import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {BrowserRouter ,Routes, Route} from 'react-router-dom'
import Register from './Componets/Register'
import Login from './Componets/Login'
import NotFound from './Componets/NotFound'
function App() {
  

  return (
    <div>
       <BrowserRouter> 
       
       <Routes>
        <Route path="/" element={<Login></Login>}></Route>
       <Route path="/Register" element={<Register></Register> }>
       </Route>

       <Route path="/Login" element={<Login></Login> } ></Route>
       <Route path="*" element={<NotFound></NotFound>}></Route>
       </Routes>
       
       
       </BrowserRouter>
        
    </div>
  )
}

export default App
