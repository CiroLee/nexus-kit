import Image from 'next/image';
import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import Code from '@/components/business/Code';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';
import { Card, CardHeader, CardTitle, CardBody, CardFooter } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { IconDots } from '@tabler/icons-react';
import { defaultCode, widthFooterCode } from '@/codes/demos/code.cards';
import CodeDrawer from '@/components/business/CodeDrawer';
import { getSourceCode } from '@/app/api/github';

const navList: AnchorItem[] = [
  {
    anchorId: 'default',
    label: 'default',
  },
  {
    anchorId: 'with-footer',
    label: 'with footer',
  },
];
export default async function CardPage() {
  const sourceCode = await getSourceCode('Card/index.tsx');
  return (
    <div className="flex">
      <div className="main-container">
        <SectionIntro title="Card" description="Cards are used to display related contents and actions." />
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
        <PreviewAndCode anchorId="with-footer" title="with footer" codeText={widthFooterCode} code={<Code code={widthFooterCode} />}>
          <Card className="sm:w-80">
            <CardBody className="border-line flex items-center gap-3 border-b">
              <Image src="/images/shoes.jpg" alt="shoes" width={600} height={580} className="size-16 rounded object-cover" />
              <div className="flex-1 text-sm">
                <p>Brand Shoe</p>
                <p className="text-description">Size: 40</p>
                <div className="mt-2 flex justify-between">
                  <span>$25.0</span>
                  <span className="text-description">x2</span>
                </div>
              </div>
            </CardBody>
            <CardFooter className="flex justify-between py-2">
              <div className="text-sm">
                <p className="text-description">total</p>
                <p>$50.0</p>
              </div>
              <Button pill size="sm">
                Pay Now
              </Button>
            </CardFooter>
          </Card>
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
