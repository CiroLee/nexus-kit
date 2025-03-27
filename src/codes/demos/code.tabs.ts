export const defaultCode = `import { Tabs, TabsList, TabsItem, TabsContent } from '@/components/Tabs';

export default function Page() {
  return (
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
  )
}
`;

export const verticalCode = `import { Tabs, TabsList, TabsItem, TabsContent } from '@/components/Tabs';

export default function Page() {
  return (
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
  )
}
`;

export const disabledCode = `import { Tabs, TabsList, TabsItem, TabsContent } from '@/components/Tabs';

export default function Page() {
  return (
    <Tabs defaultValue="tab-1">
      <TabsList>
        <TabsItem value="tab-1">tab-1</TabsItem>
        <TabsItem value="tab-2" disabled>tab-2</TabsItem>
        <TabsItem value="tab-3">tab-3</TabsItem>
      </TabsList>
      <TabsContent value="tab-1">tab-1 content...</TabsContent>
      <TabsContent value="tab-2">tab-2 content...</TabsContent>
      <TabsContent value="tab-3">tab-3 content...</TabsContent>
    </Tabs>
  )
}
`;

export const widthIconCode = `import { Tabs, TabsList, TabsItem, TabsContent } from '@/components/Tabs';
import { IconMusic, IconVideo, IconPhoto } from '@tabler/icons-react';

export default function Page() {
  return (
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
  )
}
`;
