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
        <div className="flex flex-col md:flex-row h-screen items-center">
            <div className="h-screen md:w-1/2 xl:w-2/3">
                <img src="../assets/logo.jpg" alt=""  className="w-full h-full object"/>
            </div>
            <div className="bg-white w-full md:w-1/2 md:w-1/2 xl:w-1/3">
                <div className="w-full h-100">
                    <h1 className="text-red">Login to TolobelaRDC</h1>
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
                </div>
                
                <button onClick={login} className="login-btn">
                Se connecter à tolobelaRDC
                </button>
            </div>
        </div>
    )
}