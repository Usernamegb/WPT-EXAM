const mysql=require("mysql");//file inported and stored in object
const Promise=require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
 
const db={
    host:"localhost",
    user:"root",
    password:"cdac",
    database:"demo"
}

const connection=mysql.createConnection(db);
connection.connect();
console.log("hello");
connection.end();

const addUser=()=>{
    const connection=mysql.createConnection(db);
    connection.connect();
    console.log("Hello");
    connection.end();
}

addUser();
