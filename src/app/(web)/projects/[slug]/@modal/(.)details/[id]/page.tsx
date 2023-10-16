import Modal from "@/components/Modal";

export default function ProjectDetailsModal({
  params,
}: {
  params: { slug: string; id: string };
}) {
  return (
    <Modal>
      <div>Test Modal Wow</div>
    </Modal>
  );
}
