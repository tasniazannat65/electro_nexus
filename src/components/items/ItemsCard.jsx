import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ItemsCard = ({item}) => {
    return (
        <div className='group relative bg-base-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-base-300/50'>
            {
                item.stock > 0 ? (
                    <div className='absolute top-3 left-3 z-10 bg-success text-white px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm shadow-lg'>
                        In Stock ({item.stock})

                    </div>
                ) : (
                    <div className='absolute top-3 left-3 z-10 bg-error text-white px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm shadow-lg'>
                        Out if Stock

                    </div>
                )
            }
            <div className='absolute top-3 right-3 z-10 bg-primary/90 text-white px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm shadow-lg'>
            {item.category}

            </div>
            <div className='relative h-56 w-full bg-base-200 overflow-hidden'>
                <Image 
                src={item.image}
                alt={item.name}
                fill
                className='object-cover transition-transform duration-500 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-gradient-to-r from-neutral/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>


            </div>
            <div className='p-5'>
                <h2 className='text-lg font-bold text-neutral line-clamp-2 min-h-[3.5rem] group-hover:text-primary transition-colors duration-300 '>
                    {item.name}
                </h2>
                <div className='flex items-center gap-2 mt-1'>
                    <div className='flex items-center gap-1'>
                        {[...Array(5)].map((_, index)=> (
                               <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                   className={`h-4 w-4 ${
                    index < Math.floor(item.rating) ? 'text-warning fill-warning' : 'text-base-300 fill-base-300'
                   }`}
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>

                        ))}

                    </div>
                    <span className='text-sm text-neutral/60 font-medium'>
                        {item.rating.toFixed(1)}
                    </span>

                </div>

                <div className='flex justify-between items-center mt-5 pt-4 border-t border-base-300'>
                    <div>
                        <p className='text-xs text-neutral/60 mb-1'>Price</p>
                        <span className='text-2xl font-bold text-primary'>
                            ${item.price.toFixed(2)}
                        </span>
                    </div>
                    <Link href={`/items/${item._id}`}
                    className='btn btn-primary rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 group'
                    >
                    <span>View</span>
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>

                    </Link>

                </div>

            </div>
            <div className='absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-primary/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            
        </div>
    );
};

export default ItemsCard;