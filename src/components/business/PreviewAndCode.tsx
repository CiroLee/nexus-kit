'use client';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import Segment, { type Option } from '../ui/Segment';
import { IconEye, IconCode } from '@tabler/icons-react';
import Heading from '../ui/Heading';
import ClientCopyButton from './ClientCopyButton';

interface PreviewAndCodeProps {
  anchorId?: string;
  title: React.ReactNode;
  description?: string;
  children: React.ReactNode;
  code: React.ReactNode;
  codeText?: string;
  className?: string;
  isDiagnoal?: boolean;
  trail?: React.ReactNode;
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
export default function PreviewAndCode({ anchorId, title, description, codeText = '', trail, isDiagnoal, children, code, className }: PreviewAndCodeProps) {
  const [value, setValue] = useState('preview');
  return (
    <div className={cn('mb-8 w-[calc(100vw_-_32px)] sm:w-full', className)} id={anchorId}>
      <Heading as="h3" className="whitespace-pre-wrap">
        {title}
      </Heading>
      <p className="mb-4 text-sm text-gray-400">{description}</p>
      <div className="flex items-center justify-between">
        <Segment defaultValue="preview" option={option} onValueChange={setValue} />
        <div className="flex gap-2">
          <ClientCopyButton text={codeText} />
          {trail}
        </div>
      </div>
      <div className={cn('border-line mt-4 overflow-auto rounded-md border', { 'bg-[#24292e]': value === 'code' })}>
        <div className={cn('preview-content p-3', { diagnoal: isDiagnoal }, { hidden: value === 'code' })}>{children}</div>
        <div className={cn('max-h-80', { hidden: value === 'preview' })}>{code}</div>
      </div>
    </div>
  );
}
