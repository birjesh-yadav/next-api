"use client";

export default function DeleteUser(props) {
  const userId = props.id;
  //console.log(props);
  const deleteUser = async () => {
    console.log(userId);
    let response = await fetch("http://localhost:3000/api/users/" + userId, {
      method: "delete",
    });
    response = await response.json();
    if (response.success) {
      alert("User has been deleted.");
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <div>
      <button onClick={() => deleteUser()}>Delete User</button>
    </div>
  );
}
