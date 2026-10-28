import { Star } from "lucide-react";

export const Stars = ({ rating, size = 12 }) => {
  return (
    <span className="stars" role="img" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={size}
          aria-hidden="true"
          className={star <= Math.round(rating) ? 'star star--filled' : 'star'}
        />
      ))}
    </span>
  );
};