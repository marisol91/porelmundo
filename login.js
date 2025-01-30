import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCLHKZmeUUahOD9pCG9HGRed9zxwP5vHb0",
    authDomain: "besosporelmundo.firebaseapp.com",
    databaseURL: "https://besosporelmundo-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "besosporelmundo",
    storageBucket: "besosporelmundo.firebasestorage.app",
    messagingSenderId: "716617534132",
    appId: "1:716617534132:web:77b9372971f803fcdd25e1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const emailElement = document.getElementById('email');
    const passwordElement = document.getElementById('password');

    console.log('Email element:', emailElement);
    console.log('Password element:', passwordElement);

    if (!emailElement || !passwordElement) {
        console.error('Elemento(s) no encontrado(s)');
        return;
    }

    const email = emailElement.value;
    const password = passwordElement.value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('Usuario autenticado:', user);
            window.location.href = 'mapa.html';
        })
        .catch((error) => {
            const errorMessage = error.message;
            document.getElementById('auth-message').textContent = `Error: No te acuerdas de tu contraseña`;
        });
});
