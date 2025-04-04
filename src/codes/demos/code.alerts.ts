export const stateCode = `'use client';

import { Alert, AlertTitle } from "@/components/ui/Alert";

export default function Page() {
  return (
    <div className="space-y-5">
      <Alert state="info">
        <AlertTitle>info - Alert Title</AlertTitle>
        your can add alert content here
      </Alert>
      <Alert state="success">
        <AlertTitle>success - Alert Title</AlertTitle>
        your can add alert content here
      </Alert>
      <Alert state="warning">
        <AlertTitle>warning - Alert Title</AlertTitle>
        your can add alert content here
      </Alert>
      <Alert state="danger">
        <AlertTitle>danger - Alert Title</AlertTitle>
        your can add alert content here
      </Alert>
      <Alert state="default">
        <AlertTitle>default - Alert Title</AlertTitle>
        your can add alert content here
      </Alert>
    </div>
  )
}
`;

export const showIconCode = `'use client';

import { Alert, AlertTitle } from "@/components/ui/Alert";

export default function Page() {
  return (
    <div className="space-y-5">
      <Alert showIcon={false} state="info">
        <AlertTitle>Alert Title</AlertTitle>
        your can add alert content here
      </Alert>
    </div>
  )
}
`;

export const customIcon = `'use client';

import { Alert, AlertTitle } from "@/components/ui/Alert";
import { IconTimezone } from '@tabler/icons-react';

export default function Page() {
  return (
    <div className="space-y-5">
      <Alert icon={<IconTimezone size={24} />}>
        <AlertTitle>Alert Title</AlertTitle>
        your can add alert content here
      </Alert>
    </div>
  )
}
`;
