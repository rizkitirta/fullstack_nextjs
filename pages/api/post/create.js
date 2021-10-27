import db from "../../../libs/database.js";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  try {
    const { title, content } = req.body;
    const result = await db("post").insert({
      title,
      content,
    });

    const data = await db("post").where("id", result).first();

    res.status(200);
    res.json({
      message: "Post Created Successfully",
      data
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
}
