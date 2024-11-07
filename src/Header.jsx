import React from "react";
import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './styles/Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");

    return (
        <>
            <div className="cont">

                <h2>Bienvenido {isLoggedIn ? username : null}</h2>
                <div className="buttons">
                    <Link to="/login">
                        <Button variant="primary" type="submit" >
                            Iniciar sesion
                        </Button>
                    </Link>
                    <Button variant="primary" type="submit">
                        Registrarse
                    </Button>
                </div>

            </div>

        </>
    )
}