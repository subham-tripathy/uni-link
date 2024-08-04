import React, { useEffect } from 'react'
import NavBar from './Components/NavBar'
import Link from 'next/link'

const login = () => {
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
            alert('You already logged in !')
            window.location.href = '/'
        }
        else {
            const form = document.querySelector('form');
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                console.log('formsubmitted')
                const id = document.querySelector('input#id').value
                const password = document.querySelector('input#password').value
                fetch('/api/login?id=' + id + '&password=' + password).then(res => res.json()).then(data => {
                    if (data.msg === 'login success') {
                        alert('Successfully Logged In')
                        document.cookie = "dhuser=" + id + "; expires=7; path=/; secure";
                        window.location.href = '/'
                    }
                    else if (data.msg === 'user doesn\'t exists') {
                        alert('User does not exist, Please Sign Up')
                        window.location.href = '/signup'
                    }
                    else if (data.msg === 'wrong password') {
                        alert('Please Enter correct password')
                    }
                })
            })
        }
    })


    return (
        <div >
            <NavBar />
            <div className='border-4 border-black dark:border-white glow-cyan rounded-2xl py-10 px-20 w-max mx-auto text-center mt-10'>
                <h1 className='text-4xl font-bold mb-20 underline'>Data Harmony - Login Page</h1>
                <form className='flex flex-col gap-7 w-max mx-auto'>
                    <input id='id' type="text" name='id' placeholder='Enter User Id' className='placeholder:text-black text-black border-2 border-black dark:border-white bg-slate-300 rounded p-1 pl-3 text-lg' />
                    <input id='password' type="password" name='password' placeholder='Enter Password' className='placeholder:text-black text-black border-2 border-black dark:border-white bg-slate-300 rounded p-1 pl-3 text-lg' />
                    <Link href={'/signup'} className='font-semibold text-lg text-shadow text-white'>Click for Industry Registration</Link>
                    <button type="submit" className='shadow shadow-slate-500 hover:shadow-black text-white bg-cyan-400 px-3 py-1 font-bold rounded w-max mx-auto text-shadow'>Login</button>
                </form>
            </div>
        </div >
    )
}

export default login