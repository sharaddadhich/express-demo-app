const pg = require('pg')

const pool = new pg.Pool({
	user: "demodb",
	host: "localhost",
	database: "demodb",
	password: "demodb",
	port: "5432"
})

pool.query("select now()", (err, res) => {
	console.log('err: ' + err)
	console.log(res)
	pool.end()
})
