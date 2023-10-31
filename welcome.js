const logout = document.querySelector('.logout')
import { signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from './config.js'


onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
  } else {
    window.location = 'login.html'
  }
});
logout.addEventListener('click', () => {
    signOut(auth).then(() => {
        alert('logout succesfully')
        window.location = 'login.html'
    }).catch((error) => {
        console.log(error);
    });
})
