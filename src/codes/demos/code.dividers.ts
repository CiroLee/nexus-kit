export const defaultCode = `import Divider from '@/components/Divider';
import Heading from '@/components/Heading';

export default function Page() {
  return (
    <div className="max-w-80">
      <Heading as="h5">Nexus-Kit</Heading>
      <p className="mt-1 text-sm">beautiful and useful React components</p>
      <Divider />
      <div className="flex h-5 items-center">
        <p>Home</p>
        <Divider orientation="vertical" />
        <p>Components</p>
        <Divider orientation="vertical" />
        <p>Examples</p>
      </div>
    </div>
  )
}
`;

export const withContentCode = `import Divider from '@/components/Divider';

export default function Page() {
  return (
    <div className="flex">
      <Divider orientation="horizontal" className="flex-1">
        divider
      </Divider>
      <div className="relative flex h-60 w-1/2 justify-center">
        <Divider orientation="vertical">divider</Divider>
      </div>
    </div>
)
}
`;
