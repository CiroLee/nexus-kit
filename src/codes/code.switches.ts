export const defaultCode = `import Switch from "@/components/Switch";

export default function Page() {
  return (
    <Switch defaultChecked />
  )
}
`;

export const labelCode = `import Switch from "@/components/Switch";

export default function Page() {
  return (
    <Switch>Auto Translation</Switch>
  )
}
`;

export const sizeCode = `import Switch from "@/components/Switch";

export default function Page() {
  return (
    <div className="flex items-center gap-4">
      <Switch size="sm">Small</Switch>
      <Switch size="md">Medium</Switch>
      <Switch size="lg">Large</Switch>
    </div>
  )
}
`;

export const disabledCode = `import Switch from "@/components/Switch";

export default function Page() {
  return (
    <Switch disabled>disabled</Switch>
  )
}
`;
