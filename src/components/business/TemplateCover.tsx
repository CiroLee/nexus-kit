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
  types?: string[];
  className?: string;
}

export default function TemplateCover({ cover, title, content, types, href, className }: TemplateCoverProps) {
  const coverImage =
    typeof cover === 'string' ? (
      <Image src={cover} alt={title} width={500} height={500} className="object-cover" />
    ) : (
      <div className="flex size-full items-center justify-center md:aspect-video md:h-40">
        <Image src={cover.light} alt={title} width={500} height={500} className="object-cover dark:hidden" />
        <Image src={cover.dark} alt={title} width={500} height={500} className="hidden object-cover dark:block" />
      </div>
    );
  return (
    <div className={cn('bg-background border-line group relative flex flex-col gap-4 rounded-md border p-2.5 transition md:flex-row', className)}>
      <div className="border-line/40 relative overflow-hidden rounded border">{coverImage}</div>
      <div className="grid flex-1 space-y-3">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-lg font-semibold">{title}</div>
          <div className="text-description line-clamp-2 text-sm">{content}</div>
        </div>
        <div className="relative flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-wrap gap-2">
            {types?.map((t, i) => (
              <Tag key={i}>{t}</Tag>
            ))}
          </div>
          <Button pill size="sm" asChild>
            <Link href={href} target="_blank" rel="noopener noreferrer">
              Preview
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
