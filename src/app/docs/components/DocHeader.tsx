import Image from 'next/image';
export default function DocHeader() {
  return (
    <header className="bg-background/80 border-line fixed top-0 left-0 z-20 flex h-16 w-full items-center justify-between border-b px-4 backdrop-blur-sm">
      <div className="flex h-full items-center gap-1 text-lg font-semibold">
        <Image src="/images/logo.svg" width={64} height={64} className="size-6 object-scale-down" alt="logo" />
        Nexus Kit
      </div>
    </header>
  );
}
