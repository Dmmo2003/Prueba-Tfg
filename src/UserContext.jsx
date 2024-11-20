import React, { createContext, useContext, useState } from 'react';

// Crea el contexto
export const UserContext = createContext();

// Proveedor del contexto
export function UserProvider({ children }) {
    const [user, setUser] = useState({
        name: '',
        email: '',
        last_name: '',
        last_name2: '',
        country: ''
    });

    // Función para iniciar sesión
    const loginUser = (userData) => {
        setUser(userData);
        console.log("Usuario logueado:", userData);
    };

    // Función para cerrar sesión
    const logoutUser = () => {
        setUser(null);
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');
        console.log("Usuario ha cerrado sesión");
    };

    return (
        <UserContext.Provider value={{ user, loginUser, logoutUser }}>
            {children}
        </UserContext.Provider >
    );
};

// Hook para usar el contexto
export const useUserContext = () => useContext(UserContext);

// import React, { useEffect } from 'react';
// import { useState } from 'react';
// import { createContext } from 'react';

// export const UserContext = createContext({
//     // userSession: {}, // Valor inicial como objeto vacío
//     // updateUserSession: () => {}
// });

// export const UserProvider = ({ children }) => {

//     const [user, setUser] = useState({
//         name: '',
//         email: '',
//         last_name: '',
//         last_name2: '',
//         country: '',

//     });

//     useEffect(() => {
//         const storedUser = JSON.parse(localStorage.getItem('user'));
//         if (storedUser) {
//             setUser(storedUser);
//         }
//     }, []);

//     const login = (userData) => {
//         const newSession = {
//             ...userData,
//         };
//         setUser(newSession);
//         localStorage.setItem('user', JSON.stringify(newSession));
//     };

//     // Función para cerrar sesión
//     const logout = () => {
//         setUser({
//             name: '',
//             email: '',
//             last_name: '',
//             last_name2: '',
//             country: '', nombre: '',
//             email: '',
//         });
//         localStorage.removeItem('user');
//     };

//     const updateUser = (user) => {
//         setUser(user);
//     }

//     return (
//         <UserContext.Provider value={{ user, updateUser, login, logout }}>
//             {children}
//         </UserContext.Provider>
//     );
// };


