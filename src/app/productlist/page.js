import Link from "next/link";
import DeleteProduct from "@/app/component/deleteproduct";

export default async function page() {
  let data = await fetch("http://localhost:3000/api/products", {
    cache: "no-cache",
  });
  data = await data.json();
  data = data.result;
  console.log(data);
  return (
    <div>
      <h1>Product list</h1>
      <table border="1">
        <thead>
          <tr>
            <td style={{ fontWeight: "bold" }}>Name</td>
            <td style={{ fontWeight: "bold" }}>Price</td>
            <td style={{ fontWeight: "bold" }}>Color</td>
            <td style={{ fontWeight: "bold" }}>Company</td>
            <td style={{ fontWeight: "bold" }}>Category</td>
            <td style={{ fontWeight: "bold" }}>Action</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.color}</td>
              <td>{item.company}</td>
              <td>{item.category}</td>
              <td>
                <Link href={`/addproduct/${item._id}/update`}>Edit</Link>
              </td>
              <td>
                <DeleteProduct id={item._id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
