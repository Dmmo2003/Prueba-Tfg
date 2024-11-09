import React, { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const UserSessionContext = createContext({
  // userSession: {}, // Valor inicial como objeto vacío
  // updateUserSession: () => {}
});

export const UserSessionProvider = ({ children }) => {

  const [userSession, setUserSession] = useState({
    logged: false,
    nombre: '',
    apellidos: '',
    email: '',
    pais: '',

});

useEffect(() => {
  const storedUserSession = JSON.parse(localStorage.getItem('userSession'));
  if (storedUserSession) {
      setUserSession(storedUserSession);
  }
}, []);

const login = (userData) => {
  const newSession = {
      ...userData,
      logged: true
  };
  setUserSession(newSession);
  localStorage.setItem('userSession', JSON.stringify(newSession));
};

// Función para cerrar sesión
 const logout = () => {
  setUserSession({
      logged: false,
      nombre: '',
      email: ''
  });
  localStorage.removeItem('userSession');
};

const updateUserSession = (userSession) => {
    setUserSession(userSession);
  }
  
  return (
    <UserSessionContext.Provider value={{ userSession, updateUserSession, login, logout }}>
      {children}
    </UserSessionContext.Provider>
  );
};


