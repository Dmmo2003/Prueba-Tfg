import React from "react";
import "./styles/Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
      <p>&copy; 2023 Universidad</p>
      <p>Hecho por Diego Morales Maroto</p>
      <ul>
        <li><a href="#">Acerca de</a></li>
        <li><a href="#">Contacto</a></li>
        <li><a href="#">Política de privacidad</a></li>
      </ul>
    </footer>
    );
}