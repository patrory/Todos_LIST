import React, { useState } from 'react'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from './firebase-config'
function FirebaseAuth() {
    const register =async()=>{
        try{
        const user = await createUserWithEmailAndPassword(auth,registerEmail,registerPassword);
        console.log(user);
        }catch(error){
            console.log(error.messaage);
        }
    }
    const login = async()=>{

    }
    const logout = async()=>{

    }
    const [registerEmail,setRegisterEmail]=useState("");
    const[registerPassword,setRegisterPassword]=useState("");
    const [loginEmail,setLoginEmail]=useState("");
    const[loginPassword,setLoginPassword]=useState("");


  return (
    <>
     <hr />
    <div className="signup">
        <h2>Register User</h2>
        <input placeholder='Email' onChange={(event)=>setRegisterEmail(event.target.value)}/><input placeholder="password" onChange={(event)=>setRegisterPassword(event.target.value)} />
        <button onClick={register}>Sign up</button>
    </div>
   
    <div className="login">
       
        <h2>Login</h2>
    <input placeholder='Email' onChange={(event)=>setLoginEmail(event.target.value)} /><input placeholder="password" onChange={(event)=>setLoginPassword(event.target.value)} />
        <button>Sign in</button>
    </div>
    <div className="logged">
        <h3>Logged in :</h3>
        </div>
    <div className="signout">
        <button>Sign out</button>
    </div>
  
    </>
  )
}

export default FirebaseAuth
