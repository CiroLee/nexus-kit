import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../ui/Button';
import Tag from '../ui/Tag';
export interface TemplateCoverProps {
  cover: string | { light: string; dark: string };
  title: string;
  content?: string;
  href: string;
  type?: string;
  className?: string;
}
export default function TemplateCover({ cover, title, content, type, href, className }: TemplateCoverProps) {
  const coverImage =
    typeof cover === 'string' ? (
      <Image src={cover} alt={title} width={500} height={500} className="aspect-[4/3] w-30 object-scale-down sm:w-50" />
    ) : (
      <div className="flex size-full flex-col items-center justify-center">
        <Image src={cover.light} alt={title} width={500} height={500} className="aspect-[4/3] w-30 object-scale-down sm:w-50 dark:hidden" />
        <Image src={cover.dark} alt={title} width={500} height={500} className="hidden aspect-[4/3] w-30 object-scale-down sm:w-50 dark:block" />
      </div>
    );
  return (
    <div className={cn('bg-background border-line group hover:border-primary relative rounded-md border p-2 transition', className)}>
      <Link href={href} rel="noopener noreferrer" target="_blank" className="flex gap-4">
        <div className="border-line/40 relative w-fit overflow-hidden rounded border">{coverImage}</div>
        <div className="grid flex-1 py-2">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <p className="text-lg font-semibold">{title}</p>
              <Tag size="sm">{type}</Tag>
            </div>
            <div className="text-description line-clamp-2 text-sm">{content}</div>
          </div>
        </div>
      </Link>
      <Button pill size="sm" className="invisible absolute right-2 bottom-2 opacity-0 transition group-hover:visible group-hover:opacity-100">
        <Link href={href} target="_blank" rel="noopener noreferrer">
          Preview
        </Link>
      </Button>
    </div>
  );
}
