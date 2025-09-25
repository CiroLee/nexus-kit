import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import CodeBox from '@/components/business/CodeBox';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';
import BrowserFrame from '@/components/ui/BrowserFrame';
import CodeDrawer from '@/components/business/CodeDrawer';
import { macOSCode, windowsCode, showUrlCode, showTitleCode, asIFrameCode, customContentCode } from '@/codes/demos/code.browser-frames';
import { getSourceCode } from '@/app/api/github';

const navList: AnchorItem[] = [
  { anchorId: 'macOS', label: 'macOS' },
  { anchorId: 'windows', label: 'windows' },
  { anchorId: 'show-url', label: 'show url' },
  { anchorId: 'show-title', label: 'show title' },
  { anchorId: 'as-iframe', label: 'render iframe' },
  { anchorId: 'custom-content', label: 'custom content' },
];

export default async function BrowserFramePage() {
  const sourceCode = await getSourceCode('BrowserFrame/index.tsx');
  return (
    <div className="flex">
      <div className="main-container @container">
        <SectionIntro title="BrowserFrame" description="BrowserFrame is a component that shows the browser device frame with custom content or iframe inside." />
        <CodeDrawer code={sourceCode} />
        <PreviewAndCode center={false} anchorId="macOS" title="macOS" codeText={macOSCode} code={<CodeBox code={macOSCode} />}>
          <BrowserFrame browserType="macOS" />
        </PreviewAndCode>
        <PreviewAndCode center={false} anchorId="windows" title="windows" codeText={windowsCode} code={<CodeBox code={windowsCode} />}>
          <BrowserFrame browserType="windows" />
        </PreviewAndCode>
        <PreviewAndCode center={false} anchorId="show-url" title="show url" codeText={showUrlCode} code={<CodeBox code={showUrlCode} />}>
          <BrowserFrame browserType="macOS" url="https://nexus-kit.vercel.app" />
        </PreviewAndCode>
        <PreviewAndCode center={false} anchorId="show-title" title="show title" codeText={showTitleCode} code={<CodeBox code={showTitleCode} />}>
          <BrowserFrame browserType="macOS" title="Nexus Kit" />
        </PreviewAndCode>
        <PreviewAndCode center={false} anchorId="as-iframe" title="render iframe" codeText={asIFrameCode} code={<CodeBox code={asIFrameCode} />}>
          <BrowserFrame browserType="macOS" title="Nexus Kit" asIFrame url="https://nexus-kit.vercel.app" />
        </PreviewAndCode>
        <PreviewAndCode center={false} anchorId="custom-content" title="custom content" codeText={customContentCode} code={<CodeBox code={customContentCode} />}>
          <BrowserFrame browserType="macOS" title="Nexus Kit">
            <p className="p-4">custom content</p>
          </BrowserFrame>
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
