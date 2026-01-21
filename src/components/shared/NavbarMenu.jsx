'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const NavbarMenu = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='dropdown'>
            <button
            onClick={()=> setOpen(!open)}
            className='btn btn-ghost lg:hidden hover:bg-primary/10 rounded-lg transition-all duration-200'
            aria-label='menu'
            >
                <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 text-neutral'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                >
                    {
                        open ? (
                            <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth="2"
                            d='M6 18L18 6M6 6l12 12'
                            >

                            </path>
                        ) : (
                            <path
                              strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth="2"
                            d='M4 6h16M4 12h8m-8 6h16'
                            >

                            </path>
                        )
                    }

                </svg>

            </button>

            {
                open && (
                    <ul
                    className='menu menu-sm dropdown-content bg-base-100 rounded-2xl mt-3 w-56 p-3 shadow-xl border border-base-300/50 backdrop-blur-sm'
                    aria-label='mobile-menu'
                    >
                        <li className='rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-200 font-medium py-3'>
                        <Link href={'/'}>
                        Home
                        </Link>
                            
                        </li>
                        <li className='rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-200 font-medium py-3'>
                        <Link href={'/items'}>
                        Items 
                        </Link>
                            
                        </li>
                        <li className='rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-200 font-medium py-3'>
                        <Link href={'/privacy'}>
                        Privacy
                        </Link>
                            
                        </li>
                        <li className='rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-200 font-medium py-3'>
                        <Link href={'/terms'}>
                        Terms
                        </Link>
                            
                        </li>
                   

                    </ul>
                )
            }
            
        </div>
    );
};

export default NavbarMenu;