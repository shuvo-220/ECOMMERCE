import React, { useState } from 'react'
import { IoIosLogIn } from 'react-icons/io';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { base_url } from '../../baseUrl';

const Login = () => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const navigate = useNavigate();
    const location = useLocation()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(`${base_url}/api/user/login`, { email, password })
            if (res.data) {
                localStorage.setItem('user', JSON.stringify(res.data.user))
                localStorage.setItem('token', res.data.token)
                if (location.state?.from) {
                    navigate(location.state.from, { replace: true })
                } else if (res.data.user.role === 'admin') {
                    navigate('/admin')
                } else {
                    navigate('/')
                }

            }
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div>
            <div className='flex items-center justify-center h-[75vh] flex-col'>
                <h1 className='text-center text-4xl font-bold text-neutral-700 py-5'>Login</h1>
                <form onSubmit={handleSubmit}>

                    <div className='flex items-center gap-2 mb-4 px-4 py-2 pl-0 border-b border-neutral-500'>
                        <MdEmail fontSize={25} />
                        <input
                            type='text'
                            placeholder='Your Email'
                            onChange={(e) => setEmail(e.target.value)}
                            className='w-full focus:outline-none'
                        />
                    </div>
                    <div className='flex items-center gap-2 mb-4 px-4 py-2 pl-0 border-b border-neutral-500'>
                        <RiLockPasswordFill fontSize={25} />
                        <input
                            type='password'
                            placeholder='Your Password'
                            onChange={(e) => setPassword(e.target.value)}
                            className='w-full focus:outline-none'
                        />
                    </div>

                    <button className=' flex items-center justify-center gap-2 font-semibold py-2 text-white bg-neutral-600 cursor-pointer hover:bg-neutral-900 duration-300 w-full rounded-sm'>
                        <IoIosLogIn fontSize={25} />Login</button>
                </form>
                <p className='pt-1 font-sm '>Don't Have An Account?<Link to='/register' className='text-blue-500 underline'>Signup</Link></p>
            </div>
        </div>
    )
}

export default Login