//Login show password function
const show_lpassword = document.querySelector('.show-lpassword')
const pinput = document.querySelector('.pinput')
const invalid = document.querySelector('.invalid')
show_lpassword.addEventListener('click', ()=>{
    if(pinput.type == 'password'){
        pinput.type = 'text'
    }else{
        pinput.type = 'password'
    }
})

//loginin 
import {  signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from './config.js'
import { signInWithPopup } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

import { provider } from "./config.js"


const email = document.getElementById('email')
const password = document.getElementById('password')
const form = document.getElementById('form')
const signup_google = document.getElementById('signup_google')


//login
form.addEventListener('submit', (event)=>{
    event.preventDefault()
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        alert('You are successfully loged in.')
        window.location = 'welcome.html'
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        invalid.textContent = 'Invalid Email & Password'
      });
})




signup_google.addEventListener('click', ()=>{
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result)
        window.location = 'welcome.html'
        
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        
        console.log(errorMessage)
        window.location = 'index.html'
      });
    
    })