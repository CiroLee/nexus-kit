import { Card } from '@/components/ui/Card';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Heading from '../ui/Heading';
interface BlockCardProps {
  href: string;
  cover?: React.ReactNode;
  title?: string;
  account?: number;
  className?: string;
}

export default function BlockCard({ cover, href, title, account, className }: BlockCardProps) {
  return (
    <Link href={href} className={cn('group [&_svg]:aspect-video [&_svg]:h-40 [&_svg]:w-full', className)}>
      <Card className="group-hover:border-primary p-4 transition-colors">
        <div className="relative bg-neutral-100/60 px-5 py-4 dark:bg-neutral-700/30">{cover}</div>
        <Heading as="h5" className="mt-3">
          {title}
        </Heading>
        <p className="text-description mt-2">{account} blocks</p>
      </Card>
    </Link>
  );
}
