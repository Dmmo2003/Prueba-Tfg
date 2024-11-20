import React from "react";
import { useContext, useEffect } from "react";
import { UserContext } from "./UserContext";

export default function MainPage() {
    const { user } = useContext(UserContext);

    

    return (
        <div>
            <h1>메인페이지</h1>
            <p>Hola caracola</p>
        </div>
    );
}