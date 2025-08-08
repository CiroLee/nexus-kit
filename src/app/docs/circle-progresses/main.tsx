'use client';
import { useState } from 'react';
import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import CodeDrawer from '@/components/business/CodeDrawer';
import ClientCode from '@/components/business/ClientCode';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';
import CircleProgress from '@/components/ui/CircleProgress';
import { Button, ButtonGroup } from '@/components/ui/Button';
import { defaultCode, sizeCode, colorsCode, controlledCode } from '@/codes/demos/code.circle-progresses';

const list: AnchorItem[] = [
  { anchorId: 'default', label: 'default' },
  { anchorId: 'size', label: 'size' },
  { anchorId: 'colors', label: 'colors' },
  { anchorId: 'controlled', label: 'controlled' },
];
const MIN = 10;
const MAX = 90;
export default function CircleProgressPage({ sourceCode }: { sourceCode?: string }) {
  const [percent, setPercent] = useState(10);
  const changePercent = (step: number) => {
    const newPercent = percent + step;
    if (newPercent < MIN || newPercent > MAX) {
      return;
    }
    setPercent(newPercent);
  };
  return (
    <div className="flex">
      <div className="main-container">
        <SectionIntro title="CircleProgress" description="CircleProgress is a progress indicator component that displays the progress of a task in a circular shape." />
        <CodeDrawer isClient code={sourceCode} />
        <PreviewAndCode anchorId="default" title="default" codeText={defaultCode} code={<ClientCode code={defaultCode} />}>
          <CircleProgress percent={30} />
        </PreviewAndCode>
        <PreviewAndCode anchorId="size" title="size" codeText={sizeCode} code={<ClientCode code={sizeCode} />}>
          <div className="flex items-center gap-4">
            <CircleProgress size="sm" percent={30} />
            <CircleProgress size="md" percent={30} />
            <CircleProgress size="lg" percent={30} />
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="colors" title="colors" codeText={colorsCode} code={<ClientCode code={colorsCode} />}>
          <div className="flex items-center gap-4">
            <CircleProgress colors="primary" percent={30} />
            <CircleProgress colors="secondary" percent={30} />
            <CircleProgress colors="warning" percent={30} />
            <CircleProgress colors="danger" percent={30} />
            <CircleProgress colors="neutral" percent={30} />
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="controlled" title="controlled" codeText={controlledCode} code={<ClientCode code={controlledCode} />}>
          <div className="flex w-fit flex-col items-center gap-2">
            <CircleProgress percent={percent} min={MIN} max={MAX} size="lg">
              <span className="text-sm">{percent}%</span>
            </CircleProgress>
            <ButtonGroup size="sm">
              <Button onClick={() => changePercent(-10)}>-</Button>
              <Button onClick={() => changePercent(10)}>+</Button>
            </ButtonGroup>
          </div>
        </PreviewAndCode>
      </div>
      <OnThisPage list={list} />
    </div>
  );
}
