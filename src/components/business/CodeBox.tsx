import { codeToHtml } from 'shiki';
import { cn } from '@/lib/utils';
import type { BundledLanguage } from 'shiki';
interface Props {
  code: string;
  lang?: BundledLanguage;
  className?: string;
  highlightLines?: number[];
  highlightRange?: number[][];
  diffAddLines?: number[];
  diffRemoveLines?: number[];
}

export default async function Code({ code, highlightLines, diffAddLines, diffRemoveLines, highlightRange, lang = 'tsx', className }: Props) {
  const out = await codeToHtml(code, {
    lang,
    theme: 'github-dark',
    transformers: [
      {
        line(node, line) {
          node.properties['data-line'] = line;
          // highlight
          if (highlightLines?.includes(line)) this.addClassToHast(node, 'highlight-line');
          highlightRange?.forEach((arr) => {
            if (line >= arr[0] && line <= arr[arr.length - 1]) {
              this.addClassToHast(node, 'highlight-line');
            }
          });
          // diffs
          if (diffAddLines?.includes(line)) {
            this.addClassToHast(node, 'diff add');
          }
          if (diffRemoveLines?.includes(line)) {
            this.addClassToHast(node, 'diff remove');
          }
        },
      },
    ],
  });

  return (
    <div className={cn('relative h-full overflow-auto bg-[#24292e] text-sm [&_pre]:h-full [&_pre]:p-3', className)}>
      <div dangerouslySetInnerHTML={{ __html: out }}></div>
    </div>
  );
}
