import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const categories = [
  {
    name: "Smartphones",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80",
    count: "150+ Products",
    gradient: "from-primary/80 to-primary/40",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: "Laptops",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80",
    count: "80+ Products",
    gradient: "from-accent/80 to-accent/40",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: "Audio Devices",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    count: "120+ Products",
    gradient: "from-secondary/80 to-secondary/40",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
  },
  {
    name: "Smart Accessories",
    image: "https://images.unsplash.com/photo-1628260630453-da5cf1ff5209?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    count: "200+ Products",
    gradient: "from-primary/80 to-accent/40",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const Categories = () => {
    return (
        <div className='relative overflow-hidden'>
            <div className='absolute inset-0 opacity-[0.02]'>
                <div className='absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl'></div>
                <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl'></div>

            </div>
            <div className='relative max-w-7xl mx-auto px-4 py-16'>
                <div className='text-center max-w-3xl mx-auto mb-16'>
                    <div className='inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm border border-primary/20'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                Shop by Category 

                    </div>
                    <h2 className='text-3xl md:text-5xl font-extrabold leading-tight'>
                        Explore Our {" "}
                        <span className='bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent'>
                            Collections
                        </span>
                    </h2>
                    <p className='mt-5 text-base md:text-lg text-neutral/70 max-w-2xl mx-auto'>
                      Browse through our wide range of electronic device categories
                curated for modern needs.

                    </p>

                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8'>
                    {
                        categories.map((cat, index)=> (
                            <div
                            key={index}

                                              className='group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2'

                            >
                                <div className='relative h-72 overflow-hidden'>
                                    <Image 
                                    src={cat.image}
                                    alt={cat.name}
                                    width={400}
                                    height={300}
                                    unoptimized
                                    className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-t ${cat.gradient} opacity-60 group-hover:opacity-80 transition-opacity duration-500`}></div>
                                    <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-100'></div>


                                </div>
                                <div className='absolute inset-0 flex flex-col items-center justify-center text-white p-6'>
                                    <div className='mb-4 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30 group-hover:scale-110 group-hover:rotate-6 transition-all  duration-300'>
                                    {cat.icon}

                                    </div>
                                    <h3 className='text-2xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300'>
                                        {cat.name}
                                    </h3>
                                    <p className='text-sm font-medium bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full border border-white/30'>
                                        {cat.count}
                                    </p>
                                    <div className='mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300'>
                                        <span className='text-sm font-semibold'>
                                            Explore
                                        </span>
                                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>

                                    </div>

                                </div>

                                <div className='absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'>

                                </div>

                            </div>
                        ))
                    }

                </div>
                <div className='mt-12 text-center'>
                    <Link 
                    href={'/items'}
                    className='inline-flex items-center gap-2 btn btn-outline btn-primary btn-lg rounded-lg hover:scale-105 transition-all duration-300'
                    >
                    View All Products
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                    </Link>

                </div>

            </div>
            
        </div>
    );
};

export default Categories;