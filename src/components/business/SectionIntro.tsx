import { cn } from '@/lib/utils';
import Heading from '@/components/ui/Heading';
interface SectionIntro {
  title: React.ReactNode;
  description: React.ReactNode;
  className?: string;
}
export default function SectionIntro({ title, description, className }: SectionIntro) {
  return (
    <div className={cn('mb-10', className)}>
      <Heading as="h1" className="mb-3">
        {title}
      </Heading>
      <p>{description}</p>
    </div>
  );
}
