export default async function handler(req, res) {
  const { method } = req;
  switch (method) {
    case "POST":
      createGroup(req, res);
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

async function createGroup(req, res) {
  const { name, users } = req.body;
  const usersObj = users.split(",").map((user) => {
    return {
      name: user.trim(),
      id: Math.random().toString(36).substring(2, 6),
    };
  });
  const join_id = Date.now().toString();
  if (!name || !users) {
    res.status(400).json({ message: "Missing required fields" });
    return;
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
      res.status(200).json({
        id: data.id,
        join_id: data.join_id,
        name: data.name,
        users: JSON.parse(data.users),
      });
    } else {
      res.status(500).json({ message: "There was a Error" });
    }
  } catch (error) {
    res.status(500).json({ message: "There was a Error" });
  }
}
