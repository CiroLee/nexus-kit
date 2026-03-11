import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import CodeBox from '@/components/business/CodeBox';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';
import Battery from '@/components/ui/Battery';
import { defaultCode, sizeCode, chargingCode, lowBatteryCode } from '@/codes/demos/batteries.code';
const navList: AnchorItem[] = [
  { anchorId: 'default', label: 'default' },
  { anchorId: 'size', label: 'size' },
  { anchorId: 'charging', label: 'charging' },
  { anchorId: 'low-battery-threshold', label: 'low battery' },
];
export default function BatteryPage() {
  return (
    <div className="flex">
      <div className="main-container @container">
        <SectionIntro title="Battery" description="Battery is a component that displays the battery status of the device." />
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
            <Battery value={60} isCharing />
            <Battery value={100} isCharing />
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="low-battery-threshold" title="low-battery" codeText={lowBatteryCode} code={<CodeBox code={lowBatteryCode} />}>
          <Battery value={18} lowBatteryThreshold={20} />
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
