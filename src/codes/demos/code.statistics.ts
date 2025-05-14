export const defaultCode = `import Statistic from '@/components/ui/Statistic';

export default function Page() {
  return (
    <Statistic title="Total" value="200" helpText="increased by 10% than last week" />
  )
}`;

export const formatCode = `import Statistic from '@/components/ui/Statistic';

export default function Page() {
  return (
    <Statistic title="Account" value={Intl.NumberFormat().format(12345)} />
  )
}`;

export const trendCode = `import Statistic from '@/components/ui/Statistic';

export default function Page() {
  return (
    <div className="flex gap-8">
      <Statistic title="Total profit" value="32.4" unit="%" trend="increase" />
      <Statistic title="Total expense" value="12.3" unit="%" trend="decrease" />
    </div>
  )
}`;

export const colorsCode = `import Statistic from '@/components/ui/Statistic';

export default function Page() {
  return (
    <div className="flex gap-8">
      <Statistic colors="default" title="Total profit" value="32.4" unit="%" trend="increase" />
      <Statistic colors="primary" title="Total profit" value="32.4" unit="%" trend="increase" />
      <Statistic colors="secondary" title="Total profit" value="32.4" unit="%" trend="increase" />
      <Statistic colors="warning" title="Total profit" value="32.4" unit="%" trend="increase" />
      <Statistic colors="danger" title="Total profit" value="32.4" unit="%" trend="increase" />
    </div>
  )
}`;

export const prefixSuffixCode = `import Statistic from '@/components/ui/Statistic';
import { IconCashRegister, IconTrendingDown } from '@tabler/icons-react';

export default function Page() {
  return (
    <div className="flex gap-8">
      <Statistic title="Total expense" value="12.3K" unit="USD" prefix={<IconCashRegister size={18} />} />
      <Statistic title="Total expense" value="12.3K" unit="USD" prefix="$" />
      <Statistic title="Total expense" value="12.3K" suffix={<IconTrendingDown className="self-end text-red-400" size={22} />} />
    </div>
  )
}`;
