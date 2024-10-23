"use client";
import { useEffect, useState } from "react";
import "./../../../../style.css";
import Link from "next/link";

export default function Page({ params }) {
  console.log(params.id);
  let id = params.id;
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    getUserDetails(id);
  }, []);

  const getUserDetails = async (id) => {
    let data = await fetch(`http://localhost:3000/api/users/${id}`);
    data = await data.json();
    console.log(data);
    setName(data.result[0].name);
    setAge(data.result[0].age);
    setEmail(data.result[0].email);
  };

  const updateUser = async () => {
    //console.log(name, age, email);
    let response = await fetch(`http://localhost:3000/api/users/${id}`, {
      method: "Put",
      body: JSON.stringify({ id, name, age, email }),
    });
    response = await response.json();
    console.log(response.success);
    if (response.success) {
      alert("User updated successfuly");
    } else {
      alert("Somthing went wrong");
    }
    console.log(response);
  };

  return (
    <div>
      <div className="add-user">
        <h1>Update user</h1>
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
        <button className="btn" onClick={() => updateUser()}>
          Update User
        </button>
        <br></br>
        <Link href="/alluser">Go to User List</Link>
      </div>
    </div>
  );
}
