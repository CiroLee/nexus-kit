'use client';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import Segment from './ui/Segment';
import Show from './Show';
import { IconEye, IconCode } from '@tabler/icons-react';
import type { Option } from './ui/types/component';
import Heading from './ui/Heading';

interface PreviewAndCodeProps {
  anchorId?: string;
  title: React.ReactNode;
  children: React.ReactNode;
  code: React.ReactNode;
  className?: string;
}

const option: Option[] = [
  {
    label: (
      <>
        <IconEye size={18} />
        Preview
      </>
    ),
    value: 'preview',
  },
  {
    label: (
      <>
        <IconCode size={18} />
        Code
      </>
    ),
    value: 'code',
  },
];
export default function PreviewAndCode({ anchorId, title, children, code, className }: PreviewAndCodeProps) {
  const [value, setValue] = useState('preview');
  return (
    <div className={cn('mb-8', className)} id={anchorId}>
      <Heading as="h2" className="mb-4">
        {title}
      </Heading>
      <Segment defaultValue="preview" option={option} onChange={setValue} />
      <div className="border-line mt-4 overflow-auto rounded-md border">
        <Show if={value === 'preview'} else={<div className="max-h-80">{code}</div>}>
          <div className="p-3">{children}</div>
        </Show>
      </div>
    </div>
  );
}
