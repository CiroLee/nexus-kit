import PreviewAndCode from '@/components/PreviewAndCode';
import Button from '@/components/ui/Button';
import Code from '@/components/Code';
import { sizeCode } from '@/codes/code.buttons';

export default function ButtonsPage() {
  return (
    <div>
      <PreviewAndCode code={<Code code={sizeCode} />}>
        <div>
          <Button variant="ghost">Button</Button>
        </div>
      </PreviewAndCode>
    </div>
  );
}
