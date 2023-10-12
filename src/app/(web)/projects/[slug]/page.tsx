import Link from "next/link";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  return (
    <div className="flex flex-col p-10">
      <b>Project {params.slug} </b>
      <Link href="/projects/test/details/1234">Details</Link>
    </div>
  );
}
