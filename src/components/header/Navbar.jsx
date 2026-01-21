'use client';
import React, { useEffect, useState } from 'react';
import NavbarMenu from '../shared/NavbarMenu';
import Link from 'next/link';
import LogoutButton from '../shared/LogoutButton';
import Cookies from 'js-cookie';
import { usePathname } from 'next/navigation';



const Navbar = () => {
    const pathname = usePathname();
    const [token, setToken] = useState(null);
    const [mounted, setMounted] = useState(false);
    useEffect(()=> {
        setMounted(true);
       setToken(Cookies.get('auth_token') || null);
       
       const interval = setInterval(()=> {
        setToken(Cookies.get('auth_token') || null);
       }, 800)
       return () => clearInterval(interval);

    }, [])
    if(!mounted){
        return null;
    }
    const navLinkClass = (path)=> `
    rounded-lg px-3 py-2 font-medium transition-all duration-200 ${
        pathname === path ? 'bg-primary/20 text-primary' : 'hover:bg-primary/10 hover:text-primary'
    }
    `
    return (
        <nav className='bg-base-100/80 backdrop-blur-sm shadow border-b border-base-300/50 fixed left-0 w-full z-50'>
            <div className='max-w-7xl mx-auto px-4'>
                <div className='flex items-center justify-between h-16'>
                    <div className='flex items-center gap-2'>
                        <NavbarMenu/>
                        <Link href={'/'} 
                        className='text-xl font-bold normal-case hover:scale-105 transition-transform'

                        >
                        <span className='bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'>

                            ElectroNexus
                        </span>
                        </Link>

                    </div>

                    <div className='hidden lg:flex absolute left-1/2 transform -translate-x-1/2'>
                    <ul className='menu menu-horizontal px-1 gap-2'>
                        <li>
                            <Link href={'/'} className={navLinkClass('/')}>
                            Home 
                            
                            </Link>
                        </li>
                        <li>
                            <Link href={'/items'} className={navLinkClass('/items')}>
                            Items
                            
                            </Link>
                        </li>
                        <li>
                            <Link href={'/terms'} className={navLinkClass('/terms')}>
                            Terms
                            
                            </Link>
                        </li>
                        <li>
                            <Link href={'/privacy'} className={navLinkClass('/privacy')}>
                            Privacy
                            
                            </Link>
                        </li>
                      

                    </ul>

                    </div>
                    <div className='flex items-center gap-3'>
                
                        {
                            token ? (
                                <>
                    <Link href={'/add_item'} 
                        className='btn btn-primary rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 font-semibold'
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

                            Add Item
                        
                        </Link>
                                                                                        <LogoutButton setToken={setToken}/>


                                
                                </>
                            ) : (
                                <Link href={'/login'}     className='btn border-2 border-primary text-primary hover:bg-secondary hover:text-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 font-semibold'>
                                Login</Link>
                            )
                        }

                    </div>

                </div>

            </div>
            
        </nav>
    );
};

export default Navbar;