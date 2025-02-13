import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import Details from './pages/Details'
import Login from './pages/login'
import Register from './pages/register'
import Products from './pages/Products'
import Cart from './pages/Cart'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element ={<MainLayout><Home></Home></MainLayout>} >
        </Route>
        <Route path='/about' element ={<MainLayout><About></About></MainLayout>} >
        </Route>
        <Route path='/products' element ={<MainLayout><Products></Products></MainLayout>} >
        </Route>
        <Route path='/products/:id' element ={<MainLayout><Details></Details></MainLayout>} >
        </Route>
        <Route path='/cart' element ={<MainLayout><Cart></Cart></MainLayout>} >
        </Route>
        <Route path='/login' element ={<Login></Login>}></Route>
        <Route path='/register' element ={<Register></Register>}></Route>
      </Routes>
    </div>
  )
}

export default App
