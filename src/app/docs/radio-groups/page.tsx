import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import Code from '@/components/business/Code';
import { RadioGroup, Radio } from '@/components/ui/RadioGroup';
import { defaultCode, orientationHCode, orientationVCode, sizeCode, disabledCode, customContentCode } from '@/codes/demos/code.radio-groups';

export default function RadioGroupPage() {
  return (
    <>
      <SectionIntro title="RadioGroup" description="RadioGroup is a group of radio buttons" />
      <PreviewAndCode title="default" code={<Code code={defaultCode} />}>
        <RadioGroup defaultValue="apple">
          <Radio value="banana">Banana</Radio>
          <Radio value="apple">Apple</Radio>
          <Radio value="orange">Orange</Radio>
        </RadioGroup>
      </PreviewAndCode>
      <PreviewAndCode title="orientation(horizontal)" code={<Code code={orientationHCode} />}>
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
      <PreviewAndCode title="orientation(vertical)" code={<Code code={orientationVCode} />}>
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
      <PreviewAndCode title="size" code={<Code code={sizeCode} />}>
        <RadioGroup>
          <Radio size="sm" value="banana" id="7" />
          <Radio size="md" value="apple" id="8" />
          <Radio size="lg" value="orange" id="9" />
        </RadioGroup>
      </PreviewAndCode>
      <PreviewAndCode title="disabled" code={<Code code={disabledCode} />}>
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
      <PreviewAndCode title="custom content" code={<Code code={customContentCode} />}>
        <RadioGroup>
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
    </>
  );
}
