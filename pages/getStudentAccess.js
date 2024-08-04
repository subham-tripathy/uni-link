import React, { useEffect } from 'react'
import NavBar from './Components/NavBar'

const getStudentAccess = () => {
    useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        const stuRegn = (params.get('stuRegn'))
        const companyID = (params.get('companyID'))
        fetch('/api/accessRequest?cID=' + companyID + '&stuID=' + stuRegn).then(res => res.json()).then(data => {
            if (data.msg == 'already requested') {
                window.location.href = '/student?id=' + stuRegn
            }
            else if ('requested to get access') {
                alert('Requested to get access of the student\'s data')
                window.location.href = '/student?id=' + stuRegn
            }
        })
    }, [])
    return (
        <div>
            <NavBar />
        </div>
    )
}

export default getStudentAccess