'use client';
import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import ClientCode from '@/components/business/ClientCode';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';
import { Tree, TreeBranch, TreeItem, TreeNode, type TreeNodeItem } from '@/components/ui/Tree';
import { IconFolder, IconFolderOpen, IconFile, IconChevronRight } from '@tabler/icons-react';
import { cn } from '@/lib/utils';

const navList: AnchorItem[] = [{ anchorId: 'default', label: 'default' }];

const treeNodes: TreeNodeItem[] = [
  {
    label: 'src',
    indicator: (open) => <IconChevronRight size={16} className={cn({ 'rotate-90 transition-transform': open })} />,
    children: [
      { label: 'App.tsx', indicator: <IconFile size={16} /> },
      { label: 'main.tsx', indicator: <IconFile size={16} /> },
      { label: 'style.css', indicator: <IconFile size={16} /> },
      {
        label: 'utils',
        indicator: (open) => <IconChevronRight size={16} className={cn({ 'rotate-90 transition-transform': open })} />,
        children: [
          { label: 'number.ts', indicator: <IconFile size={16} /> },
          { label: 'http.ts', indicator: <IconFile size={16} /> },
        ],
      },
    ],
  },
  {
    label: 'README.md',
    indicator: <IconFile size={16} />,
  },
];

export default function TreePage({ sourceCode }: { sourceCode?: string }) {
  return (
    <div className="flex">
      <div className="main-container">
        <SectionIntro title="Tree" description="A tree component for displaying hierarchical data." />
        <PreviewAndCode anchorId="default" title="default" codeText="" code={<ClientCode code="" />}>
          <Tree className="max-w-60">
            <TreeBranch label="src">
              <TreeItem>page 1</TreeItem>
              <TreeItem>page 2</TreeItem>
              <TreeItem>page 3</TreeItem>
            </TreeBranch>
            <TreeItem>file</TreeItem>
          </Tree>
        </PreviewAndCode>
        <PreviewAndCode anchorId="hide-line" title="hide line" codeText="" code={<ClientCode code="" />}>
          <Tree className="max-w-60">
            <TreeBranch label="src" hideLine>
              <TreeItem>page 1</TreeItem>
              <TreeItem>page 2</TreeItem>
              <TreeItem>page 3</TreeItem>
            </TreeBranch>
          </Tree>
        </PreviewAndCode>
        <PreviewAndCode anchorId="indicator" title="indicator" codeText="" code={<ClientCode code="" />}>
          <Tree className="max-w-60">
            <TreeBranch indicator={<IconFolder size={16} />} label="src">
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
          codeText=""
          code={<ClientCode code="" />}>
          <Tree className="max-w-60">
            <TreeBranch indicator={(open) => (open ? <IconFolderOpen size={16} /> : <IconFolder size={16} />)} label="src">
              <TreeItem indicator={<IconFile size={16} />}>index.html</TreeItem>
              <TreeItem indicator={<IconFile size={16} />}>style.css</TreeItem>
              <TreeItem indicator={<IconFile size={16} />}>index.ts</TreeItem>
            </TreeBranch>
            <TreeItem indicator={<IconFile size={16} />}>README.md</TreeItem>
          </Tree>
        </PreviewAndCode>
        <PreviewAndCode anchorId="tree-node" title="TreeNode" codeText="" code={<ClientCode code="" />}>
          <Tree className="max-w-60">
            <TreeNode nodes={treeNodes} />
          </Tree>
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
