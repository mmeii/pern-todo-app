const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "3tierbhuvanamei",
  host: "localhost",
  port: 5432,
  database: "ToDoList"
});

module.exports = pool;
