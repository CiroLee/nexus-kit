export const stateCode = `import { Alert, AlertTitle } from "@/components/ui/Alert";

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
      <Alert state="neutral">
        <AlertTitle>neutral - Alert Title</AlertTitle>
        your can add alert content here
      </Alert>
    </div>
  )
}
`;

export const showIconCode = `import { Alert, AlertTitle } from "@/components/ui/Alert";

export default function Page() {
  return (
    <div className="space-y-5">
      <Alert hiddenIcon state="info">
        <AlertTitle>Alert Title</AlertTitle>
        your can add alert content here
      </Alert>
    </div>
  )
}
`;

export const variantCode = `import { Alert, AlertTitle } from "@/components/ui/Alert";

export default function Page() {
  return (
    <div className="space-y-5">
      <Alert state="info" variant="solid">
          <AlertTitle>solid - Alert Title</AlertTitle>
          your can add alert content here
        </Alert>
        <Alert state="info" variant="bordered">
          <AlertTitle>bordered - Alert Title</AlertTitle>
          your can add alert content here
        </Alert>
        <Alert state="info" variant="light">
          <AlertTitle>light - Alert Title</AlertTitle>
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
