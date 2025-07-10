'use client';
import { IconTrash, IconDots, IconPlayerTrackNextFilled, IconPlayerPauseFilled, IconPlayerPlayFilled } from '@tabler/icons-react';
import Image from 'next/image';
import { Card, CardBody, CardHeader } from '../ui/Card';
import Button from '../ui/Button';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export default function MiniMusicDemo() {
  const [playState, setPlayState] = useState<'paused' | 'playing'>('playing');
  const togglePlayState = () => {
    setPlayState(playState === 'playing' ? 'paused' : 'playing');
  };
  return (
    <Card>
      <CardHeader className="h-16">
        <Button pill size="sm" asIcon colors="neutral" variant="bordered">
          <IconTrash size={16} />
        </Button>
        <span>MoonLight</span>
        <Button pill size="sm" asIcon colors="neutral" variant="bordered">
          <IconDots size={16} />
        </Button>
      </CardHeader>
      <CardBody className="flex flex-col items-center justify-center">
        <div className={cn('relative mt-4 size-44 animate-spin overflow-hidden rounded-full [animation-duration:12s]', { '[animation-play-state:paused]': playState === 'paused' })}>
          <div className="bg-background/50 absolute top-1/2 left-1/2 z-10 flex size-10 -translate-1/2 items-center justify-center rounded-full backdrop-blur-md backdrop-saturate-200">
            <div className="size-8 rounded-full bg-neutral-700/50"></div>
          </div>
          <Image src="/images/moonlight-cover.jpg" alt="moonlight cover" width={600} height={600} className="size-full" />
        </div>
        <div className="mt-10 flex items-center gap-6">
          <Button asIcon colors="neutral" variant="bordered" pill>
            <IconPlayerTrackNextFilled className="rotate-180" size={14} />
          </Button>
          <Button size="lg" asIcon colors="neutral" variant="bordered" pill onClick={togglePlayState}>
            <IconPlayerPauseFilled size={20} className={cn({ hidden: playState === 'paused' })} />
            <IconPlayerPlayFilled size={20} className={cn({ hidden: playState === 'playing' })} />
          </Button>
          <Button asIcon colors="neutral" variant="bordered" pill>
            <IconPlayerTrackNextFilled size={14} />
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
