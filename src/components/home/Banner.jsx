import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="relative bg-gradient-to-br from-base-100 via-base-200 to-base-100 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-20 w-64 h-64 border-2 border-primary rounded-full animate-spin-slow"></div>
        <div className="absolute top-40 right-40 w-48 h-48 border-2 border-accent rounded-full animate-spin-reverse"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 border-2 border-primary rounded-full animate-spin-slow"></div>
      </div>

      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern
            id="circuit"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="20"
              cy="20"
              r="2"
              fill="currentColor"
              className="text-primary"
            />
            <circle
              cx="80"
              cy="80"
              r="2"
              fill="currentColor"
              className="text-accent"
            />
            <line
              x1="20"
              y1="20"
              x2="80"
              y2="20"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-primary"
            />
            <line
              x1="80"
              y1="20"
              x2="80"
              y2="80"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-accent"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>
      <div className="absolute top-32 left-10 opacity-10 animate-float">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      </div>
      <div className="absolute bottom-40 right-20 opacity-10 animate-float-delayed">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-20 w-20 text-accent"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      </div>
      <div className="absolute top-1/2 right-1/4 opacity-10 animate-float">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-14 w-14 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-gradient-to-r from-primary/3 to-accent/3 rounded-full blur-3xl animate-rotate-slow"></div>
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-24 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-fade-slide space-y-6 lg:space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border border-primary/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              Premium Electronics
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Elevate Your Tech <br />{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                Experience
              </span>
            </h1>

            <p className="text-base md:text-lg text-neutral/80 max-w-xl leading-relaxed">
              Discover cutting-edge electronic devices engineered for peak
              performance, seamless connectivity, and unmatched reliability.
              Transform the way you work, play, and connect.
            </p>
            <div className="flex gap-6 md:gap-8 pt-2">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  500+
                </div>
                <div className="text-sm text-neutral/60">Products</div>
              </div>
              <div className="border-l border-base-300 pl-6 md:pl-8">
                <div className="text-2xl md:text-3xl font-bold text-accent">
                  50K+
                </div>
                <div className="text-sm text-neutral/60">Happy Customers</div>
              </div>
              <div className="border-l border-base-300 pl-6 md:pl-8">
                <div className="text-2xl md:text-3xl font-bold text-secondary">
                  4.9⭐
                </div>
                <div className="text-sm text-neutral/60">Rating</div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 pt-2">
              <Link
                href={"/items"}
                className="btn btn-primary btn-lg rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
              >
                <span>Explore Devices</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
              <Link
                href={"/login"}
                className="btn btn-outline btn-lg rounded-lg border-2 hover:bg-accent hover:border-accent hover:scale-105 transition-all duration-300"
              >
                Get Started
              </Link>
            </div>

            <div className="flex items-center gap-4 pt-4 text-sm text-neutral/60">
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Free Shipping
              </div>
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                1-Year Warranty
              </div>
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                24/7 Support
              </div>
            </div>
          </div>

          <div className="relative animate-fade-zoom">
            <div className="absolute -top-8 -left-8 bg-base-100 p-4 rounded-xl shadow-xl border border-base-300 animate-float hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-neutral/60">Smartphones</div>
                  <div className="text-sm font-bold">Latest Models</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 bg-base-100 p-4 rounded-xl shadow-xl border border-base-300 animate-float-delayed hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-neutral/60">Laptops</div>
                  <div className="text-sm font-bold">Top Performance</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
              <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-base-100">
                <Image
                  src="https://images.unsplash.com/photo-1605360846332-1378e0c96955?q=80&w=704&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Premium laptop with wireless accessories and modern setup"
                  width={600}
                  height={500}
                  priority
                  className="object-cover w-full h-[560px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-accent/10"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
