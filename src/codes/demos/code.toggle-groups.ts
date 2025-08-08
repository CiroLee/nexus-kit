export const defaultCode = `import { ToggleGroup, ToggleGroupItem } from "@/components/ui/ToggleGroup";
import { IconBold, IconItalic, IconUnderline } from '@tabler/icons-react';

export default function Page() {
  return (
    <ToggleGroup type="single">
      <ToggleGroupItem value="bold">
        <IconBold size={20} />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic">
        <IconItalic size={20} />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline">
        <IconUnderline size={20} />
      </ToggleGroupItem>
    </ToggleGroup>
)
}`;

export const multipleCode = `import { ToggleGroup, ToggleGroupItem } from "@/components/ui/ToggleGroup";
import { IconBold, IconItalic, IconUnderline } from '@tabler/icons-react';

export default function Page() {
  return (
    <ToggleGroup type="multiple">
      <ToggleGroupItem value="bold">
        <IconBold size={20} />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic">
        <IconItalic size={20} />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline">
        <IconUnderline size={20} />
      </ToggleGroupItem>
    </ToggleGroup>
)
}`;

export const variantCode = `import { ToggleGroup, ToggleGroupItem } from "@/components/ui/ToggleGroup";
import { IconBold, IconItalic, IconUnderline } from '@tabler/icons-react';

export default function Page() {
  return (
    <div className="space-y-4">
      <ToggleGroup type="single" variant="light">
        <ToggleGroupItem value="bold">
          <IconBold size={20} />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic">
          <IconItalic size={20} />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline">
          <IconUnderline size={20} />
        </ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup type="single" variant="bordered">
        <ToggleGroupItem value="bold">
          <IconBold size={20} />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic">
          <IconItalic size={20} />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline">
          <IconUnderline size={20} />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
)
}`;

export const sizeCode = `import { ToggleGroup, ToggleGroupItem, type ToggleGroupVariants } from "@/components/ui/ToggleGroup";
import { IconBold, IconItalic, IconUnderline } from '@tabler/icons-react';

export default function Page() {
  return (
    <div className="space-y-4">
      {['sm', 'md', 'lg'].map((size) => (
        <ToggleGroup key={size} type="multiple" size={size as ToggleGroupVariants['size']}>
          <ToggleGroupItem value="bold">
            <IconBold size={16} />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic">
            <IconItalic size={16} />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline">
            <IconUnderline size={16} />
          </ToggleGroupItem>
        </ToggleGroup>
      ))}
    </div>
)
}`;

export const disabledCode = `import { ToggleGroup, ToggleGroupItem } from "@/components/ui/ToggleGroup";
import { IconBold, IconItalic, IconUnderline } from '@tabler/icons-react';

export default function Page() {
  return (
    <div className="space-y-4">
      <ToggleGroup type="single" disabled>
        <ToggleGroupItem value="bold">
          <IconBold size={20} />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic">
          <IconItalic size={20} />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline">
          <IconUnderline size={20} />
        </ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup type="single" variant="bordered">
        <ToggleGroupItem value="bold">
          <IconBold size={20} />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" disabled>
          <IconItalic size={20} />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline">
          <IconUnderline size={20} />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
)
}`;
