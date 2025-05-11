export const defaultCode = `import Tooltip from "@/components/ui/Tooltip";
import Button from "@/components/ui/Button";

export default function Page() {
  return (
    <ToolTip trigger={<Button>Hover Me</Button>}>tooltip</ToolTip>
  )
}`;

export const placementCode = `import Tooltip from "@/components/ui/Tooltip";
import Button from "@/components/ui/Button";

export default function Page() {
  return (
    <ToolTip side="right" align="end" trigger={<Button>Hover Me</Button>}>tooltip</ToolTip>
  )
}`;
export const offsetCode = `import Tooltip from "@/components/ui/Tooltip";
import Button from "@/components/ui/Button";

export default function Page() {
  return (
    <ToolTip side="right" align="end" sideOffset={10} trigger={<Button>Hover Me</Button>}>tooltip</ToolTip>
  )
}`;

export const hiddenArrowCode = `import Tooltip from "@/components/ui/Tooltip";
import Button from "@/components/ui/Button";

export default function Page() {
  return (
    <ToolTip hiddenArrow trigger={<Button>Hover Me</Button>}>tooltip</ToolTip>
  )
}`;
