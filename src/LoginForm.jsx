import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function LoginForm() {
    return (
        <div className= "header">
            <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <FloatingLabel controlId="floatingUserGrid" label="Correo Electronico">
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <FloatingLabel controlId="floatingPasswordGrid" label="Contraseña">
                        <Form.Control type="password" placeholder="name@example.com" />
                    </FloatingLabel>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Iniciar sesion
                </Button>
            </Form>
        </div>
    )
}