import React, { useContext } from "react";
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './styles/RegisterForm.css';
import { useUserContext } from "./UserContext";
// import { UserContext } from "./UserContext";
import { register } from './api';


export default function RegisterForm({ navigate, listaPaises }) {
    const [paises, setPaises] = useState(Object.values(listaPaises));
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [pais, setPais] = useState('');
    const [apellido, setApellido] = useState('');
    const [apellido2, setApellido2] = useState('');
    const [passwordRep, setPasswordRep] = useState('');
    const [error, setError] = useState(null); // Para mostrar errores
    // const {user, updateUser} = useContext(UserContext);
    const {loginUser} = useUserContext();


    const handleSubmit = async (event) => {
        event.preventDefault();

        const userData = {
            name: nombre,
            password: password,
            email: email,
            last_name: apellido,
            last_name2: apellido2,
            country: pais
        };

        try {
            const response = await register(userData);
            // alert(response.message);
            console.log("Respuesta del servidor",response);
            if (response) {
                loginUser({
                    name: nombre,
                    email: email,
                    last_name: apellido,
                    last_name2: apellido2,
                    country: pais,
                });
                navigate('/');
            }
        } catch (error) {
            if (error.response?.data?.message) {
                setError(error.response.data.message);
            } else {
                setError('Error desconocido');
            }
        }
    };

    const handleClick = () => {
        navigate(-1);
    }

    useEffect(() => {
        if (password !== passwordRep) {
            setError('Las contraseñas no coinciden');
        } else {
            setError(null);
        }
    }, [passwordRep]);


    return (
        <div className="register-form-container">
            <h2>Registrate</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Escribe tu nombre"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridApellidos">
                        <Form.Label>Primer Apellido</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Escribe tu primer apellido"
                            value={apellido}
                            onChange={(e) => setApellido(e.target.value)} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridApellidos2">
                        <Form.Label>Segundo Apellido</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Escribe tu segundo apellido"
                            value={apellido2}
                            onChange={(e) => setApellido2(e.target.value)} />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Escribe tu correo electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Row>
                    <Form.Group as={Col} controlId="formGridContrasena">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridContrasena2">
                        <Form.Label>Repite tu contraseña</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Repite tu contraseña"
                            value={passwordRep}
                            onChange={(e) => setPasswordRep(e.target.value)}
                        />
                    </Form.Group>
                </Row>
                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Pais</Form.Label>
                    <Form.Select name="pais" value={pais} onChange={(e) => setPais(e.target.value)}>
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