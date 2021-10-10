import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import './Login.css'
import login from './features/counter/userSlice'
import firebase from 'firebase/compat/app'
import { auth } from './firebase';


function Login() {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [profilePic,setProfilePic]=useState("");
    const dispatch=useDispatch()

    const register=()=>{
        if(!name){
            return alert('Please enter a full name!');
        }
        auth.createUserWithEmailAndPassword(email,password)
        .then((userAuth)=>{
            userAuth.user.updateProfile({
                displayName:name,
                photoURL:profilePic,
            })
            .then(()=>{
                dispatch(login({
                    email:userAuth.user.email,
                    uid:userAuth.user.uid,
                    displayName:name,
                    photoURL:profilePic,
                }))
            }).catch(error=>console.log(error))
        })

    };


    const logintoApp=(e)=>{
        e.preventDefault();

        auth.signInWithEmailAndPassword(email,password)
        .then((userAuth)=>{
            dispatch(login({
                email:userAuth.user.email,
                uid:userAuth.user.uid,
                displayName:userAuth.user.displayName,
                profilePic:userAuth.user.photoURL
            }))
        }).catch(error=>console.log(error));
    };
    return (
        <div className="login">
            <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks" alt=""/>
            
            
            <form>
                <input value={name} onChange={e=>setName(e.target.value)} type="text" placeholder="Full name(required if registering)"/>

                <input value={profilePic} onChange={e=>setProfilePic(e.target.value)} type="text" placeholder="Profile pic URL(optional)"/>

                <input value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="Email"/>

                <input value={password} type="password" onChange={e=>setPassword(e.target.value)} placeholder="password"/>

                <button type="submit " onClick={logintoApp} >Sign In</button>


            </form>
        <p>Not a member?
            <span className="login_register" onClick={register}>Register Now</span>

        </p>
        </div>


    )
}
<script src="https://www.gstatic.com/firebasejs/live/3.0/firebase.js"></script>
export default Login
