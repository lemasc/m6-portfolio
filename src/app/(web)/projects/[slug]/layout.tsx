export default function ProjectDetailsLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      <h1>ProjectDetailsLayout</h1>
      <div className="flex flex-col mt-20 bg-violet-50">
        {children}
        {modal}
      </div>
    </>
  );
}
