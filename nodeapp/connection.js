const mysql = require('mysql');

const con = mysql.createConnection({
    host: "database-3.colryw65jcfu.us-east-1.rds.amazonaws.com",
    user: "admin",
    database: "covid19",
    port: "3306",
    password: "12345678",
    connectionLimit: 15,
    queueLimit: 30,
    acquireTimeout: 1000000
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
module.exports=con;