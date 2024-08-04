const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "data-harmony",
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