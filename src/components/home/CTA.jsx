import Link from 'next/link';
import React from 'react';

const CTA = () => {
    return (
        <div className='relative bg-gradient-to-br from-primary via-primary to-accent overflow-hidden'>
            <div className='absolute inset-0 opacity-0'>
                <div className='absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse-slow'></div>
                <div className='absolute bottom-0 right-0 w-80 h-80 bg-accent rounded-full blur-3xl animate-pulse-slow'></div>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white rounded-full blur-3xl opacity-5'></div>

            </div>
            <div className='absolute inset-0 opacity-5' style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '30px 30px'
            }}></div>
            <div className='absolute top-10 left-10 opacity-10 animate-float hidden lg:block'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>

            </div>
            <div className='absolute bottom-16 right-20 opacity-10 animate-float-delayed hidden lg:block'>
               <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg> 

            </div>
            <div className='relative max-w-7xl mx-auto px-4 py-16 md:py-20'>
                <div className='flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12'>
                    <div className='flex-1 text-center lg:text-left'>
                        <div className='inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-white/30'>
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                Limited Time Offer 

                        </div>
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight'>
                            Ready to Explore the <br className='hidden md:block'/>  <span className='text-accent-content'>
                                Best Electronics?
                            </span>
                        </h2>
                        <p className='mt-5 text-base md:text-lg text-white/90 max-w-xl mx-auto lg:mx-0'>
                               Shop now and enjoy premium quality devices with fast delivery,
                exclusive deals, and 24/7 customer support.
                        </p>
                        <div className='mt-6 flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-white/90'>
                        <div className='flex items-center gap-2'>
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent-content" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                   Free Shipping 

                        </div>
                        <div className='flex items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent-content" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  1-Year Warranty

                        </div>
                        <div className='flex items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent-content" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                            Secure Payment

                        </div>

                        </div>

                    </div>

                    <div className='flex flex-col md:flex-row gap-4'>
                        <Link
                        href={'/items'}
                        className='group btn btn-lg bg-white text-primary hover:bg-white/90 border-none rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 px-8'

                        >
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>Browse Items</span>
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                        
                        </Link>
                        <Link
                        href={'/login'}
                        className='btn btn-lg btn-outline border-2 border-white text-white hover:text-primary rounded-xl hover:scale-105 transition-all duration-300 px-8'
                        >
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                        Login
                        </Link>

                    </div>

                </div>
                <div className='mt-10 pt-8 border-t border-white/20'>
                <div className='flex flex-wrap items-center justify-center lg:justify-start gap-8 md:gap-12 text-white'>
                    <div className='text-center lg:text-left'>
                        <div className='text-3xl md:text-4xl font-bold text-accent-content'>10K+</div>
                        <div className='text-sm text-white/80 mt-1'>Products Sold</div>

                    </div>
                    <div className='hidden md:block h-12 w-px bg-white/20'></div>
                               <div className='text-center lg:text-left'>
                        <div className='text-3xl md:text-4xl font-bold text-accent-content'>50K+</div>
                        <div className='text-sm text-white/80 mt-1'>Happy Customers</div>

                    </div>
                    <div className='hidden md:block h-12 w-px bg-white/20'></div>
                               <div className='text-center lg:text-left'>
                        <div className='text-3xl md:text-4xl font-bold text-accent-content'>4.9⭐</div>
                        <div className='text-sm text-white/80 mt-1'>Average Rating</div>

                    </div>
                    <div className='hidden md:block h-12 w-px bg-white/20'></div>
                               <div className='text-center lg:text-left'>
                        <div className='text-3xl md:text-4xl font-bold text-accent-content'>24/7</div>
                        <div className='text-sm text-white/80 mt-1'>Support Available</div>

                    </div>

                </div>

                </div>

            </div>
            
        </div>
    );
};

export default CTA;