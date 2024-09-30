import React, { useEffect } from "react";
import NavBar from "./Components/NavBar";

const getStudentAccess = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const stuRegn = params.get("stuRegn");
    function getCookie(name) {
      const cookieString = document.cookie;
      const cookies = cookieString.split(";").map((cookie) => cookie.trim());
      for (const cookie of cookies) {
        if (cookie.startsWith(name + "=")) {
          return cookie.substring(name.length + 1);
        }
      }
      return null;
    }
    const companyID = getCookie("unilinkuser");
    fetch("/api/accessRequest?cID=" + companyID + "&stuID=" + stuRegn)
      .then((res) => res.json())
      .then((data) => {
        if (data.msg == "already requested") {
          window.location.href = "/student?id=" + stuRegn;
        } else if (data.msg == "limit reached") {
          alert("You have reached the limit of 5 requests");
          window.location.href = "/";
        } else if (data.msg == "requested to get access") {
          alert("Requested to get access of the student's data");
          window.location.href = "/";
        }
      });
  }, []);
  return (
    <div>
      <NavBar />
    </div>
  );
};

export default getStudentAccess;
