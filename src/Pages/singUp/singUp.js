import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import SocialLogin from "../../Share/socialLogin/socialLogin";
import "./singUp.css";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const SingUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conformPassword, setConformPassword] = useState("");
  const [error, setError] = useState("");

  const handleNameBlur = (e) => {
    setName(e.target.value);
  };
  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };
  const handleConformPasswordBlur = (e) => {
    setConformPassword(e.target.value);
  };
  const navigate = useNavigate();
  const handleCreateUser = (e) => {
    e.preventDefault();
    if (password !== conformPassword) {
      setError("Your Password not match");
      return;
    }
    if (password.length < 8) {
      setError("Atleast 8 characters");
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        updateUserName(name);
        // console.log(result);
        fetch(`https://peaceful-savannah-15152.herokuapp.com/user/${email}`, {
          method: "PUT",
          body: JSON.stringify({ name, email, image: null }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            navigate("/Home");
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  const updateUserName = (name) => {
    updateProfile(auth.currentUser, { displayName: name })
      .then(() => {})
      .catch((error) => {});
  };

  return (
    <div className="sing-info">
      <h1 className="text-4xl text-center font-bold p-8">
        Please SingUp Our Page
      </h1>
      <div className="text-center p-8">
        <SocialLogin></SocialLogin>
      </div>
      <form onSubmit={handleCreateUser} className="text-center">
        <div className="p-4">
          <input
            onBlur={handleNameBlur}
            type="text"
            className="form-info-name w-72 h-8"
            placeholder="Your Name"
          />
        </div>
        <div className="p-4">
          <input
            onBlur={handleEmailBlur}
            type="email"
            className="form-info-email w-72 h-8"
            placeholder="Enter your email"
          />
        </div>
        <div className="p-4">
          <input
            onBlur={handlePasswordBlur}
            type="password"
            className="form-info-pass w-72 h-8"
            placeholder="Enter Password"
          />
        </div>
        <div className="p-4">
          <input
            onBlur={handleConformPasswordBlur}
            type="password"
            className="form-info-pass w-72 h-8"
            placeholder="Conform Password"
          />
        </div>
        <p className="text-red-400">{error}</p>
        <input type="submit" className="submit w-20 h-8" value="SingUp" />
      </form>
      <p className="text-center p-4">
        Already account?{" "}
        <Link className="form-link" to="/Login">
          login now
        </Link>
      </p>
    </div>
  );
};

export default SingUp;
