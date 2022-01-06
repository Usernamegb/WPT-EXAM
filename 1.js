const mysql=require("mysql");
const Promise=require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
const dbinfo={
    host:"localhost",
    user:"root",
    password:"cdac",
    database:"project1"

};
 
const connection=mysql.createConnection(dbinfo);
connection.connect();
console.log("hello World");
connection.end();