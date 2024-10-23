"use client";
import { useState } from "react";
import style from "./../../style.css";
export default function Page() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const addUser = async () => {
    //console.log(name, age, email);
    let response = await fetch("http://localhost:3000/api/users", {
      method: "Post",
      body: JSON.stringify({ name, age, email }),
    });
    response = await response.json();
    console.log(response.success);
    if (response.success) {
      alert("User added successfuly");
    } else {
      alert("Somthing went wrong");
    }
    console.log(response);
  };

  return (
    <div className="add-user">
      <h1>Add new user</h1>
      <input
        type="text"
        placeholder="Enter name"
        className="input-field"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Enter age"
        className="input-field"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Enter email"
        className="input-field"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <button className="btn" onClick={() => addUser()}>
        Add User
      </button>
    </div>
  );
}
