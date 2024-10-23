"use client";
import { useState } from "react";
import "./../../style.css";
import Link from "next/link";

export default function Page() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState("");

  const addProduct = async () => {
    let response = await fetch("http://localhost:3000/api/products", {
      method: "Post",
      body: JSON.stringify({ name, price, color, company, category }),
    });

    response = await response.json();
    if (response.success) {
      clear();
      alert("Product added successfully");
    } else {
      alert("Something went wrong");
    }
  };

  const clear = () => {
    setName("");
    setPrice("");
    setColor("");
    setCompany("");
    setCategory("");
  };

  return (
    <div className="add-user">
      <h1>Add Products</h1>
      <input
        type="text"
        className="input-field"
        placeholder="Enter product name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        className="input-field"
        placeholder="Enter product price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        className="input-field"
        placeholder="Enter product color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />

      <input
        type="text"
        className="input-field"
        placeholder="Enter product company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      <input
        type="text"
        className="input-field"
        placeholder="Enter product category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button className="btn" onClick={() => addProduct()}>
        Add Product
      </button>
      <br></br>
      <button className="btn" onClick={() => clear()}>
        Clear
      </button>
      <br></br>
      <Link href="/productlist">Go to Product List</Link>
    </div>
  );
}
