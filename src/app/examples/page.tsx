import Heading from '@/components/ui/Heading';
import ExampleCard from '@/components/business/ExampleCard';
import Blockquote from '@/components/ui/Blockquote';
import { examplesConfig } from './config';
import './page.css';
import Link from '@/components/ui/Link';

export default function Examples() {
  return (
    <div className="example relative overflow-auto">
      <Heading as="h1" className="mt-12 mb-3 text-center">
        Examples
      </Heading>
      <p className="text-description text-center">Use the excellent examples code to assemble your project</p>
      <Blockquote className="mx-auto mt-6">
        before using the example codes, please read the installation <Link href="/docs">document</Link>
      </Blockquote>
      <div className="mx-auto mt-10 grid gap-4 sm:mt-16 md:grid-cols-3 xl:max-w-7xl xl:grid-cols-4">
        {examplesConfig.map((example) => (
          <ExampleCard key={example.id} title={example.title} href={example.href} cover={example.cover} account={example.children.length} />
        ))}
      </div>
    </div>
  );
}
