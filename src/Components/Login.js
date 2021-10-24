import React from 'react'

import { auth } from '../Firebase'
import firebase from 'firebase/compat/app';



//Pics
import Google from "../Pics/google.svg"

//Style 
import styles from "./Login.module.css"

export const Login = () => {
    return (
        <div className={styles.container} >
            <div className={styles.loginCard} >
                <h2 className={styles.loginTitle} >
                CHEKHABAR  ?
                </h2>
                <div className={styles.loginBtn}
                    onClick={() => {auth.signInWithRedirect( new firebase.auth.GoogleAuthProvider() )}}
                >
                    <img src={Google} alt="Google" />
                    <h4>
                    Login With Google
                    </h4>
                </div>
            </div>
        </div>
    )
}
