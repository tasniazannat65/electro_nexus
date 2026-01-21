import React from 'react';

const ItemsCardSkeleton = () => {
    return (
       <div className="animate-pulse group relative bg-base-100 rounded-xl overflow-hidden shadow-lg border border-base-300/50">
      <div className="absolute top-3 left-3 z-10 bg-neutral/20 px-3 py-1 rounded-full text-xs font-semibold">
        &nbsp;
      </div>
      <div className="absolute top-3 right-3 z-10 bg-neutral/20 px-3 py-1 rounded-full text-xs font-semibold">
        &nbsp;
      </div>

      <div className="relative h-56 w-full bg-base-200 overflow-hidden"></div>

      <div className="p-5">
        <div className="h-6 w-3/4 bg-neutral/20 rounded mb-2"></div>
        <div className="h-4 w-1/2 bg-neutral/20 rounded mb-4"></div>
        <div className="flex justify-between items-center mt-5 pt-4 border-t border-base-300">
          <div className="h-6 w-20 bg-neutral/20 rounded"></div>
          <div className="h-8 w-20 bg-neutral/20 rounded"></div>
        </div>
      </div>
    </div>
    );
};

export default ItemsCardSkeleton;