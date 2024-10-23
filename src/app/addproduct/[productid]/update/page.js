"use client";
import { useEffect, useState } from "react";
import "./../../../../style.css";
import Link from "next/link";

export default function Page(props) {
  console.log(props);
  const productId = props.params.productid;
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    getProductDetails(productId);
  }, []);

  const getProductDetails = async (productId) => {
    let data = await fetch(`http://localhost:3000/api/products/${productId}`);
    data = await data.json();
    console.log(data);
    let productData = data.result;
    setName(productData.name);
    setPrice(productData.price);
    setColor(productData.color);
    setCompany(productData.company);
    setCategory(productData.category);
  };

  const updateProduct = async () => {
    let id = props.params.productid;
    let response = await fetch(`http://localhost:3000/api/products/${id}`, {
      method: "Put",
      body: JSON.stringify({ name, price, color, company, category }),
    });
    response = await response.json();
    if (response.success) {
      alert("Product has been updated");
      clear();
    } else {
      alert("Something went wrong!!");
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
      <h1>Update Product</h1>
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
      <button className="btn" onClick={() => updateProduct()}>
        Update Product
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
