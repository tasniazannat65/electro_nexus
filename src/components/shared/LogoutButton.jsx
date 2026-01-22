'use client';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import React from 'react';

const LogoutButton = () => {
    const router = useRouter();
    const {setIsLoggedIn} = useAuth();
    const handleLogout = async()=> {
    await fetch('/api/auth/logout', {method: 'POST'});
    setIsLoggedIn(false);
    router.push('/login')
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