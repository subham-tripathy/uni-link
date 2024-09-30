import React, { useEffect } from 'react'

const logout = () => {
    useEffect(() => {
        function getCookie(name) {
            const cookieString = document.cookie;
            const cookies = cookieString.split(";").map(cookie => cookie.trim());
            for (const cookie of cookies) {
                if (cookie.startsWith(name + "=")) {
                    return cookie.substring(name.length + 1);
                }
            }
            return null;
        }
        const unilinkuser = getCookie('unilinkuser');
        if (unilinkuser) {
            document.cookie = "unilinkuser=" + unilinkuser + "; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
            alert('Successfully logged out !')
            window.location.href = '/'
        }
        else {
            window.location.href = '/'
        }
    })
    return (
        <div></div>
    )
}

export default logout