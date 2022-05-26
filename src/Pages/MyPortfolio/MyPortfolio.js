import React from "react";
import "./MyPortfolio.css";

const MyPortfolio = () => {
  return (
    <div className="my-port">
      <h1 className="text-2xl font-bold p-4 text-center">
        Name: Mahadi Hasan Mim
      </h1>
      <h2 className="text-xl font-semibold p-4 text-center">
        Email: mahadihasanmim72@gmail.com
      </h2>
      <h2 className="text-xl font-semibold p-4 text-center">
        Email: mahadi35-2848@diu.edu.bd
      </h2>
      <h3 className="text-xl font-semibold p-4 text-center">
        {" "}
        Educational Background: B Sc. in Software Engineering{" "}
      </h3>
      <h4 className="text-xl font-semibold p-4 text-center">
        List of Technologies{" "}
      </h4>
      <ul className="text-md p-4 text-center">
        <li>Structure Programming C</li>
        <li>Object Oriented Java</li>
        <li>JavaScript</li>
        <li>Html</li>
        <li>CSS</li>
        <li>Php</li>
        <li>Python</li>
        <li>React</li>
        <li>MongoDB</li>
        <li>My SQL</li>
        <li>Node JS</li>
      </ul>
      <h5 className="text-md p-4 text-center">Live Website Link</h5>
      <p className="text-sm p-2 text-center">
        https://my-single-base-website.web.app/
      </p>
      <p className="text-sm p-2 text-center">
        https://warehouse-f4400.firebaseapp.com
      </p>
      <p className="text-sm p-2 text-center">
        https://reliable-faun-db254a.netlify.app/
      </p>
      <h6 className="text-center font-semibold text-md p-4">Linkedin Link</h6>
      <p className="text-sm text-center">
        https://www.linkedin.com/in/mahadi-hasan-mim-a1b917229/
      </p>
    </div>
  );
};

export default MyPortfolio;
