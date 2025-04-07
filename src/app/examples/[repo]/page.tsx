import { examplesConfig } from '../config';
import { IconArrowLeft, IconArrowUpRight } from '@tabler/icons-react';
import Heading from '@/components/ui/Heading';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import Code from '@/components/business/Code';
import Resizable from '@/components/business/Resizable';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default async function Page({ params }: { params: Promise<{ repo: string }> }) {
  const { repo } = await params;
  const title = examplesConfig.find((item) => item.id === repo)?.title;
  const filePaths = examplesConfig.find((item) => item.id === repo)?.children.map((child) => child.name);

  const getCode = async (filePath: string) => {
    const url = `https://api.github.com/repos/CiroLee/${process.env.GITHUB_REPO}/contents/src/app/${filePath}/page.tsx`;
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          Accept: 'application/vnd.github.raw',
        },
        next: { revalidate: 60 },
      });

      if (!response.ok) {
        // detail error info
        const errorData = await response.json().catch(() => ({}));
        throw new Error(`GitHub API failed: ${response.status} ${response.statusText}\n` + `path: ${filePath}\n` + `detail: ${JSON.stringify(errorData)}`);
      }

      if (response.headers.get('content-type')?.includes('application/octet-stream')) {
        const buffer = Buffer.from(await response.arrayBuffer());
        return buffer.toString('base64');
      }
      return await response.text();
    } catch (error) {
      console.error('获取代码时出错:', error);
      return null;
    }
  };

  const codesArray = await Promise.all(filePaths?.map((filePath) => getCode(`${repo}/${filePath}`)) || []);

  return (
    <div className="relative mx-auto max-w-[90%] overflow-auto">
      <Link href="/examples" className="absolute flex items-center gap-2">
        <IconArrowLeft size={24} /> Back to examples
      </Link>
      <Heading as="h1" className="mt-12 mb-3 text-center">
        {title}
      </Heading>
      <p className="text-description text-center">components about auths, such as create account, login</p>
      <div>
        {filePaths?.map((item, index) => (
          <PreviewAndCode
            key={index}
            isDiagnoal
            className="[&_.preview-content]:p-0"
            title="create account"
            code={<Code code={codesArray[index] || ''} />}
            trail={
              <Button icon variant="bordered" colors="neutral" asChild>
                <Link href={`https://nexus-examples.vercel.app/${repo}/${item}`} target="_blank">
                  <IconArrowUpRight />
                </Link>
              </Button>
            }>
            <Resizable className="w-[90%]">
              <iframe className="min-h-200 w-full" src={`https://nexus-examples.vercel.app/${repo}/${item}`}></iframe>
            </Resizable>
          </PreviewAndCode>
        ))}
      </div>
    </div>
  );
}
