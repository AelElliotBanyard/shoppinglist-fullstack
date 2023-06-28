async function createItem(
  title,
  description,
  created_by,
  group_id,
  completed,
  assigned_to
) {
  if (!title || !description || !created_by || !group_id || !completed) {
    throw new Error({ message: "Missing required fields" });
  }
  try {
    const response = await fetch(
      "https://shopping-list.banyard.tech/api/collections/item/records",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          created_by,
          group_id,
          completed,
          assigned_to: assigned_to || "",
        }),
      }
    );
    const data = await response.json();
    if (response.status === 200) {
      return {
        id: data.id,
        title: data.title,
        description: data.description,
        created_by: data.created_by,
        group_id: data.group_id,
        completed: data.completed,
        assigned_to: data.assigned_to,
      };
    } else {
      throw new Error({ message: "There was a Error" });
    }
  } catch (error) {
    throw new Error({ message: "There was a Error" });
  }
}

async function getItem(id) {
  try {
    const response = await fetch(
      "https://shopping-list.banyard.tech/api/collections/item/records/" + id
    );
    const data = await response.json();
    if (response.status === 200) {
      return {
        id: data.id,
        title: data.title,
        description: data.description,
        created_by: data.created_by,
        group_id: data.group_id,
        completed: data.completed,
        assigned_to: data.assigned_to,
      };
    } else {
      throw new Error({ message: "There was a Error" });
    }
  } catch (error) {
    throw new Error({ message: "There was a Error" });
  }
}

async function updateItem(
  id,
  title,
  description,
  created_by,
  group_id,
  completed,
  assigned_to
) {
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
      return {
        id: data.id,
        title: data.title,
        description: data.description,
        created_by: data.created_by,
        group_id: data.group_id,
        completed: data.completed,
        assigned_to: data.assigned_to,
      };
    } else {
      throw new Error({ message: "There was a Error" });
    }
  } catch (error) {
    throw new Error({ message: "There was a Error" });
  }
}

async function deleteItem(id) {
  try {
    const response = await fetch(
      "https://shopping-list.banyard.tech/api/collections/item/records/" + id,
      {
        method: "DELETE",
      }
    );
    if (response.status === 204) {
      return {
        message: "Item Deleted",
      };
    } else {
      throw new Error({ message: "There was a Error" });
    }
  } catch (error) {
    throw new Error({ message: "There was a Error" });
  }
}

export { createItem, getItem, updateItem, deleteItem };
