import { t } from "astro-i18n";
import { classNames } from "@/utils";

type Badge = {
  className: string;
  label: string;
};

const getBadge = (tag: string): Badge => {
  switch (tag) {
    case "student-council":
      return {
        className: "bg-purple-100 text-purple-700",
        label: t("tags.student-council"),
      };
    case "website":
      return {
        className: "bg-green-100 text-green-700",
        label: t("tags.website"),
      };
    case "year 2564":
    case "year 2565":
      return {
        className: "bg-blue-100 text-blue-700",
        label: t("tags.year", { year: tag.split(" ").pop() as string }),
      };
  }
  return {
    className: "bg-gray-100 text-black",
    label: tag,
  };
};

export default function Badge({ tag }: { tag: string }) {
  const { className, label } = getBadge(tag);
  return (
    <span
      className={classNames(
        `inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium`,
        className
      )}
    >
      {label}
    </span>
  );
}
