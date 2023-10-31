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
import {  signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from './config.js'


const email = document.getElementById('email')
const password = document.getElementById('password')
const form = document.getElementById('form')


form.addEventListener('submit', (event)=>{
    event.preventDefault()
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        window.location = 'welcome.html'
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        invalid.textContent = 'Invalid Email & Password'
      });
})