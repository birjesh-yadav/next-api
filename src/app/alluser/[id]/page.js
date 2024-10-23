async function getUser(id) {
  let userData = await fetch(`http://localhost:3000/api/users/${id}`);
  userData = await userData.json();
  return userData.result[0];
}

export default async function Page({ params }) {
  const user = await getUser(params.id);
  console.log(user);
  return (
    <div>
      <h1>User Details</h1>
      <ul>
        <li>Id: {user.id}</li>
        <li>Name: {user.name}</li>
        <li>Email: {user.email}</li>
      </ul>
    </div>
  );
}
