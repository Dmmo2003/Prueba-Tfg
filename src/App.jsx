import { useState } from 'react'
import './App.css'
import MainPage from './MainPage'
import { Route, Routes } from 'react-router-dom'
import Header from './Header'

function App() {


  return (
    <>
        <Header />
        
        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* <Route path="/products/:productId" element={<Producto theproducts={products} />} /> */}
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Routes>
    </>
  )
}

export default App
