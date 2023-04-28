import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { toast } from "react-hot-toast";
const AllCustomers = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/users/", {
        params: {
          role: "Customer",
        },
      })
      .then((response) => {
        console.log(response.data);
        setUsers(response.data.users);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handlePasswordChage = (id) => {
    navigate("/reset");
  };

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:8080/api/v1/users/" + id)
      .then((response) => {
        setUsers(users.filter((user) => user.id !== id));
        toast.success("Customer is Deleted Succesfully !!");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <>
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
                <td>{user.firstName}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => handlePasswordChage(user.id)}>
                    ChangePassword
                  </button>
                  &nbsp;&nbsp;
                  <button onClick={() => handleDelete(user.id)}>
                    Delete Customer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <toast />
      </>
    </div>
  );
};
export default AllCustomers;
