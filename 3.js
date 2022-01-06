const mysql=require("mysql");
const Promise=require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo={
    host:"localhost",
    user:"root",
    password:"cdac",
    database:"demo"
}

const addUser=()=>{
    const connection=mysql.createConnection(dbinfo);
    connection.connect();
    const sql=`Insert into demo (username,password) values ("Gaurav","cdac")`;
    connection.query(sql);
    console.log("Record Added");
    connection.end();
}

addUser();