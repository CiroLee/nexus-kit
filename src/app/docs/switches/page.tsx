import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import Code from '@/components/business/Code';
import Switch from '@/components/ui/Switch';
import { defaultCode, labelCode, sizeCode, disabledCode } from '@/codes/demos/code.switches';

export default function SwitchPage() {
  return (
    <>
      <SectionIntro title="Switch" description="Switches are used to toggle between two mutually exclusive states" />
      <PreviewAndCode title="default" code={<Code code={defaultCode} />}>
        <Switch defaultChecked />
      </PreviewAndCode>
      <PreviewAndCode title="with label" code={<Code code={labelCode} />}>
        <Switch>Auto Translation</Switch>
      </PreviewAndCode>
      <PreviewAndCode title="size" code={<Code code={sizeCode} />}>
        <div className="flex items-center gap-4">
          <Switch size="sm">Small</Switch>
          <Switch size="md">Medium</Switch>
          <Switch size="lg">Large</Switch>
        </div>
      </PreviewAndCode>
      <PreviewAndCode title="disabled" code={<Code code={disabledCode} />}>
        <Switch disabled>disabled</Switch>
      </PreviewAndCode>
    </>
  );
}
