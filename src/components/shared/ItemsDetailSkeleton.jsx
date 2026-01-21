import React from "react";

const ItemsDetailSkeleton = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-base-100 to-base-200 py-8 md:py-16 px-4">
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex items-center gap-2 text-sm text-neutral/60 animate-pulse">
          <div className="h-4 w-16 bg-base-200 rounded"></div>
          <div className="h-4 w-4 bg-base-200 rounded"></div>
          <div className="h-4 w-20 bg-base-200 rounded"></div>
          <div className="h-4 w-4 bg-base-200 rounded"></div>
          <div className="h-4 w-28 bg-base-200 rounded"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Image Section */}
          <div className="relative">
            <div className="absolute top-4 left-4 z-10">
              <div className="h-10 w-28 bg-base-200 rounded-full animate-pulse"></div>
            </div>

            <div className="absolute top-4 right-4 z-10">
              <div className="h-10 w-28 bg-base-200 rounded-full animate-pulse"></div>
            </div>

            <div className="relative h-[400px] md:h-[600px] bg-base-200 rounded-3xl overflow-hidden shadow-2xl border-4 border-base-200 animate-pulse"></div>
          </div>

          {/* Details Section */}
          <div className="flex flex-col">
            <div className="h-10 w-44 bg-base-200 rounded-full animate-pulse mb-4"></div>

            <div className="h-16 md:h-20 w-full bg-base-200 rounded-2xl animate-pulse mb-6"></div>

            <div className="flex items-center gap-4 mb-6">
              <div className="h-6 w-24 bg-base-200 rounded-full animate-pulse"></div>
              <div className="h-6 w-12 bg-base-200 rounded-full animate-pulse"></div>
              <div className="h-6 w-28 bg-base-200 rounded-full animate-pulse"></div>
            </div>

            <div className="bg-base-200 border-2 border-base-200 rounded-2xl p-6 mb-6 animate-pulse">
              <div className="h-8 w-32 bg-base-300 rounded mb-4"></div>
              <div className="h-10 w-48 bg-base-300 rounded"></div>
            </div>

            <div className="mb-6">
              <div className="h-8 w-44 bg-base-200 rounded mb-4 animate-pulse"></div>
              <div className="h-32 w-full bg-base-200 rounded-2xl animate-pulse"></div>
            </div>

            <div className="mb-8">
              <div className="h-8 w-48 bg-base-200 rounded mb-4 animate-pulse"></div>
              <div className="space-y-3">
                <div className="h-6 w-full bg-base-200 rounded animate-pulse"></div>
                <div className="h-6 w-full bg-base-200 rounded animate-pulse"></div>
                <div className="h-6 w-full bg-base-200 rounded animate-pulse"></div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <div className="h-14 bg-base-200 rounded-xl w-full sm:w-1/2 animate-pulse"></div>
              <div className="h-14 bg-base-200 rounded-xl w-full sm:w-1/2 animate-pulse"></div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-base-300">
              <div className="h-20 bg-base-200 rounded-xl animate-pulse"></div>
              <div className="h-20 bg-base-200 rounded-xl animate-pulse"></div>
              <div className="h-20 bg-base-200 rounded-xl animate-pulse"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ItemsDetailSkeleton;
