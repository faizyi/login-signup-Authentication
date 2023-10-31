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
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from './config.js'

const email = document.getElementById('email')
const password = document.getElementById('password')
const form = document.getElementById('form')



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
