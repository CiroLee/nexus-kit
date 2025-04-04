export const defaultCode = `import { Card, CardHeader, CardTitle, CardBody } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { IconDots } from '@tabler/icons-react';

export default function Page() {
  return (
    <Card className="sm:w-80">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <Button icon size="sm" variant="light" colors="neutral">
          <IconDots size={16} />
        </Button>
      </CardHeader>
      <CardBody>
        <p>card content</p>
        <p>card content</p>
        <p>card content</p>
      </CardBody>
    </Card>
  )
}
`;
