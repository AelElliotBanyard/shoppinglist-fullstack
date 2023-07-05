"use client"
import React from "react";

const ItemPage = ({ params }) => {
  console.log(params);

const newItem = () => {
  
}

  return <div className="addItemPage">
          <h1 className="itemTitle">add Item</h1>
          <input className="addInput"></input>
          <button className="addBtn" onClick={newItem}>Add Item</button>
        </div>;
};

export default ItemPage;
