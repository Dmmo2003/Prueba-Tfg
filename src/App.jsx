import { useState, useEffect } from 'react'
import './styles/App.css'
import MainPage from './MainPage'
import { Route, Routes } from 'react-router-dom'
import Header from './Header.jsx';
import LoginForm from './LoginForm.jsx';
import RegisterForm from './RegisterForm.jsx';
import Footer from './footer.jsx';
import countries from 'country-list';
import { useNavigate } from 'react-router-dom';
import { UserProvider } from './UserContext';
import PrivateRoute from './PrivateRoute,.jsx';
import { getUserProfile } from './api';


function App() {
  const listaPaises = countries.getNames();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token !== null) {
      getUserProfile(token)
        .then((response) => {
          // Verifica si el token es válido y el usuario existe
          if (response.data) {
            user.login(response.data);
          } else {
            // Maneja el caso en que el token no sea válido o el usuario no exista
            console.error('Token no válido o usuario no encontrado');
          }
        })
        .catch((error) => {
          console.error('Error al verificar el token:', error);
        });
    }
  }, []);

  return (
    <>
      <Header navigate={navigate} />
      <Routes>

        {/* Rutas públicas */}
        <Route path="/" element={<MainPage navigate={navigate} />} />
        <Route path="/login" element={<LoginForm navigate={navigate} />} />
        <Route path="/user/register" element={<RegisterForm listaPaises={listaPaises} navigate={navigate} />} />
        {/* <Route path="/products/:productId" element={<Producto theproducts={products} />} /> */}
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
      {/* </main> */}
      <Footer />

    </>
  )
}
{/* Rutas protegidas */ }
{/* <Route
          path="/"
          element={
            <PrivateRoute>
              <MainPage navigate={navigate} user={user} />
            </PrivateRoute>
          }
        /> */}
export default App
