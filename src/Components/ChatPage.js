import React , {useState , useEffect , useContext} from 'react'
import { useHistory } from 'react-router'
import {ChatEngine} from "react-chat-engine"
import axios from "axios"
//Components
import { NavBar } from './NavBar'

//Context
import {authContext} from "../Contexts/AuthContextProvider"

//firebase
import { auth } from '../Firebase'

//styles
import "./ChatPage.module.css"


export const ChatPage = () => {

    const [loading, setLoading] = useState(true)
    const user = useContext(authContext)

    const history = useHistory();

    const logoutHandler = async ( ) =>{
        await auth.signOut()
        history.push("/")
    }

    useEffect(() => {
        if(!user) {
            history.push("/");
            return;
        }

        axios.get("https://api.chatengine.io/users/me", {
            headers: {
                "project-id": "6f523495-cfc3-49aa-9174-d44cf45cbd8f",
                "user-name": user.email,
                // "user-secret": user.uid
            }
        })
        .then(() => {
            setLoading(false)
        })
        .catch(() => {
            let formdata = new FormData();
            formdata.append("email", user.email);
            formdata.append("username", user.email);
            formdata.append("secret", user.uid);
            getFile(user.photoURL)
                .then(avatar => {
                    formdata.append("avatar", avatar, avatar.name)
                    axios.post("https://api.chatengine.io/users/me", formdata, {
                        headers: {
                            "private-key": "c4dba487-a599-468f-a971-28a4b1306478"
                        }
                    })
                    .then(() => setLoading(false))
                    .catch(error => console.log(error))
                    
                })
        })

    }, [user, history])

    const getFile = async (url) => {
        const response = await fetch(url);
        const data = await response.blob();
        return new File([data]  , "userPhoto.jpg" , {type:"image/jpeg"})
    }

    if (!user || loading) return "Please Wait"

    return (
        <div>
            <NavBar  handler={logoutHandler} />
            <ChatEngine 
                height = "calc(100vh - 95px)"
                projectID = "6f523495-cfc3-49aa-9174-d44cf45cbd8f"
                userName = {user.email}
                userSecret= {user.uid}

            />
        </div>
    )
}
