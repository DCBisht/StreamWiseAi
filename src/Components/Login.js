import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../Utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";
import { USER_AVTAR } from "../Utils/constants";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const [errorMessage, setErrorMessage] = useState();
  const dispatch = useDispatch();
  const toggleSignUP = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = () => {
    if (!isSignInForm) {
      const message = checkValidData(
        email.current.value,
        password.current.value
      );
      setErrorMessage(message);
      if (message == null) {
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log(user);
            console.log(auth.currentUser);
            console.log(name.current.value);
            updateProfile( auth.currentUser, {
              displayName: name.current.value,
              photoURL: USER_AVTAR,
            })
              .then(() => {
                const { uid, email, displayName, photoURL } = auth.currentUser;
                console.log(photoURL);
                dispatch(
                  addUser({
                    uid: uid,
                    email: email,
                    userName: displayName,
                    photoURL: photoURL,
                  })
                );
              })
              .catch((error) => {
                console.log(error);
                setErrorMessage(error.message);
              });
          })
          .catch((error) => {
            const errorMessage = error.message;
            setErrorMessage(errorMessage);
          });
      }
    } else {
      const message = checkValidData(
        email.current.value,
        password.current.value
      );
      setErrorMessage(message);
      if (message == null) {
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            console.log("User signIn ho gya bhai!!!");
          })
          .catch((error) => {
            const errorMessage = error.message;
            setErrorMessage(errorMessage);
          });
      }
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt=""/>
      </div>
      <div className=" bg-opacity-80 absolute rounded-lg p-14 bg-black w-4/12 my-36 mx-auto right-0 left-0 text-white">
        <h1 className=" font-bold text-3xl p-2 mb-6">
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}{" "}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="rounded-lg p-2 m-2 w-full bg-gray-800"
            ref={name}
          />
        )}
        <input
          type="text"
          placeholder="Email address"
          className="rounded-lg p-2 m-2 w-full bg-gray-800"
          ref={email}
        />

        <input
          type="password"
          placeholder="Password"
          className="rounded-lg p-2 m-2 w-full bg-gray-800"
          ref={password}
        />
        <p className="p-1 my-1 mx-2 text-red-500 font-bold">{errorMessage}</p>
        <button
          className="rounded-lg p-2 m-2 mx-3 bg-red-700 w-full"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="p-1 cursor-pointer" onClick={toggleSignUP}>
          {isSignInForm
            ? "New to platform? Sign Up Now"
            : "Already a user? Sign In"}
        </p>
      </div>
    </div>
  );
};

export default Login;
