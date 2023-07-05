"use client";

import { useState } from "react";
import { getGroupByJoinId } from "../../lib/databaseGroup";
import { useRouter } from "next/navigation";

const Join = () => {
  const [joinId, setJoinId] = useState("");
  const router = useRouter();

  const joinGroup = async (e) => {
    e.preventDefault();
    try {
      const response = await getGroupByJoinId(joinId);
      router.push(`/${response.id}`);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="join">
      <h1>Join</h1>
      <input
        type="text"
        name="joinid"
        placeholder="Enter Join ID ..."
        value={joinId}
        onChange={(e) => {
          setJoinId(e.target.value);
        }}
      />
      <button onClick={joinGroup}>Join</button>
    </div>
  );
};

export default Join;
