import { ProjectHeader } from "@/components/Header/projects";
import { ContentContainer } from "../../Content";

export default function ProjectDetailsLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      <ProjectHeader />
      <ContentContainer>{children}</ContentContainer>
      {modal}
    </>
  );
}
