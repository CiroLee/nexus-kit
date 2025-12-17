import { examplesConfig } from '../config';
import { IconArrowLeft, IconArrowUpRight } from '@tabler/icons-react';
import Heading from '@/components/ui/Heading';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import CodeBox from '@/components/business/CodeBox';
import Resizable from '@/components/business/Resizable';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { getExampleCode } from '@/app/api/github';
import { removeLastEmptyLine } from '@/utils/utils';

export default async function Page({ params }: { params: Promise<{ repo: string }> }) {
  const { repo } = await params;
  const title = examplesConfig.find((item) => item.id === repo)?.title;
  const description = examplesConfig.find((item) => item.id === repo)?.description;
  const children = examplesConfig.find((item) => item.id === repo)?.children;

  const codesArray = await Promise.all(children?.map((child) => getExampleCode(`${repo}/${child.name}`)) || []);

  return (
    <div className="relative mx-auto overflow-auto sm:max-w-[90%]">
      <div className="bg-background fixed top-16 left-0 z-10 mx-auto w-full px-[5%] py-4">
        <Link href="/blocks" className="hover:text-primary flex items-center gap-2 transition-colors">
          <IconArrowLeft size={20} /> Back to examples
        </Link>
      </div>
      <Heading as="h1" className="mt-12 mb-3 text-center">
        {title}
      </Heading>
      <p className="text-description text-center">{description}</p>
      <div>
        {children?.map((item, index) => (
          <PreviewAndCode
            key={index}
            isDiagnoal
            className="**:data-[slot=preview-content]:p-0 xl:max-w-full [&_.preview-content]:p-0"
            title={item.title}
            codeText={removeLastEmptyLine(codesArray[index]) || ''}
            code={<CodeBox code={removeLastEmptyLine(codesArray[index]) || ''} />}
            trail={
              <Button key={index} asIcon variant="bordered" colors="neutral" asChild>
                <Link href={`https://nexus-examples.vercel.app/${repo}/${item.name}`} target="_blank">
                  <IconArrowUpRight size={20} />
                </Link>
              </Button>
            }>
            <Resizable className="w-full">
              <iframe className="min-h-200 w-full" src={`https://nexus-examples.vercel.app/${repo}/${item.name}`}></iframe>
            </Resizable>
          </PreviewAndCode>
        ))}
      </div>
    </div>
  );
}
