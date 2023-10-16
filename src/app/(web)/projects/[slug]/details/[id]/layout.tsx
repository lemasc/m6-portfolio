import { ContentContainer } from "@/app/(web)/Content";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ContentContainer id="project-contents">{children}</ContentContainer>;
}
