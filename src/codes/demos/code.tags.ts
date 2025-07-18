export const colorsCode = `import Tag from "@/components/ui/Tag";

export default function Page() {
  return (
    <div className="flex gap-4">
      <Tag colors="primary">primary</Tag>
      <Tag colors="secondary">secondary</Tag>
      <Tag colors="warning">warning</Tag>
      <Tag colors="danger">danger</Tag>
      <Tag colors="neutral">neutral</Tag>
    </div>
  )
}`;

export const sizeCode = `import Tag from "@/components/ui/Tag";

export default function Page() {
  return (
    <div className="flex items-center gap-4">
      <Tag colors="neutral" size="sm">Tag</Tag>
      <Tag colors="neutral" size="md">Tag</Tag>
      <Tag colors="neutral" size="lg">Tag</Tag>
    </div>
  )
}`;

export const borderedCode = `import Tag from "@/components/ui/Tag";

export default function Page() {
  return (
    <div className="flex gap-4">
      <Tag bordered colors="primary">primary</Tag>
      <Tag bordered colors="secondary">secondary</Tag>
      <Tag bordered colors="warning">warning</Tag>
      <Tag bordered colors="danger">danger</Tag>
      <Tag bordered colors="neutral">neutral</Tag>
    </div>
  )
}`;

export const pillCode = `import Tag from "@/components/ui/Tag";

export default function Page() {
  return (
    <div className="flex gap-4">
      <Tag bordered pill colors="primary">primary</Tag>
      <Tag bordered pill colors="secondary">secondary</Tag>
      <Tag bordered pill colors="warning">warning</Tag>
      <Tag bordered pill colors="danger">danger</Tag>
      <Tag bordered pill colors="neutral">neutral</Tag>
    </div>
  )
}`;
