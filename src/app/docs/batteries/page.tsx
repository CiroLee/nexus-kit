import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import CodeBox from '@/components/business/CodeBox';
import CodeDrawer from '@/components/business/CodeDrawer';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';
import Battery from '@/components/ui/Battery';
import { defaultCode, sizeCode, chargingCode, lowBatteryCode } from '@/codes/demos/batteries.code';
import { getSourceCode } from '@/app/api/github';

const navList: AnchorItem[] = [
  { anchorId: 'default', label: 'default' },
  { anchorId: 'size', label: 'size' },
  { anchorId: 'charging', label: 'charging' },
  { anchorId: 'low-battery-threshold', label: 'low battery' },
];
export default async function BatteryPage() {
  const sourceCode = await getSourceCode('Battery/index.tsx');
  return (
    <div className="flex">
      <div className="main-container @container">
        <SectionIntro title="Battery" description="Battery is a component that displays the battery status of the device." />
        <CodeDrawer code={sourceCode} />
        <PreviewAndCode anchorId="default" title="default" codeText={defaultCode} code={<CodeBox code={defaultCode} />}>
          <Battery value={60} />
        </PreviewAndCode>
        <PreviewAndCode anchorId="size" title="size" codeText={sizeCode} code={<CodeBox code={sizeCode} />}>
          <div className="flex items-center gap-3">
            <Battery value={60} size="sm" />
            <Battery value={60} size="md" />
            <Battery value={60} size="lg" />
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="charging" title="charging" codeText={chargingCode} code={<CodeBox code={chargingCode} />}>
          <div className="flex items-center gap-3">
            <Battery value={60} isCharging />
            <Battery value={100} isCharging />
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="low-battery-threshold" title="low-battery" codeText={lowBatteryCode} code={<CodeBox code={lowBatteryCode} />}>
          <div className="flex gap-3">
            <Battery value={18} lowBatteryThreshold={20} />
            <Battery value={18} lowBatteryThreshold={20} isCharging />
          </div>
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
