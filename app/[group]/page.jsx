"use client"
import React from "react";
import { FaCog, FaPlus } from 'react-icons/fa'
import Link from 'next/link';
import { getGroup } from "@/lib/databaseGroup";
import List from "@/components/List";

async function getGroupData(group_id) {
  const res = await getGroup(group_id);
  return JSON.parse(JSON.stringify(res));
}

const GroupPage = async ({ params }) => {
  const group = await getGroupData(params.group);
  return (
    <div className="groupPage">
      <div className="groupHeader">
        <Link href={`/${params.group}/item/new`} className="addItem"><FaPlus size={24} /></Link>
        <h1 className="groupTitle">{group.name}</h1>
        <Link href={`/${params.group}/settings`} className="groupSettings"><FaCog size={24} /></Link>
      </div>
      <div className="groupList">
        <List items={group.items} ><input type="checkbox"/></List>
      </div>
    </div>
  );
};

export default GroupPage;
