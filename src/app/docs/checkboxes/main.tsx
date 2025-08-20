'use client';
import { useEffect, useState } from 'react';
import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import ClientCode from '@/components/business/ClientCode';
import { Checkbox, CheckboxCard } from '@/components/ui/Checkbox';
import { defaultCode, indeterminateCode, sizeCode, disabledCode, verticalCode, customContentCode, checkboxCardCode } from '@/codes/demos/code.checkboxes';
import CodeDrawer from '@/components/business/CodeDrawer';
import { IconBrandNextjs, IconBrandNuxt, IconBrandVue, IconBrandReact } from '@tabler/icons-react';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';

const navList: AnchorItem[] = [
  { anchorId: 'default', label: 'default' },
  { anchorId: 'indeterminate', label: 'indeterminate' },
  { anchorId: 'size', label: 'size' },
  { anchorId: 'disabled', label: 'disabled' },
  { anchorId: 'orientation', label: 'orientation' },
  { anchorId: 'custom-content', label: 'custom content' },
  { anchorId: 'checkbox-card', label: 'checkbox card' },
];

const CHECKBOX_LIST = ['apple', 'banana', 'pear'];

export default function CheckboxPage({ sourceCode }: { sourceCode?: string }) {
  const [checked, setChecked] = useState<boolean | 'indeterminate'>(false);
  const [checkedList, setCheckedList] = useState<string[]>([]);

  const toggleCheckAll = (val: boolean | 'indeterminate') => {
    setChecked(val);
    if (val === true) {
      setCheckedList(CHECKBOX_LIST);
    } else {
      setCheckedList([]);
    }
  };

  const handleOnCheckedChange = (value: string) => {
    if (checkedList.includes(value)) {
      setCheckedList((prev) => prev.filter((item) => item !== value));
    } else {
      setCheckedList((prev) => [...prev, value]);
    }
  };

  useEffect(() => {
    if (checkedList.length === 3) {
      setChecked(true);
    } else if (checkedList.length === 0) {
      setChecked(false);
    } else {
      setChecked('indeterminate');
    }
  }, [checkedList, setChecked]);
  return (
    <div className="flex">
      <div className="main-container @container">
        <SectionIntro title="Checkbox" description="Checkboxes allow user to select multiple items from a list, or mark on item as selected." />
        <CodeDrawer isClient code={sourceCode} />
        <PreviewAndCode anchorId="default" codeText={defaultCode} title="default" code={<ClientCode code={defaultCode} />}>
          <Checkbox defaultChecked value="one" id="one">
            One
          </Checkbox>
        </PreviewAndCode>
        <PreviewAndCode anchorId="indeterminate" title="indeterminate" codeText={indeterminateCode} code={<ClientCode code={indeterminateCode} />}>
          <div>
            <Checkbox checked={checked} value="all" id="all" onCheckedChange={toggleCheckAll}>
              Select All
            </Checkbox>
            <div className="mt-4 flex items-center gap-4">
              {CHECKBOX_LIST.map((item) => (
                <Checkbox key={item} value={item} id={item} checked={checkedList.includes(item)} onCheckedChange={() => handleOnCheckedChange(item)}>
                  {item}
                </Checkbox>
              ))}
            </div>
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="size" codeText={sizeCode} title="size" code={<ClientCode code={sizeCode} />}>
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
        <PreviewAndCode anchorId="disabled" codeText={disabledCode} title="disabled" code={<ClientCode code={disabledCode} />}>
          <Checkbox value="cookies" defaultChecked disabled>
            Accept All Cookies
          </Checkbox>
        </PreviewAndCode>
        <PreviewAndCode
          anchorId="orientation"
          codeText={verticalCode}
          description="orientation,support horizontal and vertical, default is horizontal"
          title="orientation"
          code={<ClientCode code={verticalCode} />}>
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
        <PreviewAndCode anchorId="custom-content" codeText={customContentCode} title="custom content" code={<ClientCode code={customContentCode} />}>
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
        <PreviewAndCode anchorId="checkbox-card" title="Checkbox Card" codeText={checkboxCardCode} code={<ClientCode code={checkboxCardCode} />}>
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
