import con from "../Components/dbcon";

export default function handler(req, res) {
    const { cID, stuId } = req.query;
    con.query('select * from RequestStudentAccess where CompanyId = "' + cID + '" and StudentRegnNumber = "' + stuId + '"', (err, result, fields) => {
        res.send(result)
    })
}
