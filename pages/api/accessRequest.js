import con from "../Components/dbcon";

export default function handler(req, res) {
  const { cID, stuID } = req.query;
  con.query(
    "select * from users where CompanyId = '" + cID + "'",
    (err, result, fields) => {
      if (result[0].Trusted == "yes") {
        res.send({ msg: "already requested" });
      } else {
        con.query(
          'select * from RequestStudentAccess where CompanyId = "' +
            cID +
            '" and StudentRegnNumber = "' +
            stuID +
            '"',
          (err, result, field) => {
            if (result.length == "0") {
              con.query(
                'insert into RequestStudentAccess values("' +
                  cID +
                  '", "' +
                  stuID +
                  '", "no")',
                (err, result, fields) => {}
              );
              if (!err) {
                res.send({ msg: "requested to get access" });
              }
            } else if (result.length == "5") {
              res.send({ msg: "limit reached" });
            } else {
              res.send({ msg: "already requested" });
            }
          }
        );
      }
    }
  );
}
