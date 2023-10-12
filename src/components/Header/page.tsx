import { BaseHeader, HeaderTitle } from "./base";

export function PageHeader({
  title,
  children,
}: {
  title: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <BaseHeader>
      <HeaderTitle>{title}</HeaderTitle>
      <p className="md:text-lg md:leading-7 max-w-2xl 2xl:max-w-4xl text-gray-700">
        {children}
      </p>
    </BaseHeader>
  );
}
