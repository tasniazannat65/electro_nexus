import ItemsCard from "@/components/items/ItemsCard";
import React from "react";

const ItemsPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/items`, {
    cache: "no-store",
  });
  const items = await res.json();
  return (
    <div className="min-h-screen max-w-7xl mx-auto py-16 px-4">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm border border-primary/20">
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
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          Shop All Items
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
          Discover Premium{" "}
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Electronics
          </span>
        </h2>
        <p className="mt-5 text-base md:text-lg text-neutral/70 max-w-2xl mx-auto">
          Find the perfect device from our curated collection of cutting-edge
          smartphones, powerful laptops, immersive audio gear, and smart
          accessories designed for your digital lifestyle.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item) => (
          <ItemsCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemsPage;
