import con from "../Components/dbcon";

function isEmpty(obj) {
    for (const prop in obj) {
        if (Object.hasOwn(obj, prop)) {
            return false;
        }
    }
    return true;
}

export default function handler(req, res) {
    const { id, password } = req.query;
    con.query('select * from users where CompanyId = "' + id + '"', (err, result, fields) => {
        console.log(result)
        if (isEmpty(result)) {
            res.send({ 'msg': 'user doesn\'t exists', })
        }
        else{
            if (password.toLowerCase() === result[0].CompanyPassword.toLowerCase()){
                res.send({ 'msg': 'login success', })
            }
            else{
                res.send({ 'msg': 'wrong password', })
            }
        }
    })
}