import {useRef, useState} from "react";
import { signup, login, logout, useAuth } from "./firebase";

import "./LandingPage.css";

export default function LandingPage({setState}){

    const [loading, setLoading]= useState();
    const currentUser=useAuth();

    const emailRef= useRef();
    const passwordRef=useRef();

    async function handleSignUp(){
        setLoading(true);
        try{
        await signup(emailRef.current.value, passwordRef.current.value);
        }catch(error){
            alert("Error!");
        } 
        setLoading(false);
    }

    async function handleLogIn(){
        setLoading(true);
        try{
        await login(emailRef.current.value, passwordRef.current.value);
        }catch(error){
            alert("Error!");
        }
        setLoading(false);
    }


    async function handleLogOut(){
        setLoading(true);
        try{
        await logout();
        }catch{
        alert("Error!");
        }
        setLoading(false);
    }
    return(
        <div className="wrapper">
          <div className="input-container">
             <h1>Login Page</h1>
             <div>Currently logged in: {currentUser?.email}</div>
              <div className="fields"> 
                <input ref={emailRef} placeholder="email"/><br></br>
                <input ref={passwordRef} type="password" placeholder="password"/>
              </div>
            <button  disabled={loading || currentUser} onClick={handleSignUp}
            //  onClick={()=>{setState('map')} 
             >Sign Up</button>
              <button  disabled={loading || currentUser} onClick={()=> {
                  handleLogIn && setState('map')
                }}
           
             >Log In</button> 
            <button disabled={loading || !currentUser} onClick={handleLogOut}> Log Out</button>
          </div>
        </div>
    );
}