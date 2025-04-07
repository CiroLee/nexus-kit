import { Card } from '@/components/ui/Card';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Heading from '../ui/Heading';
interface ExampleCardProps {
  href: string;
  cover?: React.ReactNode;
  title?: string;
  account?: number;
  className?: string;
}

export default function ExampleCard({ cover, href, title, account, className }: ExampleCardProps) {
  return (
    <Link href={href} className={cn('[&_svg]:aspect-video [&_svg]:h-40 [&_svg]:w-full', className)}>
      <Card className="p-4">
        <div className="relative bg-neutral-100/60 px-5 py-4 dark:bg-neutral-700/30">{cover}</div>
        <Heading as="h5" className="mt-3">
          {title}
        </Heading>
        <p className="text-description mt-2">{account} components</p>
      </Card>
    </Link>
  );
}
