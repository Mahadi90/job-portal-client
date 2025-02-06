
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.init";


const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const profile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName : name , photoURL : photo
        })
    }

    const logIn =(email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    } 

    const logOut = () => {
        setLoading(true)
        signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('from onauth', currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
             unsubscribe()
        }
    },[])
    const authInfo = {
        user,
        loading,
        createUser,
        logIn,
        profile,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;