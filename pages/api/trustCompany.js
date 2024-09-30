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
  const { id } = req.query;
  console.log("id:" + id);
  con.query(
    "select * from users where CompanyId = '" + id + "'",
    (err, result, fields) => {
      if (isEmpty(result)) {
        res.json({ msg: "error" });
      } else if (result[0].Trusted == "yes") {
        con.query(
          "UPDATE users SET Trusted = 'no' WHERE CompanyId = '" + id + "'",
          (err, result, fields) => {
            if (err) {
              res.json({ msg: "error" });
            } else {
              res.json({ msg: "success" });
            }
          }
        );
      } else {
        con.query(
          "UPDATE users SET Trusted = 'yes' WHERE CompanyId = '" + id + "'",
          (err, result, fields) => {
            if (err) {
              res.json({ msg: "error" });
            } else {
              res.json({ msg: "success" });
            }
          }
        );
      }
    }
  );
}
