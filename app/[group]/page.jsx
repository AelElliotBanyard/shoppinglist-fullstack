import React from "react";
import ListItem from "../../components/ListItem";
import { FaCog, FaPlus } from 'react-icons/fa'
import Link from 'next/link';

const GroupPage = ({ params }) => {
  return (
    <div className="groupPage">
      <div className="groupHeader">
        <Link href={`/${params.group}/item/new`} className="addItem"><FaPlus size={24} /></Link>
        <h1 className="groupTitle">title</h1>
        <Link href={`/${params.group}/settings`} className="groupSettings"><FaCog size={24} /></Link>
      </div>
      <div className="groupList">
        <ListItem id="13413" group_id={params.group} title="bananas" />
      </div>
    </div>
  );
};

export default GroupPage;
