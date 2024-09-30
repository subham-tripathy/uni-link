import con from "../Components/dbcon";
export default function handler(req, res) {
    con.query('select company_name from companies', (err, result, fields)=>{
        res.send(result)
    })
}
