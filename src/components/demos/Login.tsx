import { IconBrandGoogleFilled, IconMail, IconLock } from '@tabler/icons-react';
import { Card, CardBody, CardHeader, CardTitle } from '../ui/Card';
import { Button } from '../ui/Button';
import Divider from '../ui/Divider';
import Input from '../ui/Input';

export default function LoginDemo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome Back!</CardTitle>
      </CardHeader>
      <CardBody>
        <Button className="w-full gap-1" colors="neutral" variant="bordered">
          <IconBrandGoogleFilled size={18} />
          Login with Google
        </Button>
        <Divider orientation="horizontal">or</Divider>
        <div className="space-y-2">
          <div>
            <label className="mb-1 block text-sm" htmlFor="email">
              Email
            </label>
            <Input id="email" placeholder="Enter your email" prefix={<IconMail className="text-description" size={18} />} />
          </div>
          <div>
            <label className="mb-1 block text-sm" htmlFor="password">
              Password
            </label>
            <Input id="password" type="password" placeholder="Your password" prefix={<IconLock className="text-description" size={18} />} />
          </div>
          <Button className="mt-6 w-full" colors="primary">
            Login
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
