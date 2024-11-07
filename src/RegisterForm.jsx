import React from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './styles/RegisterForm.css';

export default function RegisterForm({ navigate, ...props }) {
    const [paises, setPaises] = useState(Object.values(props));

    const handleClick = () => {
        navigate(-1);
    }



    return (
        <div className="register-form-container">
            <h2>Registrate</h2>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control placeholder="Escribe tu nombre" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridApellidos">
                        <Form.Label>Apellidos</Form.Label>
                        <Form.Control placeholder="Escribe tus apellidos" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Escribe tu correo electrónico" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridContrasena">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Contraseña" />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Pais</Form.Label>
                        <Form.Select defaultValue="--Elige tu pais--">
                            <option>--Elige tu pais--</option>
                            {paises.map((pais, index) => <option key={index}>{pais}</option>)}
                        </Form.Select>
                    </Form.Group>

                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <div className="button-container">
                    <Button variant="primary" type="submit" >
                        Registrarme
                    </Button>

                    <Button variant="primary" onClick={handleClick}>
                        volver
                    </Button>
                </div>

            </Form>
        </div>
    )
}