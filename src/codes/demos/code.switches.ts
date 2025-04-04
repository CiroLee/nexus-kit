export const defaultCode = `import Switch from "@/components/ui/Switch";

export default function Page() {
  return (
    <Switch defaultChecked />
  )
}
`;

export const labelCode = `import Switch from "@/components/ui/Switch";

export default function Page() {
  return (
    <Switch id="auto-trans">Auto Translation</Switch>
  )
}
`;

export const sizeCode = `import Switch from "@/components/ui/Switch";

export default function Page() {
  return (
    <div className="flex items-center gap-4">
      <Switch size="sm" id="small">Small</Switch>
      <Switch size="md" id="medium">Medium</Switch>
      <Switch size="lg" id="large">Large</Switch>
    </div>
  )
}
`;

export const disabledCode = `import Switch from "@/components/ui/Switch";

export default function Page() {
  return (
    <Switch disabled>disabled</Switch>
  )
}
`;
