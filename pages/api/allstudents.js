import con from "../Components/dbcon";

export default function handler(req, res) {
    con.query('select * from student',(err, result, fields)=>{
        res.send(result)
    })
}
