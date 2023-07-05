'use client'
import React from "react";
import { getItem } from "@/lib/databaseItem";

const ItemPage = async ({ params }) => {
  const {id} = params;
  const data = await getItem(id);
  let description = data.description;
  const changeDescription = (e) => {
    description = (e.target.value);
  };
  return (
    <div className="itemPage">
      <h1 className="itemTitle">
        {data.title} {data.completed}
      </h1>
      <div className="itemPageValue">
        <div className="itemDescription">
          <h2 className="itemSubtitle">Description</h2>
          <input type="text" className="descriptionInput" value={description} onChange={changeDescription}/>
        </div>
        <div className="rightSideItem">
          <div>
            <h2 className="itemSubtitle">Created By </h2>
            <p>{data.created_by}</p>
          </div>
          <div>
            <h2 className="itemSubtitle">Assigned To</h2>
            <p>{data.assigned_to}</p>
          </div>
          <button className="deleteItem">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
