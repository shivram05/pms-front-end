import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { toast } from "react-hot-toast";
const AllOwners = () => {
  const navigate = useNavigate();

  const [users, setOwners] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/users/", {
        params: {
          role: "Owner",
        },
      })
      .then((response) => {
        console.log(response.data.users);
        setOwners(response.data.users);
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
        setOwners(users.filter((user) => user.id !== id));
        // navigate("/admin");
        toast.success("Owner is Deleted Succesfully !!");
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
                    Delete Owner
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
export default AllOwners;
