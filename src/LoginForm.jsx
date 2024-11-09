import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useContext, useState } from "react";
import { UserSessionContext } from "./userSessionContext";

export default function LoginForm({ navigate, ...props }) {
    const { login } = useContext(UserSessionContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    const handleSubmit = (event) => {
        event.preventDefault();
        const userData = {
            nombre: "Juan",
            email: email,
        };

        // Actualiza la sesión con el login
        login(userData);
    }

    const handleClick = () => {
        navigate(-1);
    }
    return (
        <div className="header">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <FloatingLabel controlId="floatingUserGrid" label="Correo Electronico">
                        <Form.Control
                            name="email"
                            type="email"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <FloatingLabel controlId="floatingPasswordGrid" label="Contraseña">
                        <Form.Control 
                        name="password" 
                        type="password" 
                        placeholder="name@example.com"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                        />
                    </FloatingLabel>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Iniciar sesion
                </Button>
                <Button variant="primary" onClick={handleClick}>
                    volver
                </Button>
            </Form>
        </div>
    )
}