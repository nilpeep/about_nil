// src/components/SkeletonLoader.tsx

const SkeletonLoader = () => {
  return (
    <div className="animate-pulse space-y-4 p-4">
      <div className="h-6 bg-gray-300 rounded w-1/2"></div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-300 rounded"></div>
        <div className="h-4 bg-gray-300 rounded"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
