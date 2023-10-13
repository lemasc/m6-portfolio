import { StarIcon } from "@heroicons/react/20/solid";

export const RatingStar = ({
  rating,
  title,
}: {
  rating: number;
  title?: string;
}) => {
  if (rating > 5) {
    throw new Error("Rating must be less than or equal to 5");
  }
  return (
    <div className="flex flex-row" title={title}>
      {[...Array(5)].map((_, i) => (
        <StarIcon
          key={`star_${i}`}
          className={`w-4 h-4 ${
            i < rating ? "text-yellow-400" : "text-gray-400"
          }`}
        />
      ))}
    </div>
  );
};
