import React from 'react'

const AllUsers = () => {
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
                <tr>
                  <td className='px-6 py-4 font-medium text-gray-800'>Shuvo</td>
                  <td className='px-6 py-4 font-medium text-gray-800'>email@gmail.com</td>
                  <td className='px-6 py-4 font-medium text-gray-800'>User</td>
                </tr>
              </tbody>
            </table>
          </div>
    
        </div>
  )
}

export default AllUsers