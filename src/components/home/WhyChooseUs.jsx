import React from 'react';
const features = [
  {
    title: "Premium Quality Devices",
    desc: "We offer carefully selected electronics that ensure performance, durability, and reliability.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    gradient: "from-primary to-accent",
  },
  {
    title: "Trusted & Secure",
    desc: "Your data and purchases are protected with modern security standards.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    gradient: "from-accent to-secondary",
  },
  {
    title: "Fast Delivery",
    desc: "Quick and reliable delivery so you can enjoy your devices without delay.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
    gradient: "from-primary to-primary",
  },
  {
    title: "24/7 Customer Support",
    desc: "Our support team is always available to help you with your needs.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    gradient: "from-secondary to-accent",
  },
];
const WhyChooseUs = () => {
    return (
        <div className='relative overflow-hidden'>
            <div className='absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl'></div>
            <div className='absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl'></div>
            <div className='absolute inset-0 opacity-[0.03]' style={{
                backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
                backgroundSize: '30px 30px'
            }}>

            </div>
            <div className='relative max-w-7xl mx-auto px-4 py-16'>
                <div className='text-center max-w-3xl mx-auto mb-16'>
                    <div className='inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm border border-primary/20'>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              Why Choose Us 

                    </div>
                    <h2 className='text-3xl md:text-5xl font-extrabold leading-tight'>
                        Experience Excellence with {" "}
                        <span className='bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent'>
                            ElectroNexus
                        </span>
                    </h2>
                    <p className='mt-5 text-base md:text-lg text-neutral/70 max-w-2xl mx-auto'>
                      We focus on quality, security, and customer satisfaction to deliver
              the best electronics shopping experience.  
                    </p>

                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8'>
                    {
                        features.map((item, index)=> (
                            <div
                            key={index}
                            className='group relative bg-base-100 rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-base-300/50 overflow-hidden'
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}>

                                </div>
                                <div className='relative'>
                                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${item.gradient} p-0.5 mb-5`}>
                                        <div className='flex items-center justify-center w-full h-full bg-base-100 rounded-xl text-primary group-hover:bg-transparent group-hover:text-white transition-all duration-300'>
                                            {item.icon}

                                        </div>

                                    </div>

                                </div>

                                <h3 className='text-lg md:text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300
                                '>
                                    {item.title}
                                </h3>
                                <p className='text-sm md:text-base text-neutral/70 leading-relaxed'>
                                    {item.desc}
                                </p>
                                <div className='absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'>

                                </div>

                            </div>
                        ))
                    }

                </div>

                

            </div>
            
        </div>
    );
};

export default WhyChooseUs;