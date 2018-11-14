import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const prodConfig = {
    apiKey: "AIzaSyA9v3GrTjCsoM5MT-V2NnEqGsA37NuQOfE",
    authDomain: "my-first-app-dfd97.firebaseapp.com",
    databaseURL: "https://my-first-app-dfd97.firebaseio.com",
    projectId: "my-first-app-dfd97",
    storageBucket: "my-first-app-dfd97.appspot.com",
    messagingSenderId: "1021669950976"
};

const devConfig = {
    apiKey: "AIzaSyA9v3GrTjCsoM5MT-V2NnEqGsA37NuQOfE",
    authDomain: "my-first-app-dfd97.firebaseapp.com",
    databaseURL: "https://my-first-app-dfd97.firebaseio.com",
    projectId: "my-first-app-dfd97",
    storageBucket: "my-first-app-dfd97.appspot.com",
    messagingSenderId: "1021669950976"
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

if(!firebase.apps.length){
    firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
    db,
    auth,
};