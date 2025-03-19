import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Button className="absolute top-12 left-1/2 -translate-x-1/2" asChild>
        <Link href="/docs">Get Started</Link>
      </Button>
    </div>
  );
}
