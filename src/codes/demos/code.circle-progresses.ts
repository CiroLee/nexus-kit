export const defaultCode = `import CircleProgress from "@/components/ui/CircleProgress";

export default function Page() {
  return (
    <CircleProgress percent={30} />
  )
}`;

export const sizeCode = `import CircleProgress from "@/components/ui/CircleProgress";

export default function Page() {
  return (
    <div className="flex items-center gap-4">
      <CircleProgress size="sm" percent={30} />
      <CircleProgress size="md" percent={30} />
      <CircleProgress size="lg" percent={30} />
    </div>
  )
}`;

export const colorsCode = `import CircleProgress from "@/components/ui/CircleProgress";

export default function Page() {
  return (
    <div className="flex items-center gap-4">
      <CircleProgress colors="primary" percent={30} />
      <CircleProgress colors="secondary" percent={30} />
      <CircleProgress colors="warning" percent={30} />
      <CircleProgress colors="danger" percent={30} />
      <CircleProgress colors="neutral" percent={30} />
    </div>
  )
}`;

export const controlledCode = `import { useState } from 'react';
import CircleProgress from "@/components/ui/CircleProgress";

const MIN = 10;
const MAX = 90;

export default function Page() {
  const [percent, setPercent] = useState(10);
  const changePercent = (step: number) => {
    const newPercent = percent + step;
    if (newPercent < MIN || newPercent > MAX) {
      return;
    }
    setPercent(newPercent);
  };

  return (
    <div className="flex flex-col justify-center gap-2">
      <CircleProgress percent={percent} min={MIN} max={MAX}>
        <span className="text-sm">{percent}%</span>
      </CircleProgress>
      <ButtonGroup>
        <Button size="sm" onClick={() => changePercent(-10)}>
          -
        </Button>
        <Button size="sm" onClick={() => changePercent(10)}>
          +
        </Button>
      </ButtonGroup>
    </div>
  )
}`;
