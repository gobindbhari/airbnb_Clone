import React from 'react'

const SkeletonCard = () => {
  return (
    <>
    <div key={id} className="w-[290px] bg-white mb-4 rounded-lg shadow-md overflow-hidden mx-1">
  <div className="relative">
    {/* Skeleton Loader for Image */}
    <div className="w-full h-72 bg-gray-300 animate-pulse rounded-xl" />
    <div className="absolute bottom-0 left-0 w-full p-4">
      {/* Skeleton Loader for Title */}
      <div className="bg-gray-300 w-3/4 h-6 mb-2 animate-pulse rounded"></div>
    </div>
  </div>
  <div className="px-4 py-2 text-start">
    {/* Skeleton Loader for Description */}
    <div className="bg-gray-300 w-full h-4 mb-2 animate-pulse rounded"></div>
    {/* Skeleton Loader for Price */}
    <div className="bg-gray-300 w-1/2 h-4 animate-pulse rounded"></div>
  </div>
</div>

    </>
  )
}

export default SkeletonCard
