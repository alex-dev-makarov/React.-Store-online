import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';



const config = {
    apiKey: "AIzaSyCbUz7L-QqYxDrqWej4I6Ydfd82QSz0WcM",
    authDomain: "store-db-c3a0d.firebaseapp.com",
    projectId: "store-db-c3a0d",
    storageBucket: "store-db-c3a0d.appspot.com",
    messagingSenderId: "795756181940",
    appId: "1:795756181940:web:f8c21939b7476f329c5ae1",
    measurementId: "G-NG8S3EF6S5"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}
firebase.initializeApp(config);


export const auth = firebase.auth()
export const firestore = firebase.firestore()


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;