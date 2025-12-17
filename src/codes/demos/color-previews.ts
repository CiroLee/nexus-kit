export const defaultCode = `import ColorPreview from '@/components/ui/ColorPreview';

export default function Page() {
  return (
    <div className="flex flex-col gap-2">
      <ColorPreview color="#b02525" />
      <ColorPreview color="#4263eb" />
      <ColorPreview color="#37b24d" />
    </div>
  )
}`;

export const alphaCode = `import ColorPreview from '@/components/ui/ColorPreview';

export default function Page() {
  return (
    <div className="flex flex-col gap-2">
      <ColorPreview color="rgb(223 38 0 / 60%)" />
      <ColorPreview color="rgb(0 0 192 / 60%)" />
      <ColorPreview color="rgb(0 143 74 / 60%)" />
    </div>
  )
}`;

export const inTypographyCode = `import ColorPreview from '@/components/ui/ColorPreview';

export default function Page() {
  return (
    <div className="leading-loose">
      Use color <ColorPreview color="#4263eb" className="mx-0.5 align-middle" /> as brand color, and gray <ColorPreview color="#3a3a37" className="mx-0.5 align-middle" /> as background color,
      and reserve using pure colors like <ColorPreview color="rgb(0 0 0 / 60%)" className="mx-0.5 align-middle" /> for interactive elements.
    </div>
  )
}`;
