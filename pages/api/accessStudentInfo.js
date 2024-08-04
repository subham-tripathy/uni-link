import con from "../Components/dbcon"

export default function handler(req, res) {
    const { cid, sid } = req.query
    con.query('UPDATE requeststudentaccess SET status = "yes" WHERE CompanyId = "' + cid + '" AND StudentRegnNumber = "' + sid + '"', (err, result, fields) => {
        res.send({ 'msg': 'UPDATE requeststudentaccess SET status = "yes" WHERE CompanyId = "' + cid + '" AND StudentRegnNumber = "' + sid + '"' })
    })
}
