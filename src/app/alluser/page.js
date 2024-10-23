import Link from "next/link";
import DeleteUser from "./deleteuser";

async function getUsers() {
  let userData = await fetch("http://localhost:3000/api/users");
  userData = await userData.json();
  return userData;
}

export default async function Page() {
  const users = await getUsers();
  return (
    <div>
      <h1>User List</h1>
      {users.map((item) => (
        <ul key={item.id}>
          <li>
            <span>
              <Link href={`/alluser/${item.id}`}>{item.name}</Link>
            </span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>
              <Link href={`/alluser/${item.id}/update`}>Edit</Link>
            </span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>
              <Link href={`/alluser/${item.id}/delete`}>Delete</Link>
            </span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>
              <DeleteUser id={item.id} />
            </span>
          </li>
        </ul>
      ))}
    </div>
  );
}
