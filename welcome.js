const logout = document.querySelector('.logout')
const email_id = document.querySelector('.email_id')
import { signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from './config.js'

//get Email from auth
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.email;
    email_id.textContent = uid
    // ...
  } else {
    window.location = 'login.html'
  }
});

//logout function
logout.addEventListener('click', () => {
    signOut(auth).then(() => {

        alert('logout succesfully')
        window.location = 'login.html'
    }).catch((error) => {
        console.log(error);
    });
})


//Change Password
// import { updatePassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
// // const user = auth.currentUser;
// // const newPassword = getASecureRandomPassword();

// const changePassworsd = document.querySelector('.changepassword')

// changePassworsd.addEventListener('click', (event)=>{
//   event.preventDefault()
//   const user = auth.currentUser;
//   // const newPassword = getASecureRandomPassword();
  
//   updatePassword(user, updatePassword).then(() => {
//     prompt('enter ')
//     // Update successful.
//   }).catch((error) => {
//     // An error ocurred
//     // ...
//   });
// })

