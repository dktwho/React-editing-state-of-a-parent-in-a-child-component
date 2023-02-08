import React, { useState } from "react";
import Product from "./Product";
import { initProds } from "./data";

const Products = () => {
  const [prods, setProds] = useState(initProds);

  function toggleMode(id) {
    setProds(
      prods.map((prod) => {
        if (prod.id === id) {
          prod.isEdit = !prod.isEdit;
        }
        return prod;
      })
    );
  }

  function editProd(id, field, event) {
    setProds(
      prods.map((prod) => {
        if (prod.id === id) {
          prod[field] = event.target.value;
        }
        return prod;
      })
    );
  }

  const result = prods.map((prod) => {
    return (
      <Product
        key={prod.id}
        id={prod.id}
        name={prod.name}
        cost={prod.cost}
        isEdit={prod.isEdit}
        toggleMode={toggleMode}
        editProd={editProd}
      />
    );
  });
  return <div className="App">{result}</div>;
};

export default Products;
