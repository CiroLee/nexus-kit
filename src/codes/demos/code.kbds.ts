export const defaultCode = `import Kbd from "@/components/ui/Kbd";

export default function Page() {
  return (
    <div className="flex gap-4">
      <Kbd keys={['command']} />
      <Kbd keys={['command']}>K</Kbd>
      <Kbd keys={['option', 'shift']}>T</Kbd>
      <Kbd>Command + D</Kbd>
    </div>
  )
}`;

export const sizeCode = `import Kbd from "@/components/ui/Kbd";

export default function Page() {
  return (
    <div className="flex items-center gap-4">
      <Kbd keys={['command']} size="sm">K</Kbd>
      <Kbd keys={['command']} size="md">K</Kbd>
      <Kbd keys={['command']} size="lg">K</Kbd>
    </div>
  )
}`;
