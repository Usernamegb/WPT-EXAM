const mysql=require("mysql");
const Promise=require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo={
    host:"localhost",
    user:"root",
    password:"cdac",
    database:"demo"
}

const addUser= async ()=>{
 const connection=mysql.createConnection(dbinfo);
 await connection.connectAsync();
 console.log("Hello");
 await connection.queryAsync(`Insert into demo values("Name","Password")`);
 await connection.endAsync();


}
addUser();