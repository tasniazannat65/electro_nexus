import ItemsCardSkeleton from "@/components/shared/ItemsCardSkeleton";

export default function Loading() {
  return (
    <div className="min-h-screen bg-base-100 max-w-7xl mx-auto py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {Array.from({ length: 8 }).map((_, i) => (
          <ItemsCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
