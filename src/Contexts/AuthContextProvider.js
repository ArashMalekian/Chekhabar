import React , {useState , useEffect, createContext} from 'react'
import {useHistory} from "react-router-dom"

//Firebase
import { auth } from '../Firebase'

export const authContext = createContext();


export const AuthContextProvider = ({children}) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(false);
    const history = useHistory();

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            setUser(user);
            setLoading(false);
            if (user) history.push("/chatpage")
        })

    },[user , history])


    return (
        <authContext.Provider value={user} >
            {!loading && children}
        </authContext.Provider>
    )
}
