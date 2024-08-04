import con from "../Components/dbcon"

export default function handler(req, res) {
    const { sid } = req.query
    con.query('select * from StudentSGPA ', (err, result, fields) => {
        res.send(result)
    })
}
