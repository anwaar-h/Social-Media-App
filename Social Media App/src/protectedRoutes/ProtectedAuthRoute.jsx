import React from 'react'
import { authContext } from '../contexts/AuthContext'
import { Navigate } from 'react-router-dom';
import { useState } from 'react';

export default function ProtectedAuthRoute({children}) {
    const {isLoggedIn} = useState(authContext)
    return isLoggedIn ? <Navigate to={"/"}/> : children ;
}
