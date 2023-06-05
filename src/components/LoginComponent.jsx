import React, { useState } from "react";
import { LoginAPI } from "../api/authAPI";

// import { logo } from "../assets/logo.jpg";

import "../Sass/LoginComponent.scss"

export default function LoginComponent(){
    const [credentails, setCredentails] = useState({});
    const login = async ()=>{
       try {
        let res = await LoginAPI(credentails.email, credentails.password);
        console.log(res?.user);
       } catch (err) {
        console.log(err.errors.message);
       }
    };
    return(
        <div className="">
            <div className="felx h-screen">
                <img src="../assets/logo.jpg" alt="" />
            </div>
            <div className="bg-white w-full">
                <h1>LoginComponent</h1>
                <div className="auth-input">
                    <input onChange={(event)=> setCredentails({
                        ...credentails, email: event.target.value
                    })}
                    type="email" className="common-input"
                    placeholder="Entrez votre email"/>
                    <br/>
                    <input onChange={(event)=> setCredentails({
                        ...credentails, password: event.target.value
                    })}
                    type="password" className="common-input"
                    placeholder="Entrez votre Mot de passe"/>
                </div>
                <button onClick={login} className="login-btn">
                Se connecter à tolobelaRDC
                </button>
            </div>
        </div>
    )
}