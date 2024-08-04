import con from "../Components/dbcon"

export default function handler(req, res) {
    const { cID, stuID } = req.query
    con.query('select * from RequestStudentAccess where CompanyId = "' + cID + '" and StudentRegnNumber = "' + stuID + '" and status = "no"', (err, result, field) => {
        if (result.length == '0') {
            con.query('insert into RequestStudentAccess values("' + cID + '", "' + stuID + '", "no")', (err, result, fields) => { })
            if(!err){
                res.send({'msg':'requested to get access'})
            }
        }
        else{
            res.send({'msg':'already requested'})
        }
    })
} 