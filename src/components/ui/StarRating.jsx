import { Star } from 'lucide-react';

export default function StarRating({ rating, reviewCount, size = 16, showCount = true }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const fill =
      rating >= i ? 'text-amber-400' : rating >= i - 0.5 ? 'text-amber-400' : 'text-gray-300';
    stars.push(
      <Star
        key={i}
        size={size}
        className={fill}
        fill={rating >= i || rating >= i - 0.5 ? 'currentColor' : 'none'}
      />
    );
  }

  return (
    <div className="flex items-center gap-1">
      <div className="flex">{stars}</div>
      {showCount && (
        <span className="text-xs text-text-secondary ml-1">({reviewCount})</span>
      )}
    </div>
  );
}
