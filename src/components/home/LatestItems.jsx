import React from 'react';
import ItemsCard from '../items/ItemsCard';
import Link from 'next/link';

const LatestItems = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/items`, {
        cache: 'no-store'
    })
    console.log("status:", res.status);
console.log("url:", res.url);
    const items = await res.json();
    const latestItems = items.slice(0, 8);
    return (
        <div className='min-h-screen max-w-7xl mx-auto py-16 px-4'>
            <div className='text-center max-w-3xl mx-auto mb-16'>
                    <div className='inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm border border-primary/20'>
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                New Arrivals

                    </div>
                    <h2 className='text-3xl md:text-5xl font-extrabold leading-tight'>
                        Latest & Greatest {" "}
                        <span className='bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent'>
                                                  Tech Drops

                        </span>
                    </h2>
                    <p className='mt-5 text-base md:text-lg text-neutral/70 max-w-2xl mx-auto'>
                        Explore our newest collection of freshly arrived electronics featuring the latest technology, innovative features, and premium quality devices you will love.


                    </p>

                </div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {
            latestItems.map((item)=> (
                <ItemsCard key={item._id} item={item}/>
            ))
        }
    </div>   
      <div className='flex items-center justify-center mt-8'>
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
    );
};

export default LatestItems;