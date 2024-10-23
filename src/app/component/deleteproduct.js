"use client";

import { useRouter } from "next/navigation";

export default function DeleteProduct(props) {
  //console.log(props.id);
  const router = useRouter();
  const deleteRecord = async () => {
    let response = await fetch(
      `http://localhost:3000/api/products/${props.id}`,
      {
        method: "delete",
      }
    );
    response = await response.json();
    if (response.success) {
      alert("Product has been deleted");
      router.push("/productlist");
    } else {
      alert("Something went wrong!!");
    }
  };

  return (
    <div>
      <button onClick={() => deleteRecord()}>Delete Product</button>
    </div>
  );
}
