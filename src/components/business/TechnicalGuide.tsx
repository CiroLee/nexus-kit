import { cn } from '@/lib/utils';
import Show from './Show';
import Heading from '../ui/Heading';
export interface GuideItem {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  content?: React.ReactNode;
}
interface TechnicalGuideProps {
  className?: string;
  guides: GuideItem[];
}
export default function TechnicalGuide({ guides, className }: TechnicalGuideProps) {
  return (
    <div className={cn(className)}>
      {guides.map((item, index) => (
        <div id={item.id} key={item.id} className="before:bg-line relative flex gap-3 not-last:pb-8 before:absolute before:top-8 before:left-3.5 before:h-[calc(100%_-_36px)] not-last:before:w-px">
          <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm dark:bg-neutral-700">{index + 1}</span>
          <div>
            <Show when={item.title}>
              <Heading as="h5" className="mb-4">
                {item.title}
              </Heading>
            </Show>
            <Show when={item.description}>
              <div className="whitespace-normal">{item.description}</div>
            </Show>
            <Show when={item.content}>
              <div>{item.content}</div>
            </Show>
          </div>
        </div>
      ))}
    </div>
  );
}
