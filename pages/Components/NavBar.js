import Link from 'next/link'
import React, { useEffect, useState } from 'react'


const NavBar = () => {
  const [uniLinkUser, setuniLinkUser] = useState(null)

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
    let a = getCookie('uniLinkUser')
    setuniLinkUser(a)
  });


  return (
    <div className='pl-5 pr-10 py-5 flex items-center justify-between'>
      <Link href={'/'}><h1 className='text-3xl font-bold dark:text-white'>Uni Link</h1></Link>
      <div className='flex items-center'>
      </div>
      <ul className='flex items-center space-x-3'>
        <Link className='text-xl px-3 py-1 rounded font-bold text-shadow-sm' href={'/'}><li>Home</li></Link>

        {
          uniLinkUser ?
            (
              <>
                <Link className='text-xl px-3 py-1 rounded font-bold text-shadow-sm' href={'/'}>Hi, {uniLinkUser}</Link>
                <Link className='text-xl px-3 py-1 rounded font-bold text-shadow-sm' href={'/logout'}>Logout</Link>
              </>
            )
            :
            (<Link className='text-xl px-3 py-1 rounded font-bold text-shadow-sm' href={'/login'}>Sign In</Link>)
        }

        <Link className='text-xl px-3 py-1 rounded font-bold text-shadow-sm' href={'/about'}><li>About</li></Link>
      </ul>
    </div>
  )
}

export default NavBar