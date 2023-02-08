import React from "react";
import User from "./User";
import { initUsers } from "./data";
import { useState } from "react";

const Users = () => {
  const [users, setUsers] = useState(initUsers);

  function toggleMode(id) {
    setUsers(
      users.map((user) => {
        if (user.id === id) {
          user.isEdit = !user.isEdit;
        }
        return user;
      })
    );
  }

  function editUser(id, field, event) {
    setUsers(
      users.map((user) => {
        if (user.id === id) {
          user[field] = event.target.value;
        }
        return user;
      })
    );
  }

  function changeStatus(id) {
    setUsers(
      users.map((user) => {
        if (user.id === id) {
          user.isOnline = !user.isOnline;
        }
        return user;
      })
    );
  }

  const result = users.map((user) => {
    return (
      <User
        key={user.id}
        id={user.id}
        name={user.name}
        spec={user.spec}
        isOnline={user.isOnline}
        isEdit={user.isEdit}
        toggleMode={toggleMode}
        editUser={editUser}
        changeStatus={changeStatus}
      />
    );
  });
  return <div className="App">{result}</div>;
};

export default Users;
