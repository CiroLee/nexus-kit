'use client';
import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import ClientCode from '@/components/business/ClientCode';
import CodeDrawer from '@/components/business/CodeDrawer';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';
import { Tree, TreeBranch, TreeItem, TreeNode, type TreeNodeItem } from '@/components/ui/Tree';
import { IconFolder, IconFolderOpen, IconFile, IconChevronRight, IconExternalLink } from '@tabler/icons-react';
import { cn } from '@/lib/utils';
import Code from '@/components/ui/Code';
import Link from 'next/link';
import { defaultCode, hideLineCode, indicatorCode, indicatorFnCode, disabledCode, treeNodeCode, asLinkCode, asLink2Code } from '@/codes/demos/code.trees';

const navList: AnchorItem[] = [
  { anchorId: 'default', label: 'default' },
  { anchorId: 'hide-line', label: 'hide line' },
  { anchorId: 'indicator', label: 'indicator' },
  { anchorId: 'indicator-function', label: 'indicator function' },
  { anchorId: 'disabled', label: 'disabled' },
  { anchorId: 'tree-node', label: 'tree node' },
  { anchorId: 'as-link', label: 'as link' },
  { anchorId: 'as-link-tree-node', label: 'as link in TreeNode' },
];

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

const treeNodesWithLinks: TreeNodeItem[] = [
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

export default function TreePage({ sourceCode }: { sourceCode?: string }) {
  return (
    <div className="flex">
      <div className="main-container">
        <SectionIntro title="Tree" description="A tree component for displaying hierarchical data." />
        <CodeDrawer isClient code={sourceCode} />
        <PreviewAndCode anchorId="default" title="default" codeText={defaultCode} code={<ClientCode code={defaultCode} />}>
          <Tree className="max-w-60">
            <TreeBranch label="root">
              <TreeItem>page 1</TreeItem>
              <TreeItem>page 2</TreeItem>
              <TreeItem>page 3</TreeItem>
            </TreeBranch>
            <TreeItem>robot.txt</TreeItem>
          </Tree>
        </PreviewAndCode>
        <PreviewAndCode anchorId="hide-line" title="hide line" codeText={hideLineCode} code={<ClientCode code={hideLineCode} />}>
          <Tree className="max-w-60">
            <TreeBranch label="root" hideLine>
              <TreeItem>page 1</TreeItem>
              <TreeItem>page 2</TreeItem>
              <TreeItem>page 3</TreeItem>
            </TreeBranch>
          </Tree>
        </PreviewAndCode>
        <PreviewAndCode anchorId="indicator" title="indicator" codeText={indicatorCode} code={<ClientCode code={indicatorCode} />}>
          <Tree className="max-w-60">
            <TreeBranch indicator={<IconFolder size={16} />} defaultOpen label="src">
              <TreeItem indicator={<IconFile size={16} />}>index.html</TreeItem>
              <TreeItem indicator={<IconFile size={16} />}>style.css</TreeItem>
              <TreeItem indicator={<IconFile size={16} />}>index.ts</TreeItem>
            </TreeBranch>
            <TreeItem indicator={<IconFile size={16} />}>README.md</TreeItem>
          </Tree>
        </PreviewAndCode>
        <PreviewAndCode
          anchorId="indicator-function"
          title="indicator function"
          description={
            <p>
              <strong>note:</strong> indicator as a function must be used in a client component.
            </p>
          }
          codeText={indicatorFnCode}
          code={<ClientCode code={indicatorFnCode} />}>
          <Tree className="max-w-60">
            <TreeBranch indicator={(open) => (open ? <IconFolderOpen size={16} /> : <IconFolder size={16} />)} label="src">
              <TreeItem indicator={<IconFile size={16} />}>index.html</TreeItem>
              <TreeItem indicator={<IconFile size={16} />}>style.css</TreeItem>
              <TreeItem indicator={<IconFile size={16} />}>index.ts</TreeItem>
            </TreeBranch>
            <TreeItem indicator={<IconFile size={16} />}>README.md</TreeItem>
          </Tree>
        </PreviewAndCode>
        <PreviewAndCode anchorId="disabled" title="disabled" codeText={disabledCode} code={<ClientCode code={disabledCode} />}>
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
        </PreviewAndCode>
        <PreviewAndCode
          anchorId="tree-node"
          title="TreeNode"
          description={
            <div>
              The <Code className="text-foreground">TreeNode</Code> component helps render child nodes recursively.
            </div>
          }
          codeText={treeNodeCode}
          code={<ClientCode code={treeNodeCode} />}>
          <Tree className="max-w-60">
            <TreeNode nodes={treeNodes} />
          </Tree>
        </PreviewAndCode>
        <PreviewAndCode anchorId="as-link" title="as link" codeText={asLinkCode} code={<ClientCode code={asLinkCode} />}>
          <Tree className="max-w-60">
            <TreeBranch indicator={(open) => (open ? <IconFolderOpen size={16} /> : <IconFolder size={16} />)} label="Documentation">
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
        </PreviewAndCode>
        <PreviewAndCode anchorId="as-link-tree-node" title="as link in TreeNode" codeText={asLink2Code} code={<ClientCode code={asLink2Code} />}>
          <Tree className="max-w-60">
            <TreeNode nodes={treeNodesWithLinks} />
          </Tree>
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
