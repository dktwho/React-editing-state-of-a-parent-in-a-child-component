import React from "react";

const Product = ({ id, name, cost, isEdit, toggleMode, editProd }) => {
  return (
    <p>
      Name:{" "}
      {isEdit ? (
        <input value={name} onChange={(e) => editProd(id, "name", e)} />
      ) : (
        <span>{name}</span>
      )}
      Cost:{" "}
      {isEdit ? (
        <input value={cost} onChange={(e) => editProd(id, "cost", e)} />
      ) : (
        <span>{cost}</span>
      )}
      <button onClick={() => toggleMode(id)}>{isEdit ? "save" : "edit"}</button>
    </p>
  );
};

export default Product;
