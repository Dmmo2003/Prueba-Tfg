import React, { useContext } from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './styles/RegisterForm.css';
import { UserSessionContext } from "./userSessionContext";


export default function RegisterForm({ navigate, listaPaises}) {
    const [paises, setPaises] = useState(Object.values(listaPaises));
    const { userSession, updateUserSession } = useContext(UserSessionContext);
    const [formData, setFormData] = useState({
        nombre: '',
        apellidos: '',
        email: '',
        pais: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    const handleClick = () => {
        navigate(-1);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        updateUserSession(formData);
        console.log("EOOO",userSession);
        // setFormData({
        //     nombre: '',
        //     apellidos: '',
        //     email: '',
        //     pais: '',
        // })
    };



    return (
        <div className="register-form-container">
            <h2>Registrate</h2>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            name="nombre"
                            placeholder="Escribe tu nombre"
                            value={formData.nombre}
                            onChange={handleChange} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridApellidos">
                        <Form.Label>Apellidos</Form.Label>
                        <Form.Control
                            type="text"
                            name="apellidos"
                            placeholder="Escribe tus apellidos"
                            value={formData.apellidos}
                            onChange={handleChange} />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                    type="email"
                    name="email" 
                    placeholder="Escribe tu correo electrónico" 
                    value={formData.email} 
                    onChange={handleChange} />
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
                        <Form.Select name="pais" value={formData.pais} onChange={handleChange}>
                            <option value="">--Elige tu pais--</option>
                            {paises.map((pais, index) => (
                                <option key={index} value={pais}>{pais}</option>
                            ))}
                            {/* {paises
                                .filter((pais) => typeof pais === "string" && pais.trim() !== "") // Filtra valores válidos
                                .map((pais, index) => (
                                    <option key={index} value={pais}>{pais}</option>
                                ))} */}
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
};