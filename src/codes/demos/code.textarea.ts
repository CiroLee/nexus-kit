export const defaultCode = `import Textarea from "@/components/ui/Textarea";

export default function Page() {
  return (
    <Textarea placeholder="enter texts here" />
  )
}
`;

export const stateCode = `import Textarea from "@/components/ui/Textarea";

export default function Page() {
  return (
    <div className="space-y-5">
      <Textarea state="warning" placeholder="warning state" />
      <Textarea state="error" placeholder="error state" />
    </div>
  )
}
`;

export const disabledCode = `import Textarea from "@/components/ui/Textarea";

export default function Page() {
  return (
    <Textarea disabled placeholder="enter texts here" />
  )
}
`;
export const resizeCode = `import Textarea from "@/components/ui/Textarea";

export default function Page() {
  return (
    <div className="space-y-5">
      <Textarea resize="both" placeholder="resize both" />
      <Textarea resize="horizontal" placeholder="resize horizontal" />
      <Textarea resize="vertical" placeholder="resize vertical" />
      <Textarea resize="none" placeholder="not allow resize" />
    </div>
  )
}
`;
