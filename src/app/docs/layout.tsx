import { PropsWithChildren } from 'react';
import DocHeader from '@/components/business/DocHeader';
import SideNavBar from '@/components/business/SideNavBar';
export default function DocLayout({ children }: PropsWithChildren) {
  return (
    <section className="h-screen overflow-hidden">
      <DocHeader />
      <div className="relative mt-16 flex h-[calc(100vh_-_64px)]">
        <SideNavBar />
        <main className="h-full flex-1 overflow-auto p-4">{children}</main>
      </div>
    </section>
  );
}
