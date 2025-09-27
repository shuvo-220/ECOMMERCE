import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../redux/slice/userSlice';

const AllUsers = () => {

  const dispatch = useDispatch();
  const{isLoading, users, error} = useSelector(state=>state.users)
  
  useEffect(()=>{
    dispatch(getUsers())
  },[dispatch])

  return (
    <div>
          <h1 className='text-2xl font-semibold py-2 text-gray-700'>All Users</h1>
    
          <div className='overflow-x-auto rounded-sm'>
            <table className='w-full text-sm text-center text-gray-600'>
              <thead className='text-xs text-gray-600 bg-gray-200'>
                <tr>
                 
                  <th className='px-6 py-3'>Name</th>
                  <th className='px-6 py-3'>Email</th>
                  <th className='px-6 py-3'>Role</th>
               
                </tr>
              </thead>
              <tbody>
                {users.map((user ,index)=>(
                  <tr key={index}>
                  <td className='px-6 py-4 font-medium text-gray-800'>{user.name}</td>
                  <td className='px-6 py-4 font-medium text-gray-800'>{user.email}</td>
                  <td className='px-6 py-4 font-medium text-green-500'>{user.role}</td>
                </tr>
                ))}
                
              </tbody>
            </table>
          </div>
    
        </div>
  )
}

export default AllUsers