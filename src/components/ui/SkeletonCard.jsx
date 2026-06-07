import Skeleton from './Skeleton';

const SkeletonCard = () => {
  return (
    <div className="bg-white p-4 rounded-3xl border border-gray-100">
      {/* Discount Badge */}
      <Skeleton className="w-12 h-5 mb-3" />

      {/* Image */}
      <Skeleton className="h-32 w-full my-3 rounded-2xl" />

      {/* Title */}
      <Skeleton className="h-4 w-3/4 mb-2" />

      {/* Rating */}
      <Skeleton className="h-3 w-1/2 mb-4" />

      {/* Price & Button */}
      <div className="flex justify-between items-center mt-3">
        <Skeleton className="h-6 w-1/3" />
        <Skeleton className="h-8 w-8 rounded-full" />
      </div>
    </div>
  );
};

export default SkeletonCard;
