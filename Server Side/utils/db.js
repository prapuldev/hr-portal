import mysql from "mysql";

const con = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "",
  database: process.env.DB_NAME || "employeems",
});

con.connect(function (err) {
  if (err) {
    console.error("connection error:", err);
  } else {
    console.log("MySQL Connected");
  }
});

export default con;
