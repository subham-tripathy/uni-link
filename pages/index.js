import React, { useEffect, useState } from 'react'
import NavBar from './Components/NavBar'
import HeroSection from './Components/HeroSection'

const index = () => {
  const [dhuser, setdhuser] = useState(null)

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
    let a = getCookie('dhuser')
    setdhuser(a)

    if (a) {
      if (a.toLowerCase() == 'admin') {
        window.location.href = '/admin'
      }
    }

    setTimeout(() => {
      if (a) {
        document.getElementById('companyID').value = a;
      }
    }, 500);
  }, [])
  return (
    <div>
      <NavBar />
      <HeroSection />
      {
        dhuser ? (
          <section id="searchStudent" className='my-20'>
            <form id='searchStudentForm' action='getStudentAccess' className='border-2 border-black rounded-xl w-max mx-auto p-10 flex flex-col font-semibold text-xl gap-3 shadow-md shadow-black'>
              <input type="text" id="companyID" name='companyID' className='invisible' />
              <label htmlFor="stuRegn" className='text-2xl'>Enter student Registration Number to search: </label>
              <input type="search" name="stuRegn" id="stuRegn" className='shadow shadow-black p-2 rounded pl-3' placeholder='Student Registration Number: ' />
              <button type='submit' className='py-2 px-4 shadow-md shadow-black rounded mt-5 bg-cyan-400 w-max mx-auto'>Search Student</button>
            </form>
          </section>
        ) : ('')
      }
    </div>
  )
}

export default index