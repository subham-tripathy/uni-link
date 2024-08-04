import con from "../Components/dbcon";

export default function handler(req, res) {
    con.query('select * from users', (err, results, fields) => {
        res.send(results)
    })
}
