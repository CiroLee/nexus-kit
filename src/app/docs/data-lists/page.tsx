import { IconCopy } from '@tabler/icons-react';
import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import CodeBox from '@/components/business/CodeBox';
import CodeDrawer from '@/components/business/CodeDrawer';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';
import { DataList, DataListItem, DataListLabel, DataListValue } from '@/components/ui/DataList';
import Tag from '@/components/ui/Tag';
import Link from '@/components/ui/Link';
import { defaultCode, orientationCode, combineCode } from '@/codes/demos/code.datalist';
import { getSourceCode } from '@/app/api/github';

const navList: AnchorItem[] = [
  { anchorId: 'default', label: 'default' },
  { anchorId: 'orientation', label: 'orientation' },
  { anchorId: 'combination-usage', label: 'combination usage' },
];

const dataListGroup = [
  [
    { label: 'Name', value: 'John Doe' },
    {
      label: 'Email',
      value: (
        <Link href="mailto:john@example.com" className="leading-normal hover:underline">
          john.doe@example.com
        </Link>
      ),
    },
  ],
  [
    { label: 'Position', value: 'Software Engineer' },
    { label: 'organization', value: 'Nexus-Kit' },
  ],
];

export default async function DataListPage() {
  const sourceCode = await getSourceCode('DataList/index.tsx');
  return (
    <div className="flex">
      <div className="main-container @container">
        <SectionIntro title="DataList" description="DataList is used to display the list of data." />
        <CodeDrawer code={sourceCode} />
        <PreviewAndCode anchorId="default" title="default" codeText={defaultCode} code={<CodeBox code={defaultCode} />}>
          <DataList orientation="horizontal">
            <DataListItem>
              <DataListLabel>Name</DataListLabel>
              <DataListValue>John Doe</DataListValue>
            </DataListItem>
            <DataListItem>
              <DataListLabel>ID</DataListLabel>
              <DataListValue className="flex items-center gap-1">
                <span>nk_01JXHJC0G1JJKTSJF</span>
                <IconCopy size={16} className="text-description cursor-pointer transition-colors hover:text-white/80" />
              </DataListValue>
            </DataListItem>
            <DataListItem>
              <DataListLabel>Role</DataListLabel>
              <DataListLabel>
                <Tag colors="secondary" className="min-h-5" bordered>
                  Admin
                </Tag>
              </DataListLabel>
            </DataListItem>
            <DataListItem>
              <DataListLabel>Email</DataListLabel>
              <DataListValue>
                <Link href="mailto:john@example.com" className="leading-normal hover:underline">
                  john.doe@example.com
                </Link>
              </DataListValue>
            </DataListItem>
          </DataList>
        </PreviewAndCode>
        <PreviewAndCode anchorId="orientation" title="orientation" codeText={orientationCode} code={<CodeBox code={orientationCode} />}>
          <DataList orientation="vertical">
            <DataListItem>
              <DataListLabel>Sales</DataListLabel>
              <DataListValue>$1,235</DataListValue>
            </DataListItem>
            <DataListItem>
              <DataListLabel>Revenue</DataListLabel>
              <DataListValue>$3,456</DataListValue>
            </DataListItem>
          </DataList>
        </PreviewAndCode>
        <PreviewAndCode anchorId="combination-usage" title="combination usage" codeText={combineCode} code={<CodeBox code={combineCode} />}>
          <div className="flex flex-row gap-16">
            {dataListGroup.map((data, i) => (
              <DataList orientation="vertical" key={i}>
                {data.map((item, key) => (
                  <DataListItem key={key}>
                    <DataListLabel>{item.label}</DataListLabel>
                    <DataListValue>{item.value}</DataListValue>
                  </DataListItem>
                ))}
              </DataList>
            ))}
          </div>
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
