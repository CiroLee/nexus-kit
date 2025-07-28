import TemplateCover from '@/components/business/TemplateCover';
import Heading from '@/components/ui/Heading';
import { templatesConfig } from './config';
export default function Templates() {
  return (
    <div className="mx-auto md:max-w-3xl lg:max-w-4xl xl:max-w-6xl">
      <p className="to-primary mt-12 mb-3 bg-gradient-to-r from-purple-400 from-20% bg-clip-text text-center text-5xl font-bold text-transparent">{templatesConfig.length}+</p>
      <Heading as="h1" className="mb-3 text-center">
        Templates
      </Heading>
      <p className="text-description text-center">Based on nexus-kit, high-quality project templates that can be used to quickly create your project</p>
      <div className="mt-10 sm:mt-16">
        {templatesConfig.map((tpl) => (
          <TemplateCover key={tpl.title} {...tpl} />
        ))}
      </div>
    </div>
  );
}
