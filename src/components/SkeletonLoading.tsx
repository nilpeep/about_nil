// src/components/SkeletonLoader.tsx

const SkeletonLoader = () => {
  return (
    <div className="animate-pulse rounded-lg bg-primary space-y-4 p-4  ">
      <div className="h-20 bg-secondary rounded w-1/2"></div>
      <div className="space-y-2">
        <div className="h-10 bg-secondary rounded"></div>
        <div className="h-10 bg-secondary rounded"></div>
        <div className="h-10 bg-secondary rounded w-5/6"></div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
