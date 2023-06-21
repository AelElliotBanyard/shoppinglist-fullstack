import React from "react";
import ListItem from "../../components/ListItem"

const GroupPage = ({params}) => {
  return (
  <div className="groupPage">
    <h1 className="groupTitle">title</h1>
    <div className="groupList">
      <ListItem id="13413" group_id={params.group} title="bananas" / >
      <ListItem id="13413" group_id={params.group} title="bananas" / >
      <ListItem id="13413" group_id={params.group} title="bananas" / >
      <ListItem id="13413" group_id={params.group} title="bananas" / >
      <ListItem id="13413" group_id={params.group} title="bananas" / >
      <ListItem id="13413" group_id={params.group} title="bananas" / >
      <ListItem id="13413" group_id={params.group} title="bananas" / >
      <ListItem id="13413" group_id={params.group} title="bananas" / >
      <ListItem id="13413" group_id={params.group} title="bananas" / >
    </div>
  </div>
  );
};

export default GroupPage;
