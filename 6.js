const mysql=require("mysql");
const Promise=require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo={
    host:"localhost",
    user:"root",
    password:"cdac",
    database:"demo"
}
const user={
    username:"Name",
    password:"password"
}
const query=`Insert into demo values(?,?)`;

const addUser=(user)=>{
    const connection=mysql.createConnection(dbinfo);
      connection.connect();
      console.log("Connected");
      const sql=query;
      connection.query(sql,[user.username,user.password]);
      connection.end();
}
addUser(user);

