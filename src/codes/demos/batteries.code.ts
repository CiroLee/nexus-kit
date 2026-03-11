export const defaultCode = `import Battery from '@/components/ui/Battery';

export default function Page() {
  return (
    <>
      <Battery value={60} />
    </>
  )
}`;

export const sizeCode = `import Battery from '@/components/ui/Battery';

export default function Page() {
  return (
    <div className="flex items-center gap-3">
      <Battery value={60} size="sm" />
      <Battery value={60} size="md" />
      <Battery value={60} size="lg" />
    </div>
  )
}`;

export const chargingCode = `import Battery from '@/components/ui/Battery';

export default function Page() {
  return (
    <div className="flex items-center gap-3">
      <Battery value={60} isCharing />
      <Battery value={100} isCharing />
    </div>
  )
}`;

export const lowBatteryCode = `import Battery from '@/components/ui/Battery';

export default function Page() {
  return (
    <>
      <Battery value={19} lowBatteryThreshold={20} />
    </>
  )
}`;
