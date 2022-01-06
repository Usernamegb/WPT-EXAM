const mysql=require("mysql");
const Promise=require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo={
    host:"localhost",
    user:"root",
    password:"cdac",
    database:"demo"
}


const connection=mysql.createConnection(dbinfo);
connection.connect();
//const query="Insert into demo values('Hello','hi')";
const sql=`Insert into demo values("Hello","Hi")`;
connection.query(sql);
console.log("Done");
connection.end();