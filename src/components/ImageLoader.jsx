import React, { useState } from 'react'
import Skeleton from './Skeleton'

const ImageWithSkeleton = ({ src, alt, className, skeletonVariant = 'rect' }) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!loaded && (
        <Skeleton 
          variant={skeletonVariant} 
          className="absolute inset-0 h-full w-full" 
        />
      )}
      <img
        src={src}
        alt={alt}
        className={`h-full w-full object-cover transition-opacity duration-500 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)} // Don't leave skeleton forever if image fails
      />
    </div>
  )
}

export default ImageWithSkeleton
