export const defaultCode = `import { Checkbox } from "@/components/ui/Checkbox";

export default function Page() {
  return (
    <Checkbox defaultChecked value="one" id="one">One</Checkbox>
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
