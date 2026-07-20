import { FaStar } from 'react-icons/fa';

function Rating({ rating, reviews, showReviews = true }) {
  return (
    <div className="flex items-center gap-1.5 text-sm">
      <span className="inline-flex items-center gap-1 rounded-md bg-gradient-to-r from-emerald-600 to-emerald-700 px-2 py-0.5 font-bold text-white shadow-sm">
        {rating}
        <FaStar className="text-[10px] text-amber-300" />
      </span>
      {showReviews && (
        <span className="text-slate-500 transition-colors hover:text-blue-700 hover:underline">
          ({reviews.toLocaleString()})
        </span>
      )}
    </div>
  );
}

export default Rating;