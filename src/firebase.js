import {initializeApp} from 'firebase/app';
import {getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig ={
    apiKey: "AIzaSyA6e453_3Gt-ySjT_lqmaPScPy66GCiu-Y",
    authDomain: "clevertest-f7c31.firebaseapp.com",
    projectId: "clevertest-f7c31",
    storageBucket: "clevertest-f7c31.appspot.com",
    messagingSenderId: "806813743615",
    appId: "1:806813743615:web:093d1f18a7c70a44f84fca",
    measurementId: "G-QMN5JFKDWV"
  };

  initializeApp(firebaseConfig);
  const auth = getAuth()
  const db = getFirestore()

  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const signinWithEmailAndPassword = async (email, password) => {
    try {
    await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const registerWithEmailAndPassword = async (name, email, password) => {
    try {
       await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  export {
    auth,
    db,
    signInWithGoogle,
    signinWithEmailAndPassword,
    registerWithEmailAndPassword
  };