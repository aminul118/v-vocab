import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  // console.log(loader);
  //  create new user by email & Password
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign in existing user by email & password
  const signInExistingUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log("ERROR:", error);
      });
  };

  // Observe the user that user is login or not
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        console.log("OBSERVER", currentUser);
        setLoader(false);
      } else {
        console.log("User signed out");
        setUser(null);
        setLoader(false);
      }
    });

    return () => {
      unSubscribe();
    };
  }, []);

  // Sign out
  const signOutUser = () => {
    signOut(auth);
  };

  // Profile update
  const userProfileUpdate = (userInfo) => {
    updateProfile(auth.currentUser, userInfo)
      .then(() => {
        console.log("Profile Updated");
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };

  // Send email verification
  const emailVerification = () => {
    sendEmailVerification(auth.currentUser).then(() => {});
  };

  const authInfo = {
    createNewUser,
    signInExistingUser,
    userProfileUpdate,
    signOutUser,
    emailVerification, // Not working properly user created already. then verify
    user,
    loader,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AuthProvider;
