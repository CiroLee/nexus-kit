'use client';
import { useMemo, Fragment } from 'react';
import { cn } from '@/lib/utils';

interface HighlightProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: string;
  query: string | string[];
  highlightClassName?: string;
}

export default function Highlight({ children, query, highlightClassName, className, ...props }: HighlightProps) {
  const highlightedText = useMemo(() => {
    const queries = Array.isArray(query) ? query : [query];
    let result: React.ReactNode[] = [children];

    queries.forEach((q) => {
      if (!q) return;
      const regex = new RegExp(q, 'g');
      const newResult: React.ReactNode[] = [];

      result.forEach((node) => {
        if (typeof node !== 'string') {
          newResult.push(node);
          return;
        }

        const parts = node.split(regex);
        parts.forEach((part, i) => {
          newResult.push(part);
          if (i < parts.length - 1) {
            newResult.push(
              <span key={`${i}-${q}`} data-node="highlight" className={cn('bg-yellow-500', highlightClassName)}>
                {node.match(regex)?.[i] || ''}
              </span>,
            );
          }
        });
      });

      result = newResult;
    });

    return result;
  }, [children, query, highlightClassName]);

  return (
    <span className={className} {...props}>
      {highlightedText.map((child, i) => (
        <Fragment key={i}>{child}</Fragment>
      ))}
    </span>
  );
}
