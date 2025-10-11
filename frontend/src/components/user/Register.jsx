import React, { useState } from 'react'
import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaImage } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { IoIosLogIn } from "react-icons/io";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { base_url } from '../../baseUrl';

const Register = () => {

    const[name, setName] = useState()
    const[email, setEmail] = useState()
    const[password, setPassword] = useState()
    const[image, setImage] = useState()

    const navigate = useNavigate();

    const handleSubmit=async(e)=>{
        e.preventDefault()
        const formData = new FormData()
        formData.append('name', name)
        formData.append('email', email)
        formData.append('password', password)
        formData.append('image', image)
        const res = await axios.post(`${base_url}/api/user/register`, formData)
        if(res.data){
            navigate('/login')
        }
    }

  return (
    <div>
        <div className='flex items-center justify-center flex-col h-[75vh]'>
            <h1 className='text-center text-4xl font-bold text-neutral-700 py-5'>Sing Up</h1>
            <form onSubmit={handleSubmit}>
                <div className='flex items-center gap-2 mb-4 px-4 py-2 pl-0 border-b border-neutral-500'>
                    <FaUserAlt fontSize={25} />
                    <input 
                        type='text' 
                        placeholder='Your Name'
                        onChange={(e)=>setName(e.target.value)}
                        className='focus:outline-none w-full'
                     />
                </div>
                <div className='flex items-center gap-2 mb-4 px-4 py-2 pl-0 border-b border-neutral-500'>
                    <MdEmail fontSize={25} />
                    <input 
                        type='text' 
                        placeholder='Your Email'
                        onChange={(e)=>setEmail(e.target.value)}
                        className='w-full focus:outline-none'
                     />
                </div>
                <div className='flex items-center gap-2 mb-4 px-4 py-2 pl-0 border-b border-neutral-500'>
                    <RiLockPasswordFill fontSize={25} />
                    <input 
                        type='password' 
                        placeholder='Your Password'
                        onChange={(e)=>setPassword(e.target.value)}
                        className='w-full focus:outline-none'
                     />
                </div>
                <div className='flex items-center gap-2 mb-4 px-4 py-3 rounded-sm border-neutral-500 border border-dotted'>
                    <FaImage fontSize={25} />
                    <input 
                        type='file' 
                        className=''
                        onChange={(e)=>setImage(e.target.files[0])}
                     />
                </div>
                <button className=' flex items-center justify-center gap-2 font-semibold py-2 text-white bg-neutral-600 cursor-pointer hover:bg-neutral-900 duration-300 w-full rounded-sm'>
                    <IoIosLogIn fontSize={25} />Sign Up</button>
            </form>
            <p className='pt-1 font-sm '>Already Have An Account?<Link to='/login' className='text-blue-500 underline'>Login</Link></p>
        </div>
    </div>
  )
}

export default Register