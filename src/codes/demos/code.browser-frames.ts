export const macOSCode = `import BrowserFrame from "@/components/ui/BrowserFrame";

export default function Page() {
  return (
    <BrowserFrame browserType="macOS" />
  )
}`;

export const windowsCode = `import BrowserFrame from "@/components/ui/BrowserFrame";

export default function Page() {
  return (
    <BrowserFrame browserType="windows" />
  )
}`;

export const showUrlCode = `import BrowserFrame from "@/components/ui/BrowserFrame";

export default function Page() {
  return (
    <BrowserFrame browserType="macOS" url="https://nexus-kit.vercel.app" />
  )
}`;

export const showTitleCode = `import BrowserFrame from "@/components/ui/BrowserFrame";

export default function Page() {
  return (
    <BrowserFrame browserType="macOS" title="Nexus Kit" />
  )
}`;

export const asIFrameCode = `import BrowserFrame from "@/components/ui/BrowserFrame";

export default function Page() {
  return (
     <BrowserFrame browserType="macOS" title="Nexus Kit" asIFrame url="https://nexus-kit.vercel.app" />
  )
}`;

export const customContentCode = `import BrowserFrame from "@/components/ui/BrowserFrame";

export default function Page() {
  return (
    <BrowserFrame browserType="macOS" title="Nexus Kit">
      <p className="p-4">custom content</p>
    </BrowserFrame>
  )
}`;
