'use client';
import { useId } from 'react';
import { cn } from '@/lib/utils';

interface StarRatingProps extends React.HTMLAttributes<HTMLDivElement>, Omit<IStar, 'score'> {
  rating: number;
  maxStars: number;
  ref?: React.Ref<HTMLDivElement>;
}

export function StarRating({ rating, maxStars, className, ref, ...props }: StarRatingProps) {
  return (
    <div ref={ref} className={cn('flex gap-1', className)}>
      {Array.from({ length: maxStars }, (_, index) => (
        <Star key={index} score={Math.min(1, Math.max(0, rating - index))} {...props} />
      ))}
    </div>
  );
}

export interface IStar {
  score: number;
  defaultColor?: string;
  fillColor?: string;
  size?: number;
}
export function Star({ score = 0, defaultColor = '#a7a7a7', fillColor = '#ff6900', size = 16 }: IStar) {
  // make sure the score is between 0 and 1
  const clampedScore = Math.min(1, Math.max(0, score));
  const gradientId = useId(); // unique id for the gradient

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      {/* define the gradient */}
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0">
          <stop offset={`${clampedScore * 100}%`} stopColor={fillColor} />
          <stop offset={`${clampedScore * 100}%`} stopColor={defaultColor} />
        </linearGradient>
      </defs>
      <path
        stroke="none"
        d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
        fill={`url(#${gradientId})`} // use the gradient to fill
      />
    </svg>
  );
}
