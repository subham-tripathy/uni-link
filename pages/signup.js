import { useRouter } from "next/router";
import React, { useEffect } from "react";
import NavBar from "./Components/NavBar";

const signup = () => {
    const router = useRouter();
    useEffect(() => {
        const inputCompanyCertificate = document.getElementById(
            "inputCompanyCertificate"
        );
        inputCompanyCertificate.addEventListener("click", () => {
            document.querySelector("#inputCompanyCertificate input").click();
        });

        const submitBTN = document.querySelector("form #submit");
        submitBTN.addEventListener("click", async (e) => {
            e.preventDefault();

            const cid = document.querySelector("#id").value;
            const cname = document.querySelector("#name").value;
            const cmail = document.querySelector("#companyMail").value;
            const cpassword = document.querySelector("#password").value;
            const ccpassword = document.querySelector("#cpassword").value;
            if (cpassword !== ccpassword) {
                alert("Passwords do not match");
                return;
            }

            try {
                const res = await fetch("/api/fetchcompanyname");
                const data = await res.json();
                let pass = false;
                for (const key in data) {
                    if (Object.hasOwnProperty.call(data, key)) {
                        const element = data[key];
                        for (const key in element) {
                            if (Object.hasOwnProperty.call(element, key)) {
                                const e = element[key];

                                if (
                                    cname.toLowerCase().trim() ===
                                    e.toLowerCase().trim()
                                ) {
                                    pass = true;
                                    break;
                                }
                            }
                        }
                        if (pass) break;
                    }
                }

                if (!pass) {
                    alert("Invalid Company");
                    return;
                }

                let otp;
                fetch("/api/sendOTP?email=" + cmail)
                    .then((res) => res.json())
                    .then((data) => {
                        otp = data.otp;
                        document
                            .querySelector("#optverifiation")
                            .classList.remove("hidden");
                        document
                            .querySelector("#optverifiation")
                            .classList.add("flex");
                    });

                async function afterotpgeneration() {
                    document
                        .getElementById("verifyOTPbtn")
                        .addEventListener("click", async () => {
                            if (
                                document.querySelector("#optverifiation input")
                                    .value == otp
                            ) {
                                const certificate =
                                    document.querySelector("#certificate")
                                        .files[0];
                                const formData = new FormData();
                                formData.append("pdf", certificate);

                                const uploadRes = await fetch(
                                    `/api/upload?cid=${cid}&cname=${cname}&cmail=${cmail}&cpassword=${cpassword}`,
                                    {
                                        method: "POST",
                                        body: formData,
                                    }
                                );

                                if (uploadRes.status === 200) {
                                    alert(
                                        "Successfully Applied for Registration"
                                    );
                                    router.push("/login");
                                } else {
                                    alert("Error Applying for Registration");
                                }
                            }
                        });
                }
                setTimeout(() => {
                    afterotpgeneration();
                }, 6000);
            } catch (error) {
                console.error("Error:", error);
                alert("An error occurred, please try again.");
            }
        });
    }, []);
    return (
        <div>
            <NavBar />
            <div
                id="signupForm"
                className="bg-[#00000080] border-4 border-white text-white rounded-2xl py-10 px-20 w-max mx-auto text-center mt-10"
            >
                <h1 className="text-4xl font-bold mb-10 underline">
                    Uni Link - Sign Up Page
                </h1>
                <form
                    encType="multipart/form-data"
                    className="grid grid-cols-2 gap-10 w-max mx-auto"
                >
                    <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Enter Company Name"
                        className="placeholder:text-black text-black border-2 rounded p-1 pl-3 text-lg w-96"
                    />

                    <input
                        id="id"
                        type="text"
                        name="id"
                        placeholder="Enter Company Id"
                        className="placeholder:text-black text-black border-2 rounded p-1 pl-3 text-lg w-96"
                    />

                    <input
                        id="companyMail"
                        type="email"
                        name="companyMail"
                        placeholder="Enter Company Mail"
                        className="placeholder:text-black text-black border-2 rounded p-1 pl-3 text-lg col-span-2"
                    />

                    <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Create Password"
                        className="placeholder:text-black text-black border-2 rounded p-1 pl-3 text-lg w-96"
                    />

                    <input
                        id="cpassword"
                        type="password"
                        name="cpassword"
                        placeholder="Confirm Password"
                        className="placeholder:text-black text-black border-2 rounded p-1 pl-3 text-lg w-96"
                    />

                    <span
                        id="inputCompanyCertificate"
                        className="bg-white text-black pt-5 rounded cursor-pointer col-span-2"
                    >
                        <label
                            htmlFor="certificate"
                            className=" font-bold text-lg w-96 cursor-pointer"
                        >
                            Upload Company Registration Certificate
                        </label>
                        <br />
                        <input
                            type="file"
                            name="certificate"
                            id="certificate"
                            className="invisible"
                        />
                    </span>
                    <button
                        id="submit"
                        className="shadow border-2 border-white text-white bg-[#5304fc] col-span-2 px-3 py-1 font-bold rounded w-max mx-auto text-shadow"
                    >
                        Sign Up
                    </button>
                </form>
            </div>

            <section
                id="optverifiation"
                className="fixed top-52 left-[430px] border-2 bg-cyan-400 flex-col px-10 py-14 rounded-xl text-4xl gap-5 shadow-lg shadow-cyan-400 z-10 font-bold text-center hidden dark:text-black"
            >
                <label>Enter Your OTP:</label>
                <input type="text" className="shadow shadow-black" />
                <button
                    id="verifyOTPbtn"
                    type="button"
                    className="text-xl w-max mx-auto px-3 py-1.5 rounded border-2"
                >
                    Verify OTP
                </button>
            </section>
        </div>
    );
};

export default signup;
