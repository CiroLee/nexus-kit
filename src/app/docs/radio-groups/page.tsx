import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import Code from '@/components/business/Code';
import { RadioGroup, Radio, RadioCard } from '@/components/ui/RadioGroup';
import { defaultCode, orientationHCode, orientationVCode, sizeCode, disabledCode, customContentCode, radioCardCode, radioCardIconCode } from '@/codes/demos/code.radio-groups';
import sourceCode from '@/codes/sources/source.radio-group';
import CodeDrawer from '@/components/business/CodeDrawer';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';

const navList: AnchorItem[] = [
  {
    anchorId: 'default',
    label: 'default',
  },
  {
    anchorId: 'orientation-horizontal',
    label: 'orientation horizontal',
  },
  {
    anchorId: 'orientation vertical',
    label: 'orientation vertical',
  },
  {
    anchorId: 'size',
    label: 'size',
  },
  {
    anchorId: 'disabled',
    label: 'disabled',
  },
  {
    anchorId: 'custom-content',
    label: 'custom content',
  },
  {
    anchorId: 'radio-card',
    label: 'Radio Card',
  },
  {
    anchorId: 'radio-card-icon',
    label: 'Radio Card Icon',
  },
];

export default function RadioGroupPage() {
  return (
    <div className="flex">
      <div className="main-container">
        <SectionIntro title="RadioGroup" description="RadioGroup is a group of radio buttons." />
        <CodeDrawer code={sourceCode} />
        <PreviewAndCode anchorId="default" title="default" codeText={defaultCode} code={<Code code={defaultCode} />}>
          <RadioGroup defaultValue="apple">
            <Radio value="banana" id="banana">
              Banana
            </Radio>
            <Radio value="apple" id="apple">
              Apple
            </Radio>
            <Radio value="orange" id="orange">
              Orange
            </Radio>
          </RadioGroup>
        </PreviewAndCode>
        <PreviewAndCode anchorId="orientation-horizontal" title="orientation horizontal" codeText={orientationHCode} code={<Code code={orientationHCode} />}>
          <RadioGroup orientation="horizontal">
            <Radio value="banana" id="1">
              Banana
            </Radio>
            <Radio value="apple" id="2">
              Apple
            </Radio>
            <Radio value="orange" id="3">
              Orange
            </Radio>
          </RadioGroup>
        </PreviewAndCode>
        <PreviewAndCode anchorId="orientation vertical" title="orientation vertical" codeText={orientationVCode} code={<Code code={orientationVCode} />}>
          <RadioGroup orientation="vertical">
            <Radio value="banana" id="4">
              Banana
            </Radio>
            <Radio value="apple" id="5">
              Apple
            </Radio>
            <Radio value="orange" id="6">
              Orange
            </Radio>
          </RadioGroup>
        </PreviewAndCode>
        <PreviewAndCode anchorId="size" title="size" codeText={sizeCode} code={<Code code={sizeCode} />}>
          <RadioGroup>
            <Radio size="sm" value="banana" id="7" />
            <Radio size="md" value="apple" id="8" />
            <Radio size="lg" value="orange" id="9" />
          </RadioGroup>
        </PreviewAndCode>
        <PreviewAndCode anchorId="disabled" title="disabled" codeText={disabledCode} code={<Code code={disabledCode} />}>
          <RadioGroup disabled defaultValue="apple">
            <Radio value="banana" id="10">
              Banana
            </Radio>
            <Radio value="apple" id="11">
              Apple
            </Radio>
            <Radio value="orange" id="12">
              Orange
            </Radio>
          </RadioGroup>
        </PreviewAndCode>
        <PreviewAndCode anchorId="custom-content" title="custom content" codeText={customContentCode} code={<Code code={customContentCode} />}>
          <RadioGroup className="flex-col md:flex-row">
            <Radio value="apple" id="apple-juice">
              <p className="font-bold">🍎 Apple Juice</p>
              <p className="text-sm text-gray-400">20% sugar</p>
            </Radio>
            <Radio value="banana" id="banana-juice">
              <p className="font-bold">🍌 Banana Juice</p>
              <p className="text-sm text-gray-400">30% sugar</p>
            </Radio>
            <Radio value="orange" id="orange-juice" className="text-sm">
              <p className="font-bold">🍊 Orange Juice</p>
              <p className="text-sm text-gray-400">30% sugar</p>
            </Radio>
          </RadioGroup>
        </PreviewAndCode>
        <PreviewAndCode anchorId="radio-card" codeText={radioCardCode} title="Radio Card" code={<Code code={radioCardCode} />}>
          <RadioGroup className="flex-col md:grid md:max-w-160 md:grid-cols-3 md:flex-row">
            <RadioCard value="free" id="free" className="text-start">
              <p className="font-bold">Free</p>
              <p className="text-description text-sm">Up to 20 users</p>
            </RadioCard>
            <RadioCard value="Pro" id="pro" className="text-start">
              <p className="font-bold">Pro</p>
              <p className="text-description text-sm">Up to 50 users</p>
            </RadioCard>
            <RadioCard value="Enterprise" id="enterprise" className="text-start">
              <p className="font-bold">Enterprise</p>
              <p className="text-description text-sm">Unlimited, contact us to custom</p>
            </RadioCard>
          </RadioGroup>
        </PreviewAndCode>
        <PreviewAndCode anchorId="radio-card-icon" title="Radio Card Icon" codeText={radioCardIconCode} code={<Code code={radioCardIconCode} />}>
          <RadioGroup>
            <RadioCard value="s" id="s" className="size-9 p-0">
              S
            </RadioCard>
            <RadioCard value="m" id="m" className="size-9 p-0">
              M
            </RadioCard>
            <RadioCard value="l" id="l" className="size-9 p-0">
              L
            </RadioCard>
          </RadioGroup>
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
