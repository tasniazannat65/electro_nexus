'use client';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const LoginForm = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState('');
    const {setIsLoggedIn} = useAuth();

    const handleLogin = async (e)=> {
        e.preventDefault();
        const res = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},

            body: JSON.stringify({email, password}),
        })
        const data = await res.json();

        if(!res.ok){
            setErr(data.message || 'Login failed');
            return;

           
        }
       setIsLoggedIn(true);
       router.push('/');
    }
 
    return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-base-100 to-base-200'>
        <div className='w-full max-w-md p-8 bg-base-200 rounded-xl shadow-lg border border-base-300'>
            <div className='text-center mb-8'>
                <h1 className='text-3xl font-extrabold'>
                    Sign in to ElectroNexus

                </h1>
                <p className='text-neutral/70 mt-2'>
                   Access your account to manage products easily

                </p>

            </div>
            {err && <p className='text-red-500 mb-3'>{err}</p>}
            <form onSubmit={handleLogin}
            className='space-y-4'
            >
                <div>
                    <label className='block text-sm font-medium mb-2'>
                        Email
                    </label>
                    <input type="email" value={email}  placeholder='you@example.com'
                    onChange={(e)=> setEmail(e.target.value)}
                    required
                    className='input w-full'
                    />
                </div>
                <div>
                    <label className='block text-sm font-medium mb-2'>
                        Password 
                    </label>
                    <input type="password" value={password}  placeholder='********'
                    onChange={(e)=> setPassword(e.target.value)}
                    required
                    className='input w-full'
                    />
                </div>
                <button className='btn btn-primary w-full mt-2' type='submit'>
                    Login
                </button>
            </form>
            <p className='text-sm text-neutral mt-4'>
                Demo Credential: <br />
                <span className='font-bold'>admin@example.com</span> / {" "}
                <span className='font-bold'>123456</span>

            </p>

        </div>

    </div>

    );
};

export default LoginForm;