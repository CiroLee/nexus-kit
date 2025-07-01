import { PropsWithChildren } from 'react';
import Header from '@/components/business/Header';
export default function DocLayout({ children }: PropsWithChildren) {
  return (
    <section>
      <Header showToggleSidebar={false} />
      <main className="mt-16 p-4">{children}</main>
    </section>
  );
}
