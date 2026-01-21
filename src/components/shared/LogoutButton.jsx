'use client';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import React from 'react';

const LogoutButton = ({setToken}) => {
    const router = useRouter();
    const handleLogout = ()=> {
     Cookies.remove('auth_token');
     setToken(null);
        router.push('/login');
    }
    return (
        <button
        onClick={handleLogout}
        className='btn border-2 border-primary text-primary hover:bg-secondary hover:text-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 font-semibold'
        >
            Logout
            
        </button>
    );
};

export default LogoutButton;