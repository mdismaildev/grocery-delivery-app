import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { AuthContext } from './AuthContext';
import { auth } from '../utils/firebase.config';
import { useEffect, useState } from 'react';
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const createUser = async (email, password, name, photoURL = '') => {
    setLoading(true);
    const res = await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(res.user, {
      displayName: name,
      photoURL: photoURL,
    });

    const updateUser = { ...res.user, displayName: name, photoURL: photoURL };
    setUser(updateUser);

    setLoading(false);
    return updateUser;
  };

  //sign in with google

  const signInGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
     
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setLoading(false);
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    loading,
    signInUser,
    createUser,
    user,
    signOutUser,
    signInGoogle,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
