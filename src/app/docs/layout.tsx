'use client';
import { PropsWithChildren } from 'react';
import DocHeader from '@/components/business/DocHeader';
import SideNavBar from '@/components/business/SideNavBar';
import { SidebarProvider } from '@/contexts/doc-context';
export default function DocLayout({ children }: PropsWithChildren) {
  return (
    <section className="h-screen overflow-hidden">
      <SidebarProvider>
        <DocHeader />
        <div className="relative mt-16 flex h-[calc(100vh_-_64px)]">
          <SideNavBar />
          <main className="h-full flex-1 overflow-auto p-4">{children}</main>
        </div>
      </SidebarProvider>
    </section>
  );
}
