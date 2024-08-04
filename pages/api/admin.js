import con from "../Components/dbcon";
export default function handler(req, res) {
    con.query('select CompanyName, CompanyId, CompanyMail from companyregnrequest', (err, result, fields) => {
        res.send(result)
    })
}
