import React from "react";
import { useContext } from "react";
import Button from 'react-bootstrap/Button';
import './styles/Header.css';
import { Link } from 'react-router-dom';
import { UserContext } from "./UserContext";
import { logout } from "./api";



export default function Header({ navigate }) {
    const { user, logoutUser } = useContext(UserContext);
    const handlleCerrarSesion = () => {
        logout();
        logoutUser();
        alert('Has cerrado sesión.');
        navigate('/login');
    }
    // console.log(user);

    return (
        <>
            <div className="cont">

                <Link to="/" className="link-sin-estilo">
                    {/* <h2 >Bienvenido {props.sesionIniciada ? props.user : null}</h2> */}
                    <h2 >Bienvenido {user ? user.name : null}</h2>
                </Link>
                <div className="buttons">
                    {user && user.name ?
                        <Button variant="primary" type="submit" onClick={handlleCerrarSesion}>
                            Cerrar sesion
                        </Button>
                        :
                        <>
                            <Link to="/login">
                                <Button variant="primary" type="submit" >
                                    Iniciar sesion
                                </Button>
                            </Link>
                            <Link to="/user/register">
                                <Button variant="primary" type="submit">
                                    Registrarse
                                </Button>
                            </Link>
                        </>}
                </div>

            </div>

        </>
    )
}