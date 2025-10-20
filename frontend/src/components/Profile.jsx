import React from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {

    const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null

  return (
    <div>
        <div className='flex items-center justify-center h-screen'>
            <div>
                <img src={user.image} className='w-[250px] h-[250px]' />
            </div>
            <div>
                <h2 className='text-lg font-semibold text-gray-600'>{user.name}</h2>
                <p className='text-md text-gray-600 py-2 rounded-sm text-sm'>{user.email}</p>
                <Link className='py-1 px-2 bg-gray-200'>Settings</Link>
            </div>
        </div>
    </div>
  )
}

export default Profile