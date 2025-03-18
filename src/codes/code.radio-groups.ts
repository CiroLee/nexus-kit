export const defaultCode = `import { RadioGroup, Radio } from "@/components/RadioGroup";

export default function Page() {
  return (
    <RadioGroup defaultValue="apple">
      <Radio value="banana">Banana</Radio>
      <Radio value="apple">Apple</Radio>
      <Radio value="orange">Orange</Radio>
    </RadioGroup>
  )
}
`;

export const orientationCode = `import { RadioGroup, Radio } from "@/components/RadioGroup";
import Heading from '@/components/Heading';

export default function Page() {
  return (
    <div>
      <Heading as="h4" className="mb-4">horizontal</Heading>
      <RadioGroup orientation="horizontal">
        <Radio value="banana" id="1">Banana</Radio>
        <Radio value="apple" id="2">Apple</Radio>
        <Radio value="orange" id="3">Orange</Radio>
      </RadioGroup>
      <Heading as="h4" className="my-4">vertical</Heading>
      <RadioGroup orientation="vertical">
        <Radio value="banana" id="4">Banana</Radio>
        <Radio value="apple" id="5">Apple</Radio>
        <Radio value="orange" id="6">Orange</Radio>
      </RadioGroup>
    </div>
  )
}
`;

export const sizeCode = `import { RadioGroup, Radio } from "@/components/RadioGroup";

export default function Page() {
  return (
    <RadioGroup>
      <Radio size="sm" value="banana" id="7" />
      <Radio size="md" value="apple" id="8" />
      <Radio size="lg" value="orange" id="9" />
    </RadioGroup>
  )
}
`;

export const disabledCode = `import { RadioGroup, Radio } from "@/components/RadioGroup";

export default function Page() {
  return (
    <RadioGroup disabled defaultValue="apple">
      <Radio value="banana" id="10">Banana</Radio>
      <Radio value="apple" id="11">Apple</Radio>
      <Radio value="orange" id="12">Orange</Radio>
    </RadioGroup>
  )
}
`;

export const customContentCode = `import { RadioGroup, Radio } from "@/components/RadioGroup";

export default function Page() {
  return (
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
  )
}
`;
