export function ContentContainer({
  children,
  className,
  ...props
}: JSX.IntrinsicElements["article"]) {
  return (
    <div className="flex justify-center sm:px-10 py-10">
      <article
        className={`w-full max-w-3xl 2xl:max-w-5xl ${
          className ? className : "space-y-4 md:space-y-6"
        }`}
        {...props}
      >
        {children}
      </article>
    </div>
  );
}
