async function createGroup(name, users) {
  const { name, users } = req.body;
  const usersObj = users.split(",").map((user) => {
    return {
      name: user.trim(),
      id: Math.random().toString(36).substring(2, 6),
    };
  });
  const join_id = Date.now().toString();
  if (!name || !users) {
    throw new Error({ message: "Missing required fields" });
  }
  try {
    const response = await fetch(
      "https://shopping-list.banyard.tech/api/collections/group/records",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          join_id,
          name,
          users: JSON.stringify(usersObj),
        }),
      }
    );
    const data = await response.json();
    if (response.status === 200) {
      return {
        id: data.id,
        join_id: data.join_id,
        name: data.name,
        users: JSON.parse(data.users),
      };
    } else {
      throw new Error({ message: "There was a Error" });
    }
  } catch (error) {
    throw new Error({ message: "There was a Error" });
  }
}

async function getGroup(id) {
  try {
    const groupRes = await fetch(
      "https://shopping-list.banyard.tech/api/collections/group/records/" + id
    );
    const groupData = await groupRes.json();
    const itemsRes = await fetch(
      "https://shopping-list.banyard.tech/api/collections/item/records"
    );
    const itemsData = await itemsRes.json();
    const groupItems = itemsData.items.filter((item) => item.group_id === id);
    const group = {
      id: groupData.id,
      name: groupData.name,
      join_id: groupData.join_id,
      users: JSON.parse(JSON.stringify(groupData.users)),
      items: groupItems.map((item) => {
        return {
          id: item.id,
          title: item.title,
          description: item.description,
          created_by: item.created_by,
          created: item.created,
          group_id: item.group_id,
          completed: item.completed,
          assigned_to: item.assigned_to,
        };
      }),
    };
    return group;
  } catch (error) {
    throw new Error({ message: "There was a Error" });
  }
}

async function updateGroup(id, join_id, name, users) {
  try {
    const groupRes = await fetch(
      "https://shopping-list.banyard.tech/api/collections/group/records/" + id
    );
    const groupData = await groupRes.json();
    let body = {
      join_id: join_id || groupData.join_id,
      name: name || groupData.name,
      users: users || groupData.users,
    };
    const response = await fetch(
      "https://shopping-list.banyard.tech/api/collections/group/records/" + id,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    if (response.status === 200) {
      return {
        message: "Group Updated",
      };
    } else if (response.status === 404) {
      throw new Error({ message: "Group not found" });
    } else {
      throw new Error({ message: "There was a Error" });
    }
  } catch (error) {
    throw new Error({ message: "There was a Error" });
  }
}

async function deleteGroup(id) {
  try {
    const response = await fetch(
      "https://shopping-list.banyard.tech/api/collections/group/records/" + id,
      {
        method: "DELETE",
      }
    );
    if (response.status === 204) {
      return {
        message: "Group Deleted",
      };
    } else if (response.status === 404) {
      throw new Error({ message: "Group not found" });
    } else {
      throw new Error({ message: "There was a Error" });
    }
  } catch (error) {
    throw new Error({ message: "There was a Error" });
  }
}

export { createGroup, getGroup, updateGroup, deleteGroup };