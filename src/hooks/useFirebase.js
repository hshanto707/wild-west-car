import initializeFirebase from '../Firebase/firebase.init';
import { useState, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  getIdToken,
  updateProfile,
} from "firebase/auth";

//initialize firebase app
initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [authError, setAuthError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState(false);
  const [token, setToken] = useState('');

  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  const registerUser = (email, password, name, history, location) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError(" ");
        const newUser = { email, displayName: name };

        // save user to database
        saveUser(email, name, "POST");

        // send name to firebase after creation

        updateProfile(auth.currentUser, {
          displayName: name,
        })
        .then(() => {
          const destination = location?.state?.from || "/";
          history.push(destination);
          setAuthError(" ");
        })
          .catch((error) => {});
        setUser(newUser);
      })
      .catch((error) => {
        setAuthError(error.message);
        // ..
      })
      .finally(() => setIsLoading(false));
  };

  const loginUser = (email, password, history, location) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        history.push(destination);
        setAuthError(" ");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const signInWithGoogle = (history, location) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        saveUser(user.email, user.displayName, "PUT");
        setAuthError(" ");
        const destination = location?.state?.from || "/";
        history.replace(destination);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  //observe user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user)
        .then(idToken=>{
          setToken(idToken);
        })
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);

  //admin verification
  useEffect(()=>{
    fetch(`https://limitless-everglades-07733.herokuapp.com/users/${user.email}`)
    .then(res=>res.json())
    .then(data=>setAdmin(data.admin))
  },[user.email])

  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };

  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("https://limitless-everglades-07733.herokuapp.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  return {
    user,
    admin,
    token,
    isLoading,
    authError,
    registerUser,
    logout,
    loginUser,
    signInWithGoogle,
  };
};
export default useFirebase;
