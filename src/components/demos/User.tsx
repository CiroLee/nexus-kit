import { IconHeartFilled, IconUser, IconUsers } from '@tabler/icons-react';
import { Card, CardBody, CardHeader, CardTitle } from '../ui/Card';
import Image from 'next/image';
import Button from '../ui/Button';
import Heading from '../ui/Heading';
export default function UserDemo() {
  return (
    <Card className="p-1.5">
      <div className="relative h-60 overflow-hidden rounded-sm">
        <div className="bg-background/70 hover:bg-background/55 group absolute top-2 right-2 z-3 flex size-8 items-center justify-center rounded-lg backdrop-blur-md backdrop-saturate-200 transition-colors">
          <IconHeartFilled size={14} className="text-neutral-500 opacity-60 group-hover:opacity-100 dark:text-neutral-300" />
        </div>
        <ul className="absolute bottom-4 z-3 grid w-full grid-cols-3 justify-items-center gap-2">
          <li className="flex items-end gap-0.5">
            <p className="text-xl leading-4 font-medium text-white">324</p>
            <IconUser size={14} className="text-neutral-300" />
          </li>
          <li className="flex items-end gap-1">
            <p className="text-xl leading-4 font-medium text-white">235</p>
            <IconUsers size={14} className="text-neutral-300" />
          </li>
          <li className="flex items-end gap-1">
            <p className="text-xl leading-4 font-medium text-white">34</p>
            <IconHeartFilled size={14} className="text-neutral-300" />
          </li>
        </ul>
        <div className="absolute inset-0 z-2 bg-gradient-to-t from-black/70 from-20% to-white/10"></div>
        <Image src="/images/sunset.jpg" alt="sunset" width={640} height={950} className="size-full rounded-sm object-fill" />
      </div>
      <div className="mt-6 px-2">
        <Heading as="h5" className="mb-2 font-bold">
          Sunny Lumiya
        </Heading>
        <p className="text-description text-sm">Exploring the world, one sunset at a time.</p>
        <Button variant="bordered" colors="neutral" pill className="my-4 w-full">
          Follow
        </Button>
      </div>
    </Card>
  );
}
