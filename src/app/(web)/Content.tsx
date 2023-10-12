export function ContentContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="flex justify-center p-10">
      <article
        className={`w-full max-w-3xl 2xl:max-w-5xl ${
          className ? className : "space-y-4 md:space-y-6"
        }`}
      >
        {children}
      </article>
    </div>
  );
}
