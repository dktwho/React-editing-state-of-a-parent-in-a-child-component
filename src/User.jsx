import React from "react";
import { FcOnlineSupport } from "react-icons/fc";
import { VscAccount } from "react-icons/vsc";

const User = ({
  id,
  name,
  spec,
  isOnline,
  toggleMode,
  editUser,
  isEdit,
  changeStatus,
}) => {
  return (
    <p>
      Name:{" "}
      {isEdit ? (
        <input value={name} onChange={(e) => editUser(id, "name", e)} />
      ) : (
        <span>{name} - </span>
      )}
      Spec:
      {isEdit ? (
        <input value={spec} onChange={(e) => editUser(id, "spec", e)} />
      ) : (
        <span> {spec}</span>
      )}
      <button onClick={() => toggleMode(id)}>
        {!isEdit ? "edit" : "save"}
      </button>
      {isOnline ? (
        <>
          <FcOnlineSupport onClick={() => changeStatus(id)} /> Online
        </>
      ) : (
        <>
          {" "}
          <VscAccount onClick={() => changeStatus(id)} /> Offline
        </>
      )}
    </p>
  );
};

export default User;
