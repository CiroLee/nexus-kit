export const defaultCode = `import { Checkbox } from "@/components/ui/Checkbox";

export default function Page() {
  return (
    <Checkbox defaultChecked value="one" id="one">One</Checkbox>
  )
}`;

export const indeterminateCode = `import { useEffect, useState } from 'react';
import { Checkbox } from "@/components/ui/Checkbox";

const CHECKBOX_LIST = ['apple', 'banana', 'pear'];

export default function Page() {
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
  )
}`;

export const sizeCode = `import { Checkbox } from "@/components/ui/Checkbox";

export default function Page() {
  return (
    <div className="flex items-center gap-2.5">
      <Checkbox size="sm" value="small" id="small">Small</Checkbox>
      <Checkbox size="md" value="medium" id="medium">Medium</Checkbox>
      <Checkbox size="lg" value="large" id="large">Large</Checkbox>
    </div>
  )
}`;

export const disabledCode = `import { Checkbox } from "@/components/ui/Checkbox";

export default function Page() {
  return (
    <Checkbox value="cookies" defaultChecked disabled>Accept All Cookies</Checkbox>
  )
}`;

export const verticalCode = `import { Checkbox } from "@/components/ui/Checkbox";

export default function Page() {
  return (
    <div className="grid gap-2.5">
      <Checkbox value="android" id="android">Android</Checkbox>
      <Checkbox value="ios" id="ios">IOS</Checkbox>
      <Checkbox value="harmonyOS" id="harmonyOS">HarmonyOS</Checkbox>
    </div>
  )
}`;

export const customContentCode = `import { Checkbox } from "@/components/ui/Checkbox";

export default function Page() {
  return (
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
  )
}`;

export const checkboxCardCode = `import { CheckboxCard } from "@/components/ui/Checkbox";

export default function Page() {
  return (
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
  )
}`;
