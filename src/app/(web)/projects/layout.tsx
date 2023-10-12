export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col flex-1 h-full min-h-screen">{children}</main>
  );
}
