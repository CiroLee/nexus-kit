import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import CodeBox from '@/components/business/CodeBox';
import { Checkbox, CheckboxCard } from '@/components/ui/Checkbox';
import { defaultCode, sizeCode, disabledCode, verticalCode, customContentCode, checkboxCardCode } from '@/codes/demos/code.checkboxes';
import CodeDrawer from '@/components/business/CodeDrawer';
import { IconBrandNextjs, IconBrandNuxt, IconBrandVue, IconBrandReact } from '@tabler/icons-react';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';
import { getSourceCode } from '@/app/api/github';

const navList: AnchorItem[] = [
  {
    anchorId: 'default',
    label: 'default',
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
    anchorId: 'orientation',
    label: 'orientation',
  },
  {
    anchorId: 'custom-content',
    label: 'custom content',
  },
  {
    anchorId: 'checkbox-card',
    label: 'checkbox card',
  },
];

export default async function CheckboxPage() {
  const sourceCode = await getSourceCode('Checkbox/index.tsx');
  return (
    <div className="flex">
      <div className="main-container">
        <SectionIntro title="Checkbox" description="Checkboxes allow user to select multiple items from a list, or mark on item as selected." />
        <CodeDrawer code={sourceCode} />
        <PreviewAndCode anchorId="default" codeText={defaultCode} title="default" code={<CodeBox code={defaultCode} />}>
          <Checkbox defaultChecked value="one" id="one">
            One
          </Checkbox>
        </PreviewAndCode>
        <PreviewAndCode anchorId="size" codeText={sizeCode} title="size" code={<CodeBox code={sizeCode} />}>
          <div className="flex items-center gap-2.5">
            <Checkbox size="sm" value="small" id="small">
              Small
            </Checkbox>
            <Checkbox size="md" value="medium" id="medium">
              Medium
            </Checkbox>
            <Checkbox size="lg" value="large" id="large">
              Large
            </Checkbox>
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="disabled" codeText={disabledCode} title="disabled" code={<CodeBox code={disabledCode} />}>
          <Checkbox value="cookies" defaultChecked disabled>
            Accept All Cookies
          </Checkbox>
        </PreviewAndCode>
        <PreviewAndCode
          anchorId="orientation"
          codeText={verticalCode}
          description="orientation,support horizontal and vertical, default is horizontal"
          title="orientation"
          code={<CodeBox code={verticalCode} />}>
          <div className="grid gap-2.5">
            <Checkbox value="android" id="android">
              Android
            </Checkbox>
            <Checkbox value="ios" id="ios">
              IOS
            </Checkbox>
            <Checkbox value="harmonyOS" id="harmonyOS">
              HarmonyOS
            </Checkbox>
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="custom-content" codeText={customContentCode} title="custom content" code={<CodeBox code={customContentCode} />}>
          <div className="flex items-center gap-2.5">
            <Checkbox value="apple-juice" id="apple-juice">
              <p className="font-bold">Apple Juice</p>
              <p className="text-sm text-gray-400">half sugar</p>
            </Checkbox>
            <Checkbox value="orange-juice" id="orange-juice">
              <p className="font-bold">Orange Juice</p>
              <p className="text-sm text-gray-400">50% sugar</p>
            </Checkbox>
            <Checkbox value="milk" id="milk">
              <p className="font-bold">Milk</p>
              <p className="text-sm text-gray-400">0% sugar</p>
            </Checkbox>
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="checkbox-card" title="Checkbox Card" codeText={checkboxCardCode} code={<CodeBox code={checkboxCardCode} />}>
          <div className="flex items-center gap-2.5">
            <CheckboxCard value="nextjs" id="nextjs">
              <div className="flex items-center gap-1">
                <IconBrandNextjs size={20} />
                Nextjs
              </div>
            </CheckboxCard>
            <CheckboxCard value="nuxtjs" id="nuxtjs">
              <div className="flex items-center gap-1">
                <IconBrandNuxt size={20} />
                Nuxtjs
              </div>
            </CheckboxCard>
            <CheckboxCard value="vuejs" id="vuejs">
              <div className="flex items-center gap-1">
                <IconBrandVue size={20} />
                Vuejs
              </div>
            </CheckboxCard>
            <CheckboxCard value="react" id="react">
              <div className="flex items-center gap-1">
                <IconBrandReact size={20} />
                React
              </div>
            </CheckboxCard>
          </div>
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
