export const sizeCode = `'use client';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import Segment from './ui/Segment';
import Show from './Show';
import { IconEye, IconCode } from '@tabler/icons-react';
import type { Option } from './ui/styles/types/component';

interface PreviewAndCodeProps {
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
export default function PreviewAndCode({ children, code, className }: PreviewAndCodeProps) {
  const [value, setValue] = useState('preview');
  return (
    <div className={cn(className)}>
      <Segment defaultValue="preview" option={option} onChange={setValue} />
      <div className="border-line h-96 overflow-auto rounded border">
        <Show if={value === 'preview'} else={code}>
          <div className="p-3">{children}</div>
        </Show>
      </div>
    </div>
  );
}
`;
