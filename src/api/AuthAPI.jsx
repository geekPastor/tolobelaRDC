import { signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../firebaseConfig';

export const LoginAPI = (email, password)=>{
    try{
        let response = signInWithEmailAndPassword(auth, email, password);
        return response;
    } catch(err){
        return res;
    }
}

export const RegisterAPI = (email, password)=>{
    try{
        let response = createUserWithEmailAndPassword(auth, email, password);
        return response;
    } catch(err){
        return res;
    }
}

export const GoogleSingInAPI = (email, password) =>{
    try {
        let googleProvider = new GoogleAuthProvider();
        let res = signInWithPopup(auth, googleProvider);
        return res;
    } catch (err) {
        return err
    }
}