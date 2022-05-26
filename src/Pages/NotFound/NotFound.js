import React from "react";
import download from "../../images/download.png";

const NotFound = () => {
  return (
    <div className=" not-found grid md:grid-cols-2 sm:grid-cols-1 m-20 gap-4">
      <div className="text-center">
        <img src={download} alt="" />
      </div>
      <div className="pl-48 pb-16">
        <h1 className="text-6xl text-center p-4">404</h1>
        <p className="text-xl font-semibold p-4 text-center">
          This page is not for you.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
