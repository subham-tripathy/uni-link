import con from "../Components/dbcon";

export default function handler(req, res) {
    const { id } = req.query;
    con.query('DELETE FROM companyregnrequest WHERE CompanyId = ?', [id], (err, result, fields) => { })
}
