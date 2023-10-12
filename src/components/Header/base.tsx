export function HeaderTitle({ children }: { children: React.ReactNode }) {
  return <h1 className="text-yellow-600 pb-4">{children}</h1>;
}
export type BaseHeaderProps = {
  children: React.ReactNode;
};
export function BaseHeader({ children }: BaseHeaderProps) {
  return (
    <div className="bg-yellow-50 w-full pt-24 pb-12 px-10 h-full min-h-[50vh] flex flex-col items-center justify-center">
      <header className="flex flex-col items-start justify-center gap-2 md:gap-4 w-full max-w-3xl 2xl:max-w-5xl">
        {children}
      </header>
    </div>
  );
}
