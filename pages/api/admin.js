import con from "../Components/dbcon";
export default function handler(req, res) {
  con.query(
    "select CompanyName, CompanyId, CompanyMail from companyregnrequest",
    (err, result, fields) => {
      if (err) {
        console.log("error in admin api");
        // console.log(err);
      } else {
        res.send(result);
      }
    }
  );
}
