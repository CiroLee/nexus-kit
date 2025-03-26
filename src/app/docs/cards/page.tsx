import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import Code from '@/components/business/Code';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';
import { Card, CardHeader, CardTitle, CardBody } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { IconDots } from '@tabler/icons-react';
import { defaultCode } from '@/codes/demos/code.cards';
import sourceCode from '@/codes/sources/source.card';
import CodeDrawer from '@/components/business/CodeDrawer';

const navList: AnchorItem[] = [
  {
    anchorId: 'default',
    label: 'default',
  },
];
export default function CardPage() {
  return (
    <div className="flex">
      <div className="flex-1 sm:mr-90">
        <SectionIntro title="Card" description="Cards are used to display related contents and actions" />
        <CodeDrawer code={sourceCode} />
        <PreviewAndCode anchorId="default" codeText={defaultCode} title="default" code={<Code code={defaultCode} />}>
          <Card className="sm:w-80">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <Button icon size="sm" variant="light" colors="neutral">
                <IconDots size={16} />
              </Button>
            </CardHeader>
            <CardBody>
              <p>card content</p>
              <p>card content</p>
              <p>card content</p>
            </CardBody>
          </Card>
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
