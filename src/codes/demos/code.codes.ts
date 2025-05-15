export const defaultCode = `import Code from '@/components/ui/Code';

export default function Page() {
  return <Code>hello world!</Code>;
}`;

export const borderedCode = `import Code from '@/components/ui/Code';

export default function Page() {
  return <Code bordered>hello world!</Code>;
}`;

export const sizeCode = `import Code from '@/components/ui/Code';

export default function Page() {
  return (
    <div className="flex flex-col items-start gap-2">
      <Code size="sm">hello world!</Code>
      <Code size="md">hello world!</Code>
      <Code size="lg">hello world!</Code>
    </div>
  );
}`;
