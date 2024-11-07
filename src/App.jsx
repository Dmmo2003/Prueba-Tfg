import { useState } from 'react'
import './App.css'
import MainPage from './MainPage'
import { Route, Routes } from 'react-router-dom'
import  Header  from './Header.jsx';
import LoginForm from './LoginForm.jsx';

function App() {


  return (
    <>
        <Header />
        
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginForm />} />
          {/* <Route path="/products/:productId" element={<Producto theproducts={products} />} /> */}
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Routes>
    </>
  )
}

export default App
