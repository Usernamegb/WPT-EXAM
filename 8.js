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
    username:"name",
    password:"password"
}
const addUser=async ()=>{
    const connection=mysql.createConnection(dbinfo);
    await connection.connectAsync();
    console.log("Hello");
    
    //const sql=`select * from demo`;
    //const list=await connection.queryAsync(sql);
    console.log("query executed");
    //console.log(list);
   const sql=`Insert into demo values("Hi","Hello")`;
   await connection.queryAsync(sql);
   //console.log(item);
    await connection.endAsync();
}



addUser();