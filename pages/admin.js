import { useRouter } from "next/router";
import React, { useEffect } from "react";
import NavBar from "./Components/NavBar";

const admin = () => {
  const router = useRouter();

  useEffect(() => {
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
    const unilinkuser = getCookie("unilinkuser");
    if (unilinkuser == "ADMIN" || unilinkuser == "admin") {
      const btn1 = document.querySelector("#REGISTERED-COMPANIES");
      const btn2 = document.querySelector("#STUDENT-ACCESS-REQUESTS");
      const btn3 = document.querySelector("#PENDING-APPLICATIONS");

      btn1.addEventListener("click", () => {
        document
          .querySelector("#PENDING-APPLICATIONS-OF-COMPANY-SECTION")
          .classList.add("hidden");
        document.querySelector("#accessRequests").classList.add("hidden");
        document
          .querySelector("#registeredCompanies")
          .classList.remove("hidden");
      });
      btn2.addEventListener("click", () => {
        document
          .querySelector("#PENDING-APPLICATIONS-OF-COMPANY-SECTION")
          .classList.add("hidden");
        document.querySelector("#registeredCompanies").classList.add("hidden");
        document.querySelector("#accessRequests").classList.remove("hidden");
      });
      btn3.addEventListener("click", () => {
        document.querySelector("#registeredCompanies").classList.add("hidden");
        document.querySelector("#accessRequests").classList.add("hidden");
        document
          .querySelector("#PENDING-APPLICATIONS-OF-COMPANY-SECTION")
          .classList.remove("hidden");
      });

      fetch("/api/admin")
        .then((res) => res.json())
        .then((data) => {
          data.forEach((element) => {
            const tr = document.createElement("tr");
            const cname = document.createElement("td");
            cname.style.paddingLeft = "20px";
            cname.style.paddingRight = "20px";
            cname.style.paddingTop = "10px";
            cname.style.paddingBottom = "10px";
            cname.style.border;
            const cid = document.createElement("td");
            cid.style.paddingLeft = "20px";
            cid.style.paddingRight = "20px";
            cid.style.paddingTop = "10px";
            cid.style.paddingBottom = "10px";
            cid.style.border;
            const cmail = document.createElement("td");
            cmail.style.paddingLeft = "20px";
            cmail.style.paddingRight = "20px";
            cmail.style.paddingTop = "10px";
            cmail.style.paddingBottom = "10px";
            cmail.style.border;
            const certificate = document.createElement("td");
            certificate.style.paddingLeft = "20px";
            certificate.style.paddingRight = "20px";
            certificate.style.paddingTop = "10px";
            certificate.style.paddingBottom = "10px";
            certificate.style.border;
            certificate.classList.add("CompanyCertificate");
            const verifyBTN = document.createElement("td");
            verifyBTN.style.paddingLeft = "20px";
            verifyBTN.style.paddingRight = "20px";
            verifyBTN.style.paddingTop = "10px";
            verifyBTN.style.paddingBottom = "10px";
            verifyBTN.style.border;

            const btn = document.createElement("button");
            btn.textContent = "Approve";
            btn.addEventListener("click", () => {
              fetch("/api/approveRegn?id=" + btn.id)
                .then((res) => res.json())
                .then((data) => {});
              alert("Successfully Approved !");
              window.location.href = "/admin";
            });
            btn.setAttribute("id", element.CompanyId);
            const btn1 = document.createElement("button");
            btn1.textContent = "Decline";
            btn1.addEventListener("click", () => {
              fetch("/api/desclineRegn?id=" + btn.id)
                .then((res) => res.json())
                .then((data) => {
                  console.log(data);
                });
              alert("Successfully Desclined !");
              window.location.href = "/admin";
            });
            btn1.setAttribute("id", element.CompanyId);
            verifyBTN.appendChild(btn);
            verifyBTN.appendChild(btn1);
            btn.style.backgroundColor = "#228B22";
            btn.style.padding = "7px";
            btn.style.borderRadius = "7px";
            btn.style.color = "white";
            btn.style.textShadow = "0 1px black";
            btn1.style.marginLeft = "20px";
            btn1.style.backgroundColor = "red";
            btn1.style.padding = "7px";
            btn1.style.borderRadius = "7px";
            btn1.style.color = "white";
            btn1.style.textShadow = "0 1px black";

            fetch("/api/getpdf?id=" + element.CompanyId)
              .then((response) => response.blob())
              .then((blob) => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = "file.pdf";
                a.textContent = "Download Certificate";
                certificate.appendChild(a);
              })
              .catch((error) => {
                console.error("Error fetching PDF:", error);
              });

            cname.textContent = element.CompanyName;
            cid.textContent = element.CompanyId;
            cmail.textContent = element.CompanyMail;

            tr.appendChild(cname);
            tr.appendChild(cid);
            tr.appendChild(cmail);
            tr.appendChild(certificate);
            tr.appendChild(verifyBTN);

            document.querySelector("tbody").appendChild(tr);
          });
        });

      fetch("/api/accessRequestsForAdmin")
        .then((res) => res.json())
        .then((data) => {
          data.forEach((element) => {
            const tr = document.createElement("tr");
            const cID = document.createElement("td");
            cID.textContent = element.CompanyId;
            const sID = document.createElement("td");
            sID.textContent = element.StudentRegnNumber;
            const status = document.createElement("td");
            status.textContent = element.status;
            const accessBTN = document.createElement("button");
            cID.style.paddingLeft = "20px";
            cID.style.paddingRight = "20px";
            cID.style.paddingTop = "10px";
            cID.style.paddingBottom = "10px";
            sID.style.paddingLeft = "20px";
            sID.style.paddingRight = "20px";
            sID.style.paddingTop = "10px";
            sID.style.paddingBottom = "10px";
            status.style.paddingLeft = "20px";
            status.style.paddingRight = "20px";
            status.style.paddingTop = "10px";
            status.style.paddingBottom = "10px";

            accessBTN.addEventListener("click", () => {
              fetch(
                "/api/accessStudentInfo?cid=" +
                  cID.textContent +
                  "&sid=" +
                  sID.textContent
              )
                .then((res) => res.json())
                .then((data) => {});
              window.location.href = "/admin";
            });
            const noAccessBTN = document.createElement("button");
            noAccessBTN.addEventListener("click", () => {
              fetch(
                "/api/denyStudentInfo?cid=" +
                  cID.textContent +
                  "&sid=" +
                  sID.textContent
              )
                .then((res) => res.json())
                .then((data) => {});
              window.location.href = "/admin";
            });

            noAccessBTN.textContent = "Deny";
            const actions = document.createElement("td");
            accessBTN.textContent = "Allow";
            accessBTN.style.backgroundColor = "#228B22";
            accessBTN.style.padding = "7px";
            accessBTN.style.borderRadius = "7px";
            accessBTN.style.color = "white";
            accessBTN.style.textShadow = "0 1px black";
            noAccessBTN.style.marginLeft = "20px";
            noAccessBTN.style.marginRight = "20px";
            noAccessBTN.style.marginBottom = "10px";
            noAccessBTN.style.backgroundColor = "red";
            noAccessBTN.style.padding = "7px";
            noAccessBTN.style.borderRadius = "7px";
            noAccessBTN.style.color = "white";
            noAccessBTN.style.textShadow = "0 1px black";

            actions.appendChild(accessBTN);
            actions.appendChild(noAccessBTN);

            tr.appendChild(cID);
            tr.appendChild(sID);
            tr.appendChild(status);
            tr.appendChild(actions);

            document.querySelector("#accessRequests tbody").appendChild(tr);
          });
        });

      fetch("/api/allRegisteredCompanies")
        .then((res) => res.json())
        .then((data) => {
          data.forEach((element) => {
            if (element.CompanyId != "ADMIN") {
              const tr = document.createElement("tr");
              const cid = document.createElement("td");
              cid.textContent = element.CompanyId;
              cid.style.paddingBottom = "10px";
              cid.style.paddingLeft = "20px";
              cid.style.paddingRight = "20px";
              const cname = document.createElement("td");
              cname.textContent = element.CompanyName;
              cname.style.paddingBottom = "10px";
              cname.style.paddingLeft = "20px";
              cname.style.paddingRight = "20px";
              const cmail = document.createElement("td");
              cmail.textContent = element.CompanyMail;
              cmail.style.paddingBottom = "10px";
              cmail.style.paddingLeft = "20px";
              cmail.style.paddingRight = "20px";
              const trustBTN = document.createElement("td");
              trustBTN.textContent = element.Trusted;
              trustBTN.style.paddingBottom = "10px";
              trustBTN.style.paddingLeft = "20px";
              trustBTN.style.paddingRight = "20px";
              const btn = document.createElement("button");
              if (element.Trusted == "yes") {
                btn.textContent = "Untrust";
                btn.style.backgroundColor = "red";
              } else {
                btn.textContent = "Trust";
                btn.style.backgroundColor = "#228B22";
              }
              btn.style.marginLeft = "10px";
              btn.style.padding = "7px";
              btn.style.borderRadius = "7px";
              btn.style.color = "white";
              btn.style.textShadow = "0 1px black";
              btn.addEventListener("click", () => {
                fetch("/api/trustCompany?id=" + cid.textContent);
                window.location.href = "/admin";
              });
              trustBTN.appendChild(btn);
              tr.appendChild(cid);
              tr.appendChild(cname);
              tr.appendChild(cmail);
              tr.appendChild(trustBTN);
              document
                .querySelector("#registeredCompanies tbody")
                .appendChild(tr);
            }
          });
        });
    } else {
      router.push("/");
    }
  }, []);

  return (
    <div>
      <NavBar />
      <div>
        <div className=" px-20 grid gap-52 grid-cols-3 my-10">
          <button
            id="PENDING-APPLICATIONS"
            className="text-xl font-bold py-3 bg-white text-[#5304fc] rounded"
          >
            PENDING APPLICATIONS
          </button>
          <button
            id="STUDENT-ACCESS-REQUESTS"
            className="text-xl font-bold py-3 bg-white text-[#5304fc] rounded"
          >
            STUDENT ACCESS REQUESTS
          </button>
          <button
            id="REGISTERED-COMPANIES"
            className="text-xl font-bold py-3 bg-white text-[#5304fc] rounded"
          >
            REGISTERED COMPANIES
          </button>
        </div>
        <section
          id="PENDING-APPLICATIONS-OF-COMPANY-SECTION"
          className="my-20 hidden"
        >
          <h1 className="font-bold text-white text-3xl text-center underline mb-10">
            PENDING APPLICATIONS OF COMPANY
          </h1>
          <table className="mx-auto">
            <tbody className="text-white border-2 border-white">
              <tr className="text-white border-2 border-white">
                <th
                  style={{
                    paddingBottom: "10px",
                    paddingTop: "10px",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                  }}
                >
                  COMPANY NAME
                </th>
                <th
                  style={{
                    paddingBottom: "10px",
                    paddingTop: "10px",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                  }}
                >
                  COMPANY ID
                </th>
                <th
                  style={{
                    paddingBottom: "10px",
                    paddingTop: "10px",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                  }}
                >
                  COMPANY MAIL
                </th>
                <th
                  style={{
                    paddingBottom: "10px",
                    paddingTop: "10px",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                  }}
                >
                  REGISTRATION CERTIFICATE
                </th>
                <th
                  style={{
                    paddingBottom: "10px",
                    paddingTop: "10px",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                  }}
                >
                  REGISTRATION STATUS
                </th>
              </tr>
            </tbody>
          </table>
        </section>
        <div id="pdf"></div>
      </div>

      <section id="accessRequests" className="text-white my-20">
        <h1 className="font-bold text-3xl text-center underline mb-10">
          STUDENT ACCESS REQUESTS OF COMPANY
        </h1>
        <table className="mx-auto">
          <tbody className="text-white border-2 border-white">
            <tr>
              <th
                style={{
                  paddingBottom: "10px",
                  paddingTop: "10px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                REQUESTED COMPANY
              </th>
              <th
                style={{
                  paddingBottom: "10px",
                  paddingTop: "10px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                STUDENT REGN NUMBER
              </th>
              <th
                style={{
                  paddingBottom: "10px",
                  paddingTop: "10px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                ACCESS STATUS
              </th>
              <th
                style={{
                  paddingBottom: "10px",
                  paddingTop: "10px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                ACTIONS
              </th>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="text-white my-20 hidden" id="registeredCompanies">
        <h1 className="font-bold text-3xl text-center underline mb-10">
          COMPANIES REGISTERED WITH US
        </h1>
        <table className="mx-auto">
          <tbody className="text-white border-2 border-white">
            <tr>
              <th
                style={{
                  paddingBottom: "10px",
                  paddingTop: "10px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                COMPANY NAME
              </th>
              <th
                style={{
                  paddingBottom: "10px",
                  paddingTop: "10px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                COMPANY ID
              </th>
              <th
                style={{
                  paddingBottom: "10px",
                  paddingTop: "10px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                COMPANY MAIL
              </th>
              <th
                style={{
                  paddingBottom: "10px",
                  paddingTop: "10px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                TRUSTED
              </th>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default admin;
