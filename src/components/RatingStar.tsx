export const RatingStar = ({
  rating,
  title,
  sm,
}: {
  rating: number;
  title?: string;
  sm?: boolean;
}) => {
  if (rating > 5) {
    throw new Error("Rating must be less than or equal to 5");
  }
  return (
    <div title={title}>
      {[...Array(5)].map((_, i) => (
        <i
          key={`star_${i}`}
          className={`fa fa-star ${sm ? "fa-xs" : ""} ${
            i < rating ? "text-yellow-400" : "text-gray-400"
          }`}
        ></i>
      ))}
    </div>
  );
};
