import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDmiQukA-k9gnch-bh2Vkvxj3wX_8MAjws",
    authDomain: "animax-9a636.firebaseapp.com",
    projectId: "animax-9a636",
    storageBucket: "animax-9a636.appspot.com",
    messagingSenderId: "233288956566",
    appId: "1:233288956566:web:1b53e5d7fa338c4adba0b7"
}

//A Firebase App is a container-like object that stores common configuration and shares authentication across Firebase services. After you initialize a Firebase App object in your code, you can add and start using Firebase services.

const app = initializeApp(firebaseConfig);
