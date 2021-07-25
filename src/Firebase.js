import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBUfdFEg0wF4E4xUe2eOZ49V-BNgXNm5MY",
    authDomain: "disney-clone-907c9.firebaseapp.com",
    projectId: "disney-clone-907c9",
    storageBucket: "disney-clone-907c9.appspot.com",
    messagingSenderId: "746340032084",
    appId: "1:746340032084:web:35ae3cb4015cfb209657c1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;