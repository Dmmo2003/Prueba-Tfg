import { useState } from 'react'
import './styles/App.css'
import MainPage from './MainPage'
import { Route, Routes } from 'react-router-dom'
import Header from './Header.jsx';
import LoginForm from './LoginForm.jsx';
import RegisterForm from './RegisterForm.jsx';
import Footer from './Footer.jsx';
import countries from 'country-list';
import { useNavigate } from 'react-router-dom';



function App() {
  const listaPaises = countries.getNames();
  const navigate = useNavigate();


  return (
    <>
      <Header />
      {/* <main> */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginForm navigate={navigate} />} />
        <Route path="/user/register" element={<RegisterForm {...listaPaises} navigate={navigate} />} />
        {/* <Route path="/products/:productId" element={<Producto theproducts={products} />} /> */}
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
      {/* </main> */}
      <Footer />

    </>
  )
}

export default App
