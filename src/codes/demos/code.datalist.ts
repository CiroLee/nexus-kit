export const defaultCode = `import { DataList, DataListItem, DataListLabel, DataListValue } from '@/components/ui/DataList';
import Tag from '@/components/ui/Tag';
import Link from '@/components/ui/Link';
import { IconCopy } from '@tabler/icons-react';

export default function Page() {
  return (
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
  )
}`;

export const orientationCode = `import { DataList, DataListItem, DataListLabel, DataListValue } from '@/components/ui/DataList';

export default function Page() {
  return (
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
  )
}`;

export const combineCode = `import { DataList, DataListItem, DataListLabel, DataListValue } from '@/components/ui/DataList';
import Link from '@/components/ui/Link';

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
export default function Page() {
  return (
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
  )
}`;
