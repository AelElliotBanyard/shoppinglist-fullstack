"use client";

import { useState } from "react";
import { createGroup } from "../../lib/databaseGroup";
import { useRouter } from "next/navigation";
import { AiFillDelete } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";

const Create = () => {
  const [name, setName] = useState("");
  const [amountUsers, setAmountUsers] = useState(1);
  const [users, setUsers] = useState([""]);
  const router = useRouter();

  const newGroup = async (e) => {
    e.preventDefault();
    let usersString = "";
    if (amountUsers === 1) {
      usersString = users[0];
    } else {
      users.map((user) => {
        usersString += user + ",";
      });
    }
    try {
      const response = await createGroup(name, usersString);
      router.push(`/${response.id}`);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="create">
      <button className="backLanding" onClick={router.back}><IoIosArrowBack size={32}/></button>
      <h1>Create</h1>
      <div className="inputName">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="newUserContainer">
        <button
          className="newUser"
          onClick={(e) => {
            e.preventDefault();
            setAmountUsers(amountUsers + 1);
            setUsers([...users, ""]);
          }}
        >
          new User
        </button>
        {[...Array(amountUsers)].map((_, i) => (
          <div className="input" key={i}>
            <div className="inputl">
              <label htmlFor={`user-${i}`}>Name</label>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "8px",
                }}
              >
                <input
                  type="text"
                  className="inputUser"
                  id={`user-${i}`}
                  value={users[i]}
                  onChange={(e) => {
                    const newUsers = [...users];
                    newUsers[i] = e.target.value;
                    setUsers(newUsers);
                  }}
                />
              <button
                className="deleteUser"
                onClick={(e) => {
                  e.preventDefault();
                  let usersCopy = [...users];
                  usersCopy.splice(i, 1);
                  setUsers(usersCopy);
                  setAmountUsers(amountUsers - 1);
                }}
              >
                <AiFillDelete size={25} />
              </button>
              </div>
            </div>
          </div>
      ))}
      </div>
      <button className="createGroup" onClick={newGroup}>Create Group</button>
    </div>
  );
};

export default Create;
