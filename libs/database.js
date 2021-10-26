const knex = require('knex')({
    client: "mysql",
    connection: {
        host: "127.0.0",
        user: "root",
        password: "",
        database: "fullstack_nextjs"
    }
})

export default knex;