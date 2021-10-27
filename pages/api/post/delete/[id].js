import db from "../../../../libs/database";

export default async function handler(req, res) {
  if (req.method !== "DELETE") return res.status(405).end();

  const { id } = req.query;
  const result = await db("post").where({ id }).del();

  res.status(200);
  res.json({
    message: "Post Deleted Successfully",
  });
}
