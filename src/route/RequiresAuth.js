import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';

const RequiresAuth = ({children}) => {
    const location = useLocation();
    const user = JSON.parse(localStorage.getItem('user'));
    return user?.token ? children : <Navigate to='/signin' state={{from:location}} />
}

export default RequiresAuth;