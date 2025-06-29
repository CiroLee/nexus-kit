import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import CodeBox from '@/components/business/CodeBox';
import { Tabs, TabsList, TabsItem, TabsContent } from '@/components/ui/Tabs';
import { IconMusic, IconVideo, IconPhoto } from '@tabler/icons-react';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';
import { defaultCode, verticalCode, disabledCode, widthIconCode } from '@/codes/demos/code.tabs';
import CodeDrawer from '@/components/business/CodeDrawer';
import { getSourceCode } from '@/app/api/github';

const navList: AnchorItem[] = [
  {
    anchorId: 'default',
    label: 'default',
  },
  {
    anchorId: 'vertical',
    label: 'orientation vertical',
  },
  {
    anchorId: 'disabled',
    label: 'disabled',
  },
  {
    anchorId: 'with-icon',
    label: 'with icon',
  },
];

export default async function TabsPage() {
  const sourceCode = await getSourceCode('Tabs/index.tsx');
  return (
    <div className="flex">
      <div className="main-container">
        <SectionIntro title="Tabs" description="Tabs are used to categorize content. They are used to group content together and make it easier to find." />
        <CodeDrawer code={sourceCode} />
        <PreviewAndCode anchorId="default" title="default" codeText={defaultCode} code={<CodeBox code={defaultCode} />}>
          <Tabs defaultValue="tab-1">
            <TabsList>
              <TabsItem value="tab-1">tab-1</TabsItem>
              <TabsItem value="tab-2">tab-2</TabsItem>
              <TabsItem value="tab-3">tab-3</TabsItem>
            </TabsList>
            <TabsContent value="tab-1">tab-1 content...</TabsContent>
            <TabsContent value="tab-2">tab-2 content...</TabsContent>
            <TabsContent value="tab-3">tab-3 content...</TabsContent>
          </Tabs>
        </PreviewAndCode>
        <PreviewAndCode anchorId="vertical" title="vertical" codeText={verticalCode} code={<CodeBox code={verticalCode} />}>
          <Tabs defaultValue="tab-1" orientation="vertical">
            <TabsList>
              <TabsItem value="tab-1">tab-1</TabsItem>
              <TabsItem value="tab-2">tab-2</TabsItem>
              <TabsItem value="tab-3">tab-3</TabsItem>
            </TabsList>
            <TabsContent value="tab-1">tab-1 content...</TabsContent>
            <TabsContent value="tab-2">tab-2 content...</TabsContent>
            <TabsContent value="tab-3">tab-3 content...</TabsContent>
          </Tabs>
        </PreviewAndCode>
        <PreviewAndCode anchorId="disabled" title="disabled" codeText={disabledCode} code={<CodeBox code={disabledCode} />}>
          <Tabs defaultValue="tab-1">
            <TabsList>
              <TabsItem value="tab-1">tab-1</TabsItem>
              <TabsItem value="tab-2" disabled>
                tab-2
              </TabsItem>
              <TabsItem value="tab-3">tab-3</TabsItem>
            </TabsList>
            <TabsContent value="tab-1">tab-1 content...</TabsContent>
            <TabsContent value="tab-2">tab-2 content...</TabsContent>
            <TabsContent value="tab-3">tab-3 content...</TabsContent>
          </Tabs>
        </PreviewAndCode>
        <PreviewAndCode anchorId="with-icon" title="with icon" codeText={widthIconCode} code={<CodeBox code={widthIconCode} />}>
          <Tabs defaultValue="music">
            <TabsList>
              <TabsItem value="music">
                <IconMusic size={20} />
                Music
              </TabsItem>
              <TabsItem value="video">
                <IconVideo size={22} />
                Video
              </TabsItem>
              <TabsItem value="photo">
                <IconPhoto size={20} />
                Photo
              </TabsItem>
            </TabsList>
            <TabsContent value="music">enjoy music</TabsContent>
            <TabsContent value="video">watch video</TabsContent>
            <TabsContent value="photo">view photos</TabsContent>
          </Tabs>
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
