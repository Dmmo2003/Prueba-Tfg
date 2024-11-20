import React from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useContext, useState } from "react";
import { UserContext } from "./UserContext";

import { login } from "./api";

export default function LoginForm({ navigate, ...props }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const { loginUser } = useContext(UserContext);

    const handleClick = () => {
        navigate(-1);
    }


    // const handleSubmit = async (event) => {
    //     event.preventDefault();

    //     const credentials = { email, password };
    //     console.log("Enviando credenciales:", credentials);

    //     try {
    //         const response = await login(credentials);
    //         loginUser({ nombre: response.userName, email });

    //         // Guardar el token según la preferencia del usuario
    //         if (rememberMe) {
    //             localStorage.setItem('token', response.token);
    //             console.log('Sesion guardada', response.token);
    //         } else {
    //             sessionStorage.setItem('token', response.token);
    //         }
    //         alert('Login exitoso');
    //         navigate('/'); // Redirige tras el login exitoso
    //     } catch (error) {
    //         alert('Credenciales incorrectas');
    //     }
    // };
    const handleSubmit = async (event) => {
        event.preventDefault();

        const credentials = { email, password };
        console.log("Enviando credenciales:", credentials);

        try {
            const response = await login(credentials);

            loginUser(response.user);

            // Guarda el token de acuerdo con rememberMe
            if (rememberMe) {
                localStorage.setItem('token', response.token);
                console.log('Sesion guardada', response.token, localStorage.getItem('token'));
            } else {
                sessionStorage.setItem('token', response.token);
            }

            alert('Login exitoso');
            navigate('/'); // Redirige tras login exitoso
        } catch (error) {
            alert('Credenciales incorrectas');
        }
    };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const userData = {
    //         nombre: "Juan",
    //         email: email,
    //     };

    //     // Actualiza la sesión con el login
    //     login(userData);
    // }


    return (
        <div className="header">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <FloatingLabel controlId="floatingUserGrid" label="Correo Electronico">
                        <Form.Control
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
                            type="password"
                            placeholder="contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check
                        type="checkbox"
                        label="Recuerdame"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)} />
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