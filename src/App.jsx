import React from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'
import Converter from './components/Converter.jsx'
import Login from './Login.jsx'
import Register from "./Register.jsx"
function App() {
 

  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    style={{backgroundImage: `url(https://images.pexels.com/photos/4497591/pexels-photo-4497591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`}}
    >
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Converter' element={<Converter/>}/>
        <Route path='/' element={<Register/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
