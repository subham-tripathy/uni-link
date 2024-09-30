import React, { useEffect } from 'react'
import NavBar from './Components/NavBar'

const getSGPA = () => {
    useEffect(()=>{
        const param = new URLSearchParams(window.l)
        fetch('/api/getSGPA?id=')
    })
    return (
        <div>
            <NavBar />

        </div>
    )
}

export default getSGPA