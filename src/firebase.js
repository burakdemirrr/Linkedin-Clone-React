import 'firebase/compat/auth';
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';


import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAGkjEZkYPH8al4vzxb7hV3YyFL3bdR_zY",
    authDomain: "linkedin-clone-a6016.firebaseapp.com",
    projectId: "linkedin-clone-a6016",
    storageBucket: "linkedin-clone-a6016.appspot.com",
    messagingSenderId: "392593708253",
    appId: "1:392593708253:web:91a7862da8547875333734"
};


const firebaseApp=firebase.initializeApp(firebaseConfig);
export const db=firebaseApp.firestore();
export const auth=firebase.auth();
