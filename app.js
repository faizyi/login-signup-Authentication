//Signup show password
const show_password = document.querySelector('.show-password')
const pinput = document.querySelector('.pinput')
const invalid = document.querySelector('.invalid')
show_password.addEventListener('click', ()=>{
    if(pinput.type == 'password'){
         pinput.type = 'text'
    }else{
        pinput.type ='password'
    }

})

//Register
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from './config.js'


const email = document.getElementById('email')
const password = document.getElementById('password')
const form = document.getElementById('form')
const signup_google = document.getElementById('signup_google')


//signup
form.addEventListener('submit', (event)=>{
    event.preventDefault()
    createUserWithEmailAndPassword(auth,email.value, password.value)
    .then((userCredential) => {
      // Signed up 
        const user = userCredential.user;
        window.location = 'login.html'
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        invalid.textContent = 'This account has already register'
      });

})



import { signInWithPopup } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

import { provider } from "./config.js"
//signup with google
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







