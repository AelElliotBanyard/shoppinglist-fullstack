export default async function handler(req, res) {
  const { method } = req;
  switch (method) {
    case "POST":
      createItem(req, res);
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

async function createItem(req, res) {
  const { title, description, created_by, group_id, completed, assigned_to } =
    req.body;
  if (!title || !description || !created_by || !group_id || !completed) {
    res.status(400).json({ message: "Missing required fields" });
    return;
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
