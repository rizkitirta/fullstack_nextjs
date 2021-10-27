import db from "../../../../libs/database";

export default async function handler(req, res) {
  if (req.method !== "PUT") return res.status(405).end();
  const { id } = req.query;
  const { title, content } = req.body;

  try {
    const result = await db("post").where({ id }).update({
      title,
      content,
    });

    const data = await db("post").where({ id }).first();

    res.status(200);
    res.json({
      message: "Post Updated Successfully",
      data: data,
    });
  } catch (e) {
    console.log(e.message);
  }
}
