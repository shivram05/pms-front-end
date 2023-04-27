import React, { useState } from "react";
import { useNavigate } from "react-router";
const AllOwners = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "johndoe@example.com" },
    { id: 2, name: "Jane Smith", email: "janesmith@example.com" },
    // add more users here
  ]);

  const handlePasswordChage = (id) => {
    // handle password Change
  };

  const handleDelete = (id) => {
    //handelDelete and navigate back
  };

  return (
    <div>
      <h1>User List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handlePasswordChage(user.id)}>
                  ChangePassword
                </button>
                &nbsp;&nbsp;
                <button onClick={() => handleDelete(user.id)}>
                  Delete Owner
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default AllOwners;
