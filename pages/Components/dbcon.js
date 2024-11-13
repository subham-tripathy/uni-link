const mysql = require('mysql2');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "unilink",
});

con.connect((err) => {
    if (err) {
        console.log("Error")
    }
    else {
        console.log("Success")
    }
})

export default con;