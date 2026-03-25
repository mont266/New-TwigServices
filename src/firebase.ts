import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { initializeFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAgQ_IiwSOI3W0-ASpNRJKlDJIg4UmJuK8",
  authDomain: "twigservices.firebaseapp.com",
  projectId: "twigservices",
  storageBucket: "twigservices.firebasestorage.app",
  messagingSenderId: "1097015072911",
  appId: "1:1097015072911:web:36e0eac443e66618c7b8fa",
  measurementId: "G-0PD981DRDR"
};

// Initialize Firebase SDK
const app = initializeApp(firebaseConfig);

// Use initializeFirestore with long polling to bypass strict corporate firewalls, VPNs, or Adblockers
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true
});

export const auth = getAuth(app);
export const storage = getStorage(app);

// Auth Helpers
export const provider = new GoogleAuthProvider();

export const loginWithGoogle = async () => {
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.error("Error signing in with Google", error);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error signing out", error);
  }
};
