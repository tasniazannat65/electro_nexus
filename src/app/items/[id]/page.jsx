import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ItemsDetail = async({params}) => {
    const {id} = await params;
const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/items/${id}`,
    {
        cache: 'no-store',
    }
)
 
if(!res.ok){
    return(
          <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mx-auto text-error mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className="text-2xl font-bold text-error mb-2">Item Not Found</h2>
          <p className="text-neutral/60 mb-6">The product you are looking for does not exist.</p>
          <Link href="/items" className="btn btn-primary">
            Back to Products
          </Link>
        </div>
      </div>
    )
}

 const item = await res.json();

    return (
       <div className="min-h-screen bg-gradient-to-b from-base-100 to-base-200 py-8 md:py-16 px-4">
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex items-center gap-2 text-sm text-neutral/60">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
          <Link href="/items" className="hover:text-primary transition-colors">Products</Link>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-neutral">{item.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          <div className="relative">
            <div className="absolute top-4 left-4 z-10 flex gap-2">
              {item.stock > 0 ? (
                <div className="bg-success text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  In Stock ({item.stock})
                </div>
              ) : (
                <div className="bg-error text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm shadow-lg">
                  Out of Stock
                </div>
              )}
            </div>

            <div className="absolute top-4 right-4 z-10">
              <div className="bg-primary/90 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm shadow-lg">
                {item.category}
              </div>
            </div>

            {/* Main Image */}
            <div className="relative h-[400px] md:h-[600px] bg-base-100 rounded-3xl overflow-hidden shadow-2xl border-4 border-base-100">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral/20 to-transparent"></div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4 w-fit border border-accent/20">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              {item.brand}
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-neutral mb-4 leading-tight">
              {item.name}
            </h1>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 ${
                      index < Math.floor(item.rating)
                        ? 'text-warning fill-warning'
                        : 'text-base-300 fill-base-300'
                    }`}
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <span className="text-lg font-bold text-neutral">
                {item.rating.toFixed(1)}
              </span>
              <span className="text-sm text-neutral/60">
                (250+ reviews)
              </span>
            </div>

            <div className="bg-primary/10 border-2 border-primary/30 rounded-2xl p-6 mb-6">
              <p className="text-sm text-neutral/60 mb-1">Price</p>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-extrabold text-primary">
                  ${Number(item.price).toFixed(2)}
                </span>
                <span className="text-lg text-neutral/60 line-through">
                  ${(Number(item.price) * 1.2).toFixed(2)}
                </span>
                <span className="bg-error text-white px-3 py-1 rounded-full text-sm font-bold">
                  -20%
                </span>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold text-neutral mb-3 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Description
              </h3>
              <p className="text-neutral/70 leading-relaxed">
                {item.description}
              </p>
            </div>

            {item.features && item.features.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-bold text-neutral mb-4 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {item.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-success mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-neutral/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <button className="btn btn-primary btn-lg flex-1 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Add to Cart
              </button>
              <button className="btn btn-outline btn-primary btn-lg rounded-xl hover:scale-105 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-base-300">
              <div className="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto text-success mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-xs text-neutral/60 font-medium">Free Shipping</p>
              </div>
              <div className="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto text-success mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <p className="text-xs text-neutral/60 font-medium">1-Year Warranty</p>
              </div>
              <div className="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto text-success mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <p className="text-xs text-neutral/60 font-medium">Easy Returns</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    );
};

export default ItemsDetail;