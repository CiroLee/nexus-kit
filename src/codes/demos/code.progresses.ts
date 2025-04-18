export const defaultCode = `import Progress from "@/components/ui/Progress";

export default function Page() {
  return (
    <Progress value={65} className="max-w-100" />
  )
}
`;

export const sizeCode = `import Progress from "@/components/ui/Progress";

export default function Page() {
  return (
    <div className="space-y-4">
      <Progress value={65} size="sm" className="max-w-100" />
      <Progress value={65} size="md" className="max-w-100" />
      <Progress value={65} size="lg" className="max-w-100" />
    </div>
  )
}
`;

export const colorsCode = `import Progress from "@/components/ui/Progress";

export default function Page() {
  return (
    <div className="space-y-4">
      <Progress value={65} colors="primary" className="max-w-100" />
      <Progress value={65} colors="secondary" className="max-w-100" />
      <Progress value={65} colors="warning" className="max-w-100" />
      <Progress value={65} colors="danger" className="max-w-100" />
      <Progress value={65} colors="neutral" className="max-w-100" />
    </div>
  )
}
`;

export const stripedCode = `import Progress from "@/components/ui/Progress";

export default function Page() {
  return (
    <div className="space-y-4">
      <Progress value={65} striped colors="primary" className="max-w-100" />
      <Progress value={65} striped colors="secondary" className="max-w-100" />
      <Progress value={65} striped colors="warning" className="max-w-100" />
      <Progress value={65} striped colors="danger" className="max-w-100" />
      <Progress value={65} striped colors="neutral" className="max-w-100" />
    </div>
  )
}
`;
