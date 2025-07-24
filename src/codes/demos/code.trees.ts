export const defaultCode = `import { Tree, TreeBranch, TreeItem } from '@/components/ui/Tree';

export default function Page() {
  return (
    <Tree className="max-w-60">
      <TreeBranch label="root">
        <TreeItem>page 1</TreeItem>
        <TreeItem>page 2</TreeItem>
        <TreeItem>page 3</TreeItem>
      </TreeBranch>
      <TreeItem>robot.txt</TreeItem>
    </Tree>
  )
}`;

export const hideLineCode = `import { Tree, TreeBranch, TreeItem } from '@/components/ui/Tree';

export default function Page() {
  return (
    <Tree className="max-w-60" hideLine>
      <TreeBranch label="root">
        <TreeItem>page 1</TreeItem>
        <TreeItem>page 2</TreeItem>
        <TreeItem>page 3</TreeItem>
      </TreeBranch>
      <TreeItem>robot.txt</TreeItem>
    </Tree>
  )
}`;

export const indicatorCode = `import { Tree, TreeBranch, TreeItem } from '@/components/ui/Tree';
import { IconFolder, IconFile } from '@tabler/icons-react';

export default function Page() {
  return (
    <Tree className="max-w-60">
      <TreeBranch indicator={<IconFolder size={16} />} defaultOpen label="src">
        <TreeItem indicator={<IconFile size={16} />}>index.html</TreeItem>
        <TreeItem indicator={<IconFile size={16} />}>style.css</TreeItem>
        <TreeItem indicator={<IconFile size={16} />}>index.ts</TreeItem>
      </TreeBranch>
      <TreeItem indicator={<IconFile size={16} />}>README.md</TreeItem>
    </Tree>
  )
}`;

export const disabledCode = `import { Tree, TreeBranch, TreeItem } from '@/components/ui/Tree';
import { IconFolder, IconFile } from '@tabler/icons-react';

export default function Page() {
  return (
    <Tree className="max-w-60">
      <TreeBranch indicator={<IconFolder size={16} />} label="front-end">
        <TreeItem indicator={<IconFile size={16} />} disabled>
          index.html
        </TreeItem>
        <TreeItem indicator={<IconFile size={16} />}>style.css</TreeItem>
        <TreeItem indicator={<IconFile size={16} />}>index.ts</TreeItem>
      </TreeBranch>
      <TreeBranch indicator={<IconFolder size={16} />} disabled label="server">
        <TreeItem indicator={<IconFile size={16} />}>server.ts</TreeItem>
        <TreeItem indicator={<IconFile size={16} />}>router.ts</TreeItem>
      </TreeBranch>
      <TreeItem indicator={<IconFile size={16} />}>README.md</TreeItem>
    </Tree>
  )
}`;

export const indicatorFnCode = `import { Tree, TreeBranch, TreeItem } from '@/components/ui/Tree';
import { IconFolder, IconFolderOpen, IconFile } from '@tabler/icons-react';

export default function Page() {
  return (
    <Tree className="max-w-60">
      <TreeBranch indicator={(open) => (open ? <IconFolderOpen size={16} /> : <IconFolder size={16} />)} label="src">
        <TreeItem indicator={<IconFile size={16} />}>index.html</TreeItem>
        <TreeItem indicator={<IconFile size={16} />}>style.css</TreeItem>
        <TreeItem indicator={<IconFile size={16} />}>index.ts</TreeItem>
      </TreeBranch>
      <TreeItem indicator={<IconFile size={16} />}>README.md</TreeItem>
    </Tree>
  )
}`;

export const treeNodeCode = `import { Tree, TreeBranch, TreeItem } from '@/components/ui/Tree';
import { IconFile, IconChevronRight } from '@tabler/icons-react';

const treeNodes: TreeNodeItem[] = [
  {
    label: 'src',
    indicator: (open) => <IconChevronRight size={16} className={cn('rotate-0 transition-transform', { 'rotate-90': open })} />,
    children: [
      { label: 'App.tsx', indicator: <IconFile size={16} /> },
      { label: 'main.tsx', indicator: <IconFile size={16} /> },
      { label: 'style.css', indicator: <IconFile size={16} /> },
      {
        label: 'utils',
        indicator: (open) => <IconChevronRight size={16} className={cn('rotate-0 transition-transform', { 'rotate-90': open })} />,
        children: [
          { label: 'number.ts', indicator: <IconFile size={16} /> },
          { label: 'http.ts', indicator: <IconFile size={16} /> },
        ],
      },
    ],
  },
  {
    label: 'package.json',
    indicator: <IconFile size={16} />,
  },
  {
    label: 'README.md',
    indicator: <IconFile size={16} />,
  },
];

export default function Page() {
  return (
    <Tree className="max-w-60">
      <TreeNode nodes={treeNodes} />
    </Tree>
  )
}`;

export const asLinkCode = `import { Tree, TreeBranch, TreeItem } from '@/components/ui/Tree';
import { IconFile, IconFolderOpen } from '@tabler/icons-react';

export default function Page() {
  return (
    <Tree className="max-w-60">
      <TreeBranch indicator={(open) => (open ? < size={16} /> : <IconFolder size={16} />)} label="Documentation">
        <TreeItem indicator={<IconFile size={16} />} as={Link} href="/docs">
          Installation
        </TreeItem>
        <TreeItem indicator={<IconFile size={16} />} as={Link} href="/docs/badges">
          Badge
        </TreeItem>
        <TreeItem indicator={<IconFile size={16} />} as={Link} href="/docs/buttons">
          Button
        </TreeItem>
      </TreeBranch>
    </Tree>
  )
}`;

export const asLink2Code = `import { Tree, TreeBranch, TreeItem } from '@/components/ui/Tree';
import { IconFile, IconChevronRight, IconExternalLink } from '@tabler/icons-react';

const treeNodes: TreeNodeItem[] = [
  {
    label: 'External Links',
    indicatorAlign: 'end',
    indicator: (open) => <IconChevronRight size={16} className={cn('rotate-0 transition-transform', { 'rotate-90': open })} />,
    children: [
      {
        label: (
          <div className="flex flex-1 items-center justify-between">
            <span>Tailwindcss</span>
            <IconExternalLink size={16} />
          </div>
        ),
        indicator: <IconFile size={16} />,
        as: Link,
        href: 'https://tailwindcss.com/',
        target: '_blank',
      },
      {
        label: (
          <div className="flex flex-1 items-center justify-between">
            <span>React</span>
            <IconExternalLink size={16} />
          </div>
        ),
        indicator: <IconFile size={16} />,
        as: Link,
        href: 'https://react.dev/',
        target: '_blank',
      },
    ],
  },
];

export default function Page() {
  return (
    <Tree className="max-w-60">
      <TreeNode nodes={treeNodes} />
    </Tree>
  )
}`;
