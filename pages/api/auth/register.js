import db from '../../../libs/database'
import bcrypt from 'bcryptjs'

export default async function handler(req,res)
{
    if(req.method !== 'POST') return res.status(405).end()

    const {email,password} = req.body
    const salt = bcrypt.genSaltSync(10)
    const passwordHash = bcrypt.hashSync(password,salt)

    const reg = await db('user').insert({
        email,
        password: passwordHash
    })

    const result = await db('user').where({id: reg}).first()

    console.log(passwordHash)
    res.status(200)
    res.json({
        message: "User Registered Successfully",
        data: result
    })
}