import React from 'react';
const steps = [
  {
    title: "Choose Your Device",
    desc: "Browse through our categories and select the perfect electronic device for your needs.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    gradient: "from-primary to-accent",
    number: "01",
  },
  {
    title: "Secure Checkout",
    desc: "Use our secure checkout system to place your order quickly and safely.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    gradient: "from-accent to-secondary",
    number: "02",
  },
  {
    title: "Fast Delivery",
    desc: "We deliver your product quickly with reliable shipping and tracking updates.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
    gradient: "from-primary to-primary",
    number: "03",
  },
];


const HowItWorks = () => {
    return (
        <div className='relative overflow-hidden'>
            <div className='absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl'></div>
            <div className='absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl'></div>
            <div className='absolute inset-0 opacity-[0.02]' style={{
                backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
                backgroundSize: '50px 50px'
            }}>

            </div>

            <div className='relative max-w-7xl mx-auto px-4 py-16'>
                <div className='text-center max-w-3xl mx-auto mb-16'>
                    <div className='inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm border border-primary/20'>
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Simple Process 

                    </div>
                    <h2 className='text-3xl md:text-5xl font-extrabold leading-tight'>
                        How It{" "}
                        <span className='bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent'>
                            Works 
                        </span>
                    </h2>
                    <p className='mt-5 text-base md:text-lg text-neutral/70 max-w-2xl mx-auto'>
                                 Simple and fast process to get your favorite electronics at your doorstep.
  
                    </p>

                </div>

               <div className='relative'>
                <div className='hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-20'></div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12'>
            {
                steps.map((step, index)=> (
                    <div 
                    key={index}
                    className='relative group'
                    >
                        <div className='relative bg-base-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-base-300/50 overflow-hidden'>
                        <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                        <div className='absolute -top-4 -right-4 w-24 h-24 opacity-5'>
                            <div className={`text-8xl font-black bg-gradient-to-br ${step.gradient} bg-clip-text text-transparent`}>
                                {step.number}

                            </div>

                        </div>

                        <div className='relative mb-6'>
                            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-xl bg-gradient-to-br ${step.gradient} p-0.5 group-hover:scale-110 transition-transform duration-300 `}>
                                <div className='flex items-center justify-center w-full h-full bg-base-100 rounded-xl text-primary group-hover:bg-transparent group-hover:text-white transition-all duration-300'>
                                    {step.icon}

                                </div>

                            </div>

                            <div className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white text-sm font-bold shadow-lg`}>
                                {index + 1}

                            </div>

                        </div>

                        <h3 className='text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300'>
                            {step.title}
                        </h3>
                        <p className='text-sm md:text-base text-neutral/70 leading-relaxed'>
                            {step.desc}
                        </p>
                        <div className='mt-6 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300'>
                            <span className='text-sm font-semibold'>
                                Learn More
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>

                        </div>
                        <div className='absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-primary/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>


                        </div>
                        {
                            index < steps.length - 1 && (
                                <div className='hidden md:block absolute top-24 -right-6 z-10'>
                                    <div className='w-12 h-12 rounded-full bg-base-100 border-4 border-primary/20 flex items-center justify-center shadow-lg'>
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>

                                    </div>

                                </div>
                            )
                        }

                    </div>
                ))
            }

          </div>
               </div>

                

            </div>
            
        </div>
    );
};

export default HowItWorks;