import db from "../../../libs/database.js";

export default async function handler(req, res) {
    if(req.method !== 'GET') return res.status(405).end()
  try {
    const posts = await db("post");
    res.status(200);
    res.json({
      message: "Success",
      data: posts,
    });
  } catch (e) {
    res.json({
      message: e.message,
    });
  }
}
