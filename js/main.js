{

/* ========================
  Variables
======================== */

const FIREBASE_AUTH = firebase.auth();
const FIREBASE_MESSAGING = firebase.messaging();
const FIREBASE_DATABASE = firebase.database();

const signInButton = document.getElementById('sign-in');

/* ========================
  Event Listeners
======================== */
signInButton.addEventListener('click', signIn);

/* ========================
  Functions
======================== */

function signIn(){
  FIREBASE_AUTH.signIn( new firebase.auth.GoogleAuthProvider());
}

}