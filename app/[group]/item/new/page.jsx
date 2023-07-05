"use client"
import { data } from "autoprefixer";
import React, { useState } from "react";
import Link from 'next/link';
import { IoIosArrowBack } from 'react-icons/io'
import { useRouter } from "next/navigation";
import { createItem } from "@/lib/databaseItem";

const ItemPage = ({ params }) => {
  const router = useRouter()
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const newItem = async () => {
    try {
      console.log("title:", title)
      console.log("desc:", description)
      const newItem = await createItem(title, description, "usr", params.group, false, "");
      console.log("Item added:", newItem);
      router.replace(`/${params.group}`)
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };



  return <div className="addItemPage">
          <div className="addHeader">
        <Link href={`/${params.group}`} className="backBtn"><IoIosArrowBack size={32} /></Link>
        <h1 className="addTitle">add Item</h1>
        </div>
          <input className="addInput" placeholder="Enter Title" onChange={handleTitleChange} value={title}></input>
          <input className="addDescription" placeholder="Enter Description" onChange={handleDescriptionChange} value={description}></input>
          <button className="addBtn" onClick={newItem}>Add Item</button>
        </div>;
};

export default ItemPage;
