import React from "react";
import auth from "../../firebase.init";
import { useNavigate } from "react-router-dom";
import "./socialLogin.css";
import Loading from "../../Component/Loading/Loading";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  // console.log(user?.user?.email);
  // console.log(user?.user?.displayName);
  //  console.log(user?.user?.photoURL);
  //  https://peaceful-savannah-15152.herokuapp.com/
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

  const navigate = useNavigate();

  let errorElement;

  if (loading || loading1) {
    <Loading></Loading>;
  }

  if (error || error1) {
    errorElement = (
      <p className="text-danger">
        Error: {error?.message} {error1?.message}
      </p>
    );
  }

  if (user || user1) {
    navigate("/Home");
  }
  const handlerSignInWithGoogle = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        fetch(
          `https://peaceful-savannah-15152.herokuapp.com/user/${result?.user?.email}`,
          {
            method: "PUT",
            body: JSON.stringify({
              name: result?.user?.displayName,
              email: result?.user?.email,
              image: result?.user?.photoURL,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((res) => res.json())
          .then((data) => {
            navigate("/Home");
          });
      })
      .catch((error) => {});
  };
  return (
    <div>
      <div>
        <div className="">
          <button
            onClick={() => handlerSignInWithGoogle()}
            className="btn-google w-40 h-12"
          >
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
