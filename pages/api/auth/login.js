import bcrypt from "bcryptjs/dist/bcrypt";
import db from "../../../libs/database";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  const { email, password } = req.body;

  const checkUser = await db("user").where({ email }).first();
  if (!checkUser) return res.status(401).end();

  const checkPassword = await bcrypt.compare(password, checkUser.password);
  if (!checkPassword) return res.status(401).end();

  const token = jwt.sign(
    {
      id: checkUser.id,
      email: checkUser.email,
    },
    "codeUnikApiKey",
    {
      expiresIn: "1d",
    }
  );

  res.status(200);
  res.json({
    message: "Login Successfully",
    token,
  });
}
