import Heading from '@/components/ui/Heading';
import BlockCard from '@/components/business/BlockCard';
import Blockquote from '@/components/ui/Blockquote';
import { examplesConfig } from './config';
import './page.css';
import Link from '@/components/ui/Link';

export default function Examples() {
  const totalChildrenCount = examplesConfig.reduce((acc, cur) => acc + (cur.children?.length || 0), 0);
  return (
    <div className="example relative overflow-auto">
      <p className="to-primary mt-12 mb-3 bg-gradient-to-r from-purple-400 from-20% bg-clip-text text-center text-5xl font-bold text-transparent">{totalChildrenCount}+</p>
      <Heading as="h1" className="mb-3 text-center">
        Blocks
      </Heading>
      <p className="text-description text-center">Use the excellent examples code to assemble your project</p>
      <Blockquote className="mx-auto mt-6">
        before using the example codes, please read the installation <Link href="/docs">documentation</Link>
      </Blockquote>
      <div className="mx-auto mt-10 grid gap-4 sm:mt-16 md:grid-cols-3 xl:max-w-7xl xl:grid-cols-4">
        {examplesConfig.map((example) => (
          <BlockCard key={example.id} title={example.title} href={example.href} cover={example.cover} account={example.children.length} />
        ))}
      </div>
    </div>
  );
}
