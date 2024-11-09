import React from "react";
import { useContext } from "react";
import Button from 'react-bootstrap/Button';
import './styles/Header.css';
import { Link } from 'react-router-dom';
import { UserSessionContext } from "./userSessionContext";


export default function Header(props) {
const { userSession, logout } = useContext(UserSessionContext);
    const handlleCerrarSesion = () => {
        logout();
    }

    console.log(userSession); // Imprime el objeto UserSession
    return (
        <>
            <div className="cont">

                <Link to="/" className="link-sin-estilo">
                    {/* <h2 >Bienvenido {props.sesionIniciada ? props.user : null}</h2> */}
                    <h2 >Bienvenido {userSession && userSession.nombre ? userSession.nombre : null}</h2>
                </Link>
                <div className="buttons">
                    {userSession.logged ? 
                        <Button variant="primary" type="submit" onClick= {handlleCerrarSesion}> 
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