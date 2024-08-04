import con from "../Components/dbcon"

export default function handler(req, res) {
    con.query('select * from RequestStudentAccess', (err, result, field) => {
        res.send(result)
    })
} 