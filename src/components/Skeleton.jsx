import React from 'react'

const Skeleton = ({ className, variant = 'rect' }) => {
  const baseClasses = 'animate-shimmer'
  const variantClasses = variant === 'circle' ? 'rounded-full' : 'rounded-2xl'
  
  return <div className={`${baseClasses} ${variantClasses} ${className}`} />
}

export default Skeleton
