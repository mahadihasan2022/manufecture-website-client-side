import React, { useContext, useEffect, useState } from "react";
import { UserDataProvider } from "../../App";
import "./MyProfile.css";

const MyProfile = () => {
  const [user] = useContext(UserDataProvider);
  console.log(user);
  // const [imaUser, setIamUser] = useState({})
  // useEffect(() => {
  //     fetch(`https://peaceful-savannah-15152.herokuapp.com/user/${user.email}`)
  //     .then(res => res.json())
  //     .then(data => setIamUser(data))
  // },[])
  return (
    <div className="my-profile">
      <h1 className="text-2xl p-4 text-center">Profile</h1>
      <p className="text-xl font-bold p-4 text-center">Name: {user?.name}</p>
      <p className="text-xl font-semibold text-center p-4">
        Email: {user?.email}{" "}
      </p>
    </div>
  );
};

export default MyProfile;
