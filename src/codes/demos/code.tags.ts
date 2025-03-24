export const colorsCode = `import Tag from "@/components/Tag";

export default function Page() {
  return (
    <div className="flex gap-4">
      <Tag colors="primary">primary</Tag>
      <Tag colors="success">success</Tag>
      <Tag colors="warning">warning</Tag>
      <Tag colors="danger">danger</Tag>
      <Tag colors="neutral">neutral</Tag>
    </div>
  )
}
`;

export const borderedCode = `import Tag from "@/components/Tag";

export default function Page() {
  return (
    <div className="flex gap-4">
      <Tag bordered colors="primary">primary</Tag>
      <Tag bordered colors="success">success</Tag>
      <Tag bordered colors="warning">warning</Tag>
      <Tag bordered colors="danger">danger</Tag>
      <Tag bordered colors="neutral">neutral</Tag>
    </div>
  )
}
`;

export const roundedCode = `import Tag from "@/components/Tag";

export default function Page() {
  return (
    <div className="flex gap-4">
      <Tag bordered rounded colors="primary">primary</Tag>
      <Tag bordered rounded colors="success">success</Tag>
      <Tag bordered rounded colors="warning">warning</Tag>
      <Tag bordered rounded colors="danger">danger</Tag>
      <Tag bordered rounded colors="neutral">neutral</Tag>
    </div>
  )
}
`;
