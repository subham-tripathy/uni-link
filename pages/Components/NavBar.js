import Link from "next/link";
import React, { useEffect, useState } from "react";

const NavBar = () => {
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
    });

    return (
        <div className="sticky top-0 pl-5 pr-10 py-5 flex items-center justify-between bg-[#5c04fc] text-white">
            <Link href={"/"}>
                <h1 className="text-3xl font-bold">Uni Link</h1>
            </Link>
            <div className="flex items-center"></div>
            <ul className="flex items-center space-x-3">
                {unilinkuser ? (
                    <>
                        <Link
                            className="text-xl hover:bg-white hover:text-[#5304fc] px-3 py-1 rounded font-bold"
                            href={"/"}
                        >
                            Hi, {unilinkuser}
                        </Link>
                        <Link
                            className="text-xl hover:bg-white hover:text-[#5304fc] px-3 py-1 rounded font-bold"
                            href={"/"}
                        >
                            <li>Home</li>
                        </Link>
                        <Link
                            className="text-xl hover:bg-white hover:text-[#5304fc] px-3 py-1 rounded font-bold"
                            href={"/about"}
                        >
                            <li>About</li>
                        </Link>
                        <Link
                            className="text-xl hover:bg-white hover:text-[#5304fc] px-3 py-1 rounded font-bold"
                            href={"/logout"}
                        >
                            Logout
                        </Link>
                    </>
                ) : (
                    <>
                        <Link
                            className="text-xl hover:bg-white hover:text-[#5304fc] px-3 py-1 rounded font-bold"
                            href={"/"}
                        >
                            <li>Home</li>
                        </Link>
                        <Link
                            className="text-xl hover:bg-white hover:text-[#5304fc] px-3 py-1 rounded font-bold"
                            href={"/login"}
                        >
                            Sign In
                        </Link>
                        <Link
                            className="text-xl hover:bg-white hover:text-[#5304fc] px-3 py-1 rounded font-bold"
                            href={"/about"}
                        >
                            <li>About</li>
                        </Link>
                    </>
                )}
            </ul>
        </div>
    );
};

export default NavBar;
