import Heading from '@/components/ui/Heading';
import ExampleCard from '@/components/business/ExampleCard';
import { examplesConfig } from './config';
import './page.css';

export default function Examples() {
  return (
    <div className="example relative overflow-auto">
      <Heading as="h1" className="mt-12 mb-3 text-center">
        Examples
      </Heading>
      <p className="text-description text-center">Use the excellent examples code to assemble your project</p>
      <div className="mx-auto mt-10 grid gap-4 sm:mt-16 md:grid-cols-3 xl:max-w-7xl xl:grid-cols-4">
        {examplesConfig.map((example) => (
          <ExampleCard key={example.id} title={example.title} href={example.href} cover={example.cover} />
        ))}
      </div>
    </div>
  );
}
