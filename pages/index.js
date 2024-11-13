import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import NavBar from "./Components/NavBar";
import HeroSection from "./Components/HeroSection";

const index = () => {
    const router = useRouter();
    const [unilinkuser, setunilinkuser] = useState(null);

    useEffect(() => {
        function getCookie(name) {
            const cookieString = document.cookie;
            const cookies = cookieString
                .split(";")
                .map((cookie) => cookie.trim());
            for (const cookie of cookies) {
                if (cookie.startsWith(name + "=")) {
                    return cookie.substring(name.length + 1);
                }
            }
            return null;
        }
        let a = getCookie("unilinkuser");
        setunilinkuser(a);

        if (a) {
            if (a.toLowerCase() == "admin") {
                router.push("/admin");
            }
        }
    }, []);
    return (
        <div>
            <NavBar />
            <HeroSection />
            {unilinkuser && unilinkuser != "ADMIN" ? (
                <section id="searchStudent" className="mt-20">
                    <form
                        id="searchStudentForm"
                        action="getStudentAccess"
                        className="bg-[#00000080] border-2 border-white rounded-xl w-max mx-auto p-10 flex flex-col font-semibold text-xl gap-3 shadow-md shadow-black text-white"
                    >
                        <label htmlFor="stuRegn" className="text-2xl">
                            Enter student Registration Number to search:{" "}
                        </label>
                        <input
                            type="search"
                            name="stuRegn"
                            id="stuRegn"
                            className="dark:text-black shadow shadow-black p-2 rounded pl-3"
                            placeholder="Student Registration Number: "
                        />
                        <button
                            type="submit"
                            className="py-2 px-4 shadow-md shadow-black rounded mt-5 bg-[#5304fc] w-max mx-auto"
                        >
                            Search Student
                        </button>
                    </form>
                </section>
            ) : (
                ""
            )}
        </div>
    );
};

export default index;
