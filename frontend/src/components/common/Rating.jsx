import { FaStar } from 'react-icons/fa';

function Rating({ rating, reviews, showReviews = true }) {
  return (
    <div className="flex items-center gap-1.5 text-sm">
      <span className="inline-flex items-center gap-1 rounded bg-emerald-700 px-1.5 py-0.5 font-semibold text-white">
        {rating}
        <FaStar className="text-[10px]" />
      </span>
      {showReviews && <span className="text-slate-500">({reviews.toLocaleString()})</span>}
    </div>
  );
}

export default Rating;
