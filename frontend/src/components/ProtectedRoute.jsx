import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children, role}) => {

    const user = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('token');

    if(!token){
        return <Navigate to='/login' replace />
    }
    if(role && user?.role !== role){
        return <Navigate to='/' replace />
    }
    return children;

}

export default ProtectedRoute