import React, { useEffect } from 'react'
import NavBar from './Components/NavBar'

const findFilterStudents = () => {
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const mincgpa = (params.get('mincgpa'))
        const branch = (params.get('branch'))
        const studentsnumber = (params.get('studentsnumber'))

        fetch('/api/filterstudents?mincgpa=' + mincgpa + '&branch=' + branch + '&stuno=' + studentsnumber).then(res => res.json()).then(data => {
            console.log(data)
        })
    })
    return (
        <div>
            <NavBar />
        </div>
    )
}

export default findFilterStudents