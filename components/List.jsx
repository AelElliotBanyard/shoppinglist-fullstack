import ListItem from "./ListItem";
const List = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <ListItem
          key={index}
          id={item.id}
          group_id={item.group_id}
          title={item.title}
          completed={item.completed}
        />
      ))}
    </>
  );
};

export default List;
