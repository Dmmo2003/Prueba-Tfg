import { useState } from 'react'
import './styles/App.css'
import MainPage from './MainPage'
import { Route, Routes } from 'react-router-dom'
import Header from './Header.jsx';
import LoginForm from './LoginForm.jsx';
import RegisterForm from './RegisterForm.jsx';
import Footer from './footer.jsx';
import countries from 'country-list';
import { useNavigate } from 'react-router-dom';



function App() {
  const listaPaises = countries.getNames();
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [sesionIniciada, setSesionIniciada] = useState(false);

  console.log(user);


  return (
    <>
      <Header user={user} setUser={setUser} navigate={navigate} sesionIniciada={sesionIniciada} setSesionIniciada={setSesionIniciada}/>
      {/* <main> */}
      <Routes>
        <Route path="/" element={<MainPage navigate={navigate} user={user} />} />
        <Route path="/login" element={<LoginForm navigate={navigate} setUser={setUser} />} />
        <Route path="/user/register" element={<RegisterForm listaPaises={listaPaises} navigate={navigate} setUser={setUser} />} />
        {/* <Route path="/products/:productId" element={<Producto theproducts={products} />} /> */}
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
      {/* </main> */}
      <Footer />

    </>
  )
}

export default App
