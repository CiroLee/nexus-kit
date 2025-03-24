import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import Code from '@/components/business/Code';
import Checkbox from '@/components/ui/Checkbox';
import { defaultCode, sizeCode, disabledCode, verticalCode, customContentCode } from '@/codes/demos/code.checkboxes';

export default function CheckboxPage() {
  return (
    <>
      <SectionIntro title="Checkbox" description="Checkboxes allow user to select multiple items from a list, or mark on item as selected" />
      <PreviewAndCode title="default" code={<Code code={defaultCode} />}>
        <Checkbox defaultChecked value="one">
          One
        </Checkbox>
      </PreviewAndCode>
      <PreviewAndCode title="size" code={<Code code={sizeCode} />}>
        <div className="flex items-center gap-2.5">
          <Checkbox size="sm" value="small">
            Small
          </Checkbox>
          <Checkbox size="md" value="medium">
            Medium
          </Checkbox>
          <Checkbox size="lg" value="large">
            Large
          </Checkbox>
        </div>
      </PreviewAndCode>
      <PreviewAndCode title="disabled" code={<Code code={disabledCode} />}>
        <Checkbox value="cookies" defaultChecked disabled>
          Accept All Cookies
        </Checkbox>
      </PreviewAndCode>
      <PreviewAndCode title="orientation-vertical" code={<Code code={verticalCode} />}>
        <div className="grid gap-2.5">
          <Checkbox value="android">Android</Checkbox>
          <Checkbox value="ios">IOS</Checkbox>
          <Checkbox value="harmonyOS">HarmonyOS</Checkbox>
        </div>
      </PreviewAndCode>
      <PreviewAndCode title="custom content" code={<Code code={customContentCode} />}>
        <div className="flex items-center gap-2.5">
          <Checkbox value="0.2-sugar">
            <p className="font-bold">Less Sugar</p>
            <p className="text-sm text-gray-400">20% sugar</p>
          </Checkbox>
          <Checkbox value="0.5-sugar">
            <p className="font-bold">Half Sugar</p>
            <p className="text-sm text-gray-400">50% sugar</p>
          </Checkbox>
          <Checkbox value="0-sugar">
            <p className="font-bold">Sugar-Free</p>
            <p className="text-sm text-gray-400">0% sugar</p>
          </Checkbox>
        </div>
      </PreviewAndCode>
    </>
  );
}
