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
    if (req.method === 'POST') {
        const { name, id, password } = req.query;
        con.query('select * from users where username = "' + id + '"', (err, result, fields) => {
            if (isEmpty(result)) {
                let qry = "insert into users values('" + name + "', '" + id + "', '" + password + "')";
                con.query(qry, (err, result, fields) => { })
                res.json({ 'msg': "signup success" })
            }
            else {
                res.json({ 'msg': "user exists" })
            }
        })
    }
    else {
        res.json({ 'msg': "request method error" })
    }
}