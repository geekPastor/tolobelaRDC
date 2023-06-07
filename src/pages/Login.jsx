import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import LoginComponent from "../components/LoginComponent";
import { useNavigate } from "react-router-dom";
export default function Login(){
    let navigate = useNavigate();
    useEffect(()=>{
        onAuthStateChanged(auth, (res)=>{
            if(res?.accessToken){
                navigate("/home")
            }
        })
    }, []);
    return(
        <LoginComponent/>
    )
}