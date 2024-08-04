import con from "../Components/dbcon";
export default function handler(req, res) {
    const { id } = req.query;

    const qry = "select * from student where regn_no = '" + id + "'";

    con.query(qry, (err, result, fields) => {
        res.send(result)
    })
}