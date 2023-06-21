import React from "react";
import ListItem from "../../components/ListItem"

const GroupPage = ({params}) => {
  return (
  <div className="groupPage">
    <ListItem id="13413" group_id={params.group} title="bananas" / >
  </div>
  );
};

export default GroupPage;
