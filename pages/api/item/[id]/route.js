export default async function handler(req, res) {
  const { method, query } = req;
  const { id } = query;
  switch (method) {
    case "GET":
      getItem(id, res);
      break;
    case "PATCH":
      updateItem(id, req, res);
      break;
    case "DELETE":
      deleteItem(id, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "PATCH", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

async function getItem(id, res) {
  try {
    const response = await fetch(
      "https://shopping-list.banyard.tech/api/collections/item/records/" + id
    );
    const data = await response.json();
    if (response.status === 200) {
      res.status(200).json({
        id: data.id,
        title: data.title,
        description: data.description,
        created_by: data.created_by,
        group_id: data.group_id,
        completed: data.completed,
        assigned_to: data.assigned_to,
      });
    } else {
      res.status(500).json({ message: "There was a Error" });
    }
  } catch (error) {
    res.status(500).json({ message: "There was a Error" });
  }
}

async function updateItem(id, req, res) {
  const { title, description, created_by, group_id, completed, assigned_to } =
    req.body;
  try {
    const oldItemResponse = await fetch(
      "https://shopping-list.banyard.tech/api/collections/item/records/" + id
    );
    const oldItem = await oldItemResponse.json();
    const response = await fetch(
      "https://shopping-list.banyard.tech/api/collections/item/records/" + id,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title || oldItem.title,
          description: description || oldItem.description,
          created_by: created_by || oldItem.created_by,
          group_id: group_id || oldItem.group_id,
          completed: completed || oldItem.completed,
          assigned_to: assigned_to || oldItem.assigned_to,
        }),
      }
    );
    const data = await response.json();
    if (response.status === 200) {
      res.status(200).json({
        id: data.id,
        title: data.title,
        description: data.description,
        created_by: data.created_by,
        group_id: data.group_id,
        completed: data.completed,
        assigned_to: data.assigned_to,
      });
    } else {
      res.status(500).json({ message: "There was a Error" });
    }
  } catch (error) {
    res.status(500).json({ message: "There was a Error" });
  }
}

async function deleteItem(id, res) {
  try {
    const response = await fetch(
      "https://shopping-list.banyard.tech/api/collections/item/records/" + id,
      {
        method: "DELETE",
      }
    );
    if (response.status === 204) {
      res.status(200).json({ message: "Item Deleted" });
    } else {
      res.status(500).json({ message: "There was a Error" });
    }
  } catch (error) {
    res.status(500).json({ message: "There was a Error" });
  }
}
