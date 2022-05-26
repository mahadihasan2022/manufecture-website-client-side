import React, { useState } from "react";

const Admin = () => {
  const [admin, setAdmin] = useState("");

  const setAdminHandler = () => {
    fetch(`https://peaceful-savannah-15152.herokuapp.com/admin/:${admin}`, {
      method: "PUT",
      body: JSON.stringify({ email: admin, role: "admin" }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Make admin successfully!!!");
        }
      });
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setAdmin(e.target.value)}
        className="form-control"
        placeholder="Enter admin email"
      />
      <div className="text-center">
        <button className="btn btn-primary" onclick={setAdminHandler}>
          Admin Button
        </button>
      </div>
    </div>
  );
};

export default Admin;
