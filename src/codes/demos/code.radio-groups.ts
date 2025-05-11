export const defaultCode = `import { RadioGroup, Radio } from "@/components/ui/RadioGroup";

export default function Page() {
  return (
    <RadioGroup defaultValue="apple">
      <Radio value="banana">Banana</Radio>
      <Radio value="apple">Apple</Radio>
      <Radio value="orange">Orange</Radio>
    </RadioGroup>
  )
}`;

export const orientationHCode = `import { RadioGroup, Radio } from "@/components/ui/RadioGroup";
import Heading from '@/components/ui/Heading';

export default function Page() {
  return (
    <RadioGroup orientation="horizontal">
      <Radio value="banana" id="1">Banana</Radio>
      <Radio value="apple" id="2">Apple</Radio>
      <Radio value="orange" id="3">Orange</Radio>
    </RadioGroup>
  )
}`;

export const orientationVCode = `import { RadioGroup, Radio } from "@/components/ui/RadioGroup";
import Heading from '@/components/ui/Heading';

export default function Page() {
  return (
    <RadioGroup orientation="vertical">
      <Radio value="banana" id="4">Banana</Radio>
      <Radio value="apple" id="5">Apple</Radio>
      <Radio value="orange" id="6">Orange</Radio>
    </RadioGroup>
  )
}`;

export const sizeCode = `import { RadioGroup, Radio } from "@/components/ui/RadioGroup";

export default function Page() {
  return (
    <RadioGroup>
      <Radio size="sm" value="banana" id="7" />
      <Radio size="md" value="apple" id="8" />
      <Radio size="lg" value="orange" id="9" />
    </RadioGroup>
  )
}`;

export const disabledCode = `import { RadioGroup, Radio } from "@/components/ui/RadioGroup";

export default function Page() {
  return (
    <RadioGroup disabled defaultValue="apple">
      <Radio value="banana" id="10">Banana</Radio>
      <Radio value="apple" id="11">Apple</Radio>
      <Radio value="orange" id="12">Orange</Radio>
    </RadioGroup>
  )
}`;

export const customContentCode = `import { RadioGroup, Radio } from "@/components/ui/RadioGroup";

export default function Page() {
  return (
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
  )
}`;

export const radioCardCode = `import { RadioGroup, RadioCard } from "@/components/ui/RadioGroup";

export default function Page() {
  return (
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
  )
}`;

export const radioCardIconCode = `import { RadioGroup, RadioCard } from "@/components/ui/RadioGroup";

export default function Page() {
  return (
    <RadioGroup>
      <RadioCard value="s" id="s" className="size-9 p-0">S</RadioCard>
      <RadioCard value="m" id="m" className="size-9 p-0">M</RadioCard>
      <RadioCard value="l" id="l" className="size-9 p-0">L</RadioCard>
    </RadioGroup>
  )
}`;
