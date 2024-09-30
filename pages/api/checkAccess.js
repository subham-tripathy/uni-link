import con from "../Components/dbcon";

export default function handler(req, res) {
  const { cID, stuId } = req.query;
  con.query(
    "select * from users where CompanyId = '" + cID + "'",
    (err, result, fields) => {
      if (result[0].Trusted == "yes") {
        res.send([{ status: "yes" }]);
      } else {
        con.query(
          'select * from RequestStudentAccess where CompanyId = "' +
            cID +
            '" and StudentRegnNumber = "' +
            stuId +
            '"',
          (err, result, fields) => {
            if (result.length == "0") {
              res.send([{ status: "no" }]);
            } else {
              res.send(result);
            }
          }
        );
      }
    }
  );
}
