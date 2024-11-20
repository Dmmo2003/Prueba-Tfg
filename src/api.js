// api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';
const API_URL_AUTH = 'http://localhost:5000/api/auth';

export const register = async (userData) => {
  try {
      const response = await axios.post('http://localhost:5000/api/auth/register', userData);
      return response.data;

  } catch (error) {
      console.error('Error al registrar el usuario:', error);
      throw error;
  }
};


export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL_AUTH}/login`, credentials);
    return response.data;
  } catch (error) {
    console.error('Error al iniciar sesión:', error.response?.data || error.message);
    throw error;
  }
};

export const logout = () => {
  // Elimina el token de ambos lugares
  localStorage.removeItem('token');
  sessionStorage.removeItem('token');
};

// Función para obtener el perfil del usuario
// export const getUserProfile = async (token) => {
//   try {
//     const response = await axios.get(`${API_URL_AUTH}/user/profile`, {
//       headers: { Authorization: `Bearer ${token}` }
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error al obtener el perfil del usuario:', error);
//     throw error;
//   }
// };
export const getUserProfile = async (token) => {
  try {
    const response = await axios.get(`${API_URL_AUTH}/user/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error al obtener el perfil del usuario:', error);
    throw error;
  }
};
