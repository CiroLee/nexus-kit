import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import Code from '@/components/business/Code';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';
import Statistic from '@/components/ui/Statistic';
import { IconCashRegister, IconTrendingDown } from '@tabler/icons-react';
import Link from '@/components/ui/Link';

const navList: AnchorItem[] = [{ anchorId: 'default', label: 'default' }];

export default function StatisticPage() {
  return (
    <div className="flex">
      <div className="main-container">
        <SectionIntro title="Statistic" description="Statistic is used to display the statistic content width a title and value" />
        <PreviewAndCode anchorId="default" title="default" codeText="" code={<Code code="" />}>
          <Statistic title="Total" value="200" helpText="increased by 10% than last week" />
        </PreviewAndCode>
        <PreviewAndCode
          anchorId="format"
          title="format"
          description={
            <div>
              use{' '}
              <Link target="_blank" className="italic" href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat">
                Intl.NumberFormat
              </Link>{' '}
              to format value
            </div>
          }
          codeText=""
          code={<Code code="" />}>
          <Statistic title="Account" value={Intl.NumberFormat().format(12345)} />
        </PreviewAndCode>
        <PreviewAndCode anchorId="trend" title="trend" codeText="" code={<Code code="" />}>
          <div className="flex gap-8">
            <Statistic title="Total profit" value="32.4" unit="%" trend="increase" />
            <Statistic title="Total expense" value="12.3" unit="%" trend="decrease" />
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="colors" title="colors" codeText="" code={<Code code="" />}>
          <div className="flex gap-8">
            <Statistic colors="default" title="Total profit" value="32.4" unit="%" trend="increase" />
            <Statistic colors="primary" title="Total profit" value="32.4" unit="%" trend="increase" />
            <Statistic colors="secondary" title="Total profit" value="32.4" unit="%" trend="increase" />
            <Statistic colors="warning" title="Total profit" value="32.4" unit="%" trend="increase" />
            <Statistic colors="danger" title="Total profit" value="32.4" unit="%" trend="increase" />
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="prefix-suffix" title="prefix and suffix" codeText="" code={<Code code="" />}>
          <div className="flex gap-8">
            <Statistic title="Total expense" value="12.3K" unit="USD" prefix={<IconCashRegister size={18} />} />
            <Statistic title="Total expense" value="12.3K" unit="USD" prefix="$" />
            <Statistic title="Total expense" value="12.3K" suffix={<IconTrendingDown className="self-end text-red-400" size={22} />} />
          </div>
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
