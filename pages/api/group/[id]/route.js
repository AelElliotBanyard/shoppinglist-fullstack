export default async function handler(req, res) {
  const { method, query } = req;

  switch (method) {
    case "GET":
      getGroup(query.id, res);
      break;
    case "PATCH":
      updateGroup(query.id, req, res);
      break;
    case "DELETE":
      deleteGroup(query.id, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "PATCH", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

async function getGroup(id, res) {
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
    res.status(200).json(group);
  } catch (error) {
    res.status(500).json({ message: "There was a Error" });
  }
}

async function updateGroup(id, req, res) {
  try {
    const groupRes = await fetch(
      "https://shopping-list.banyard.tech/api/collections/group/records/" + id
    );
    const groupData = await groupRes.json();
    let body = {
      join_id: req.body.join_id || groupData.join_id,
      name: req.body.name || groupData.name,
      users: req.body.users || groupData.users,
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
      res.status(200).json({ message: "Group Updated" });
    } else if (response.status === 404) {
      res.status(404).json({ message: "Group not found" });
    } else {
      res.status(500).json({ message: "There was a Error" });
    }
  } catch (error) {
    res.status(500).json({ message: "There was a Error" });
  }
}

async function deleteGroup(id, res) {
  try {
    const response = await fetch(
      "https://shopping-list.banyard.tech/api/collections/group/records/" + id,
      {
        method: "DELETE",
      }
    );
    if (response.status === 204) {
      res.status(204).json({ message: "Group Deleted" });
    } else if (response.status === 404) {
      res.status(404).json({ message: "Group not found" });
    } else {
      res.status(500).json({ message: "There was a Error" });
    }
  } catch (error) {
    res.status(500).json({ message: "There was a Error" });
  }
}
