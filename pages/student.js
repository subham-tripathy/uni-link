import React, { useEffect, useState } from 'react'
import NavBar from './Components/NavBar'
import Link from 'next/link'

const student = () => {
    const [access, setAccess] = useState(null)
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
        const dhuser = getCookie('dhuser');
        if (dhuser) {
            let sAccess = false
            const params = new URLSearchParams(location.search);
            const id = (params.get('id'))
            fetch('/api/checkAccess?stuId=' + id + '&cID=' + dhuser).then(res => res.json()).then(data => {
                data = data[0]
                if (data.status == 'no') {
                    alert('No Access')
                }
                else if (data.status == 'yes') {
                    setAccess(true)
                    sAccess = true
                }
            })








            setTimeout(() => {
                if (sAccess) {
                    fetch('/api/student?id=' + id).then(res => res.json()).then(data => {
                        data = data[0]
                        // console.log(data)
                        document.querySelector('#name').textContent = data.name
                        document.querySelector('#rollNo').textContent = data.roll_no
                        document.querySelector('#regnNo').textContent = data.regn_no
                        document.querySelector('#degreeBranch').textContent = data.degree_branch
                        document.querySelector('#yoj').textContent = data.degree_yoj
                        document.querySelector('#yop').textContent = data.degree_yop
                        document.querySelector('#degreeMark').textContent = data.degree_p / 10

                        document.querySelector('#tenthMarks').textContent = data.ssc_p
                        document.querySelector('#tenthpassingyear').textContent = data.ssc_passing_year
                        document.querySelector('#tenthcertificateID').textContent = data.ssc_certificate_id

                        document.querySelector('#twelveMarks').textContent = data.hsc_p
                        document.querySelector('#twelvepassingyear').textContent = data.hsc_passing_year
                        document.querySelector('#twelvecertificateID').textContent = data.hsc_certificate_id
                    })
                }
            }, 100);
        }

        else {
            alert('Please log in !')
            window.location.href = '/'
        }


    }, [])
    return (
        <div>
            <NavBar />

            {
                access ? (

                    <section id="studentData">



                        <div id="head" className='text-white text-shadow bg-blue-600 py-10'>
                            <h1 id='studentName'></h1>
                            <h3 id="email"></h3>
                            <h3 id="phno"></h3>
                        </div>


                        <section>
                            <h1 className='text-xl text-white bg-slate-400 text-shadow shadow shadow-black border-2 border-white w-max px-2 py-1 rounded'>Personal Info</h1>

                            <div id="personalInfo" className='m-5 font-semibold grid grid-cols-4 gap-5'>
                                <span>
                                    <label className='bg-white p-2 rounded-md shadow-md'>Name:</label>
                                    <p id="name" className='m-2'></p>
                                </span>
                                <span>
                                    <label className='bg-white p-2 rounded-md shadow-md'>Roll No:</label>
                                    <p id="rollNo" className='m-2'></p>
                                </span>
                                <span>
                                    <label className='bg-white p-2 rounded-md shadow-md'>Registration No:</label>
                                    <p id="regnNo" className='m-2'></p>
                                </span>
                            </div>
                        </section>





                        <section>
                            <h1 className='text-xl text-white bg-slate-400 text-shadow shadow shadow-black border-2 border-white w-max px-2 py-1 rounded'>University Info</h1>
                            <div id="uiversityData" className='m-5 font-semibold grid grid-cols-4 gap-5'>
                                <span>
                                    <label className='bg-white p-2 rounded-md shadow-md'>Degree Branch:</label>
                                    <p id="degreeBranch" className='m-2'></p>
                                </span>
                                <span>
                                    <label className='bg-white p-2 rounded-md shadow-md'>Degree Enrollment Date:</label>
                                    <p id="yoj" className='m-2'></p>
                                </span>
                                <span>
                                    <label className='bg-white p-2 rounded-md shadow-md'>Graduation Date:</label>
                                    <p id="yop" className='m-2'></p>
                                </span>
                                <span>
                                    <label className='bg-white p-2 rounded-md shadow-md'>Degree CGPA:</label>
                                    <p id="degreeMark" className='m-2'></p>
                                </span>







                                <span>
                                    <label className='bg-white p-2 rounded-md shadow-md'>10th Marks:</label>
                                    <p id="tenthMarks" className='m-2'></p>
                                </span>
                                <span>
                                    <label className='bg-white p-2 rounded-md shadow-md'>10th Passing Year:</label>
                                    <p id="tenthpassingyear" className='m-2'></p>
                                </span>
                                <span>
                                    <label className='bg-white p-2 rounded-md shadow-md'>10th Certificate ID:</label>
                                    <p id="tenthcertificateID" className='m-2'></p>
                                </span>




                                <br />




                                <span>
                                    <label className='bg-white p-2 rounded-md shadow-md'>12th Marks:</label>
                                    <p id="twelveMarks" className='m-2'></p>
                                </span>
                                <span>
                                    <label className='bg-white p-2 rounded-md shadow-md'>12th Passing Year:</label>
                                    <p id="twelvepassingyear" className='m-2'></p>
                                </span>
                                <span>
                                    <label className='bg-white p-2 rounded-md shadow-md'>12th Certificate ID:</label>
                                    <p id="twelvecertificateID" className='m-2'></p>
                                </span>
                            </div>
                        </section>



                    </section>




                ) : (


                    <h1 className='border-2 border-black text-3xl text-white text-shadow w-max mx-auto px-10 py-5 font-bold bg-red-500 mt-20'>Access to the data of this student is not allowed by our admin</h1>
                )
            }


        </div>
    )
}

export default student