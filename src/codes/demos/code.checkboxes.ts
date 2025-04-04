export const defaultCode = `import Checkbox from "@/components/ui/Checkbox";

export default function Page() {
  return (
    <Checkbox defaultChecked value="one">One</Checkbox>
  )
}
`;

export const sizeCode = `import Checkbox from "@/components/ui/Checkbox";

export default function Page() {
  return (
    <div className="flex items-center gap-2.5">
      <Checkbox size="sm" value="small">Small</Checkbox>
      <Checkbox size="md" value="medium">Medium</Checkbox>
      <Checkbox size="lg" value="large">Large</Checkbox>
    </div>
  )
}
`;

export const disabledCode = `import Checkbox from "@/components/ui/Checkbox";

export default function Page() {
  return (
    <Checkbox value="cookies" defaultChecked disabled>Accept All Cookies</Checkbox>
  )
}
`;

export const verticalCode = `import Checkbox from "@/components/ui/Checkbox";

export default function Page() {
  return (
    <div className="grid gap-2.5">
      <Checkbox value="android">Android</Checkbox>
      <Checkbox value="ios">IOS</Checkbox>
      <Checkbox value="harmonyOS">HarmonyOS</Checkbox>
    </div>
  )
}
`;

export const customContentCode = `import Checkbox from "@/components/ui/Checkbox";

export default function Page() {
  return (
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
  )
}
`;
