import { Card, CardBody, CardHeader, CardTitle } from '../ui/Card';
import Switch from '../ui/Switch';
export default function NotificationDemo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Settings</CardTitle>
      </CardHeader>
      <CardBody className="overflow-hidden">
        <div>
          <p className="mb-2 font-semibold">General</p>
          <div className="mb-4 flex items-center justify-between gap-4 text-sm">
            <div className="overflow-hidden">
              <p className="truncate font-semibold">Receive email notifications</p>
              <p className="text-description line-clamp-2">important updates via emails</p>
            </div>
            <Switch className="self-end" size="sm" defaultChecked />
          </div>
          <div className="flex items-center justify-between gap-4 text-sm">
            <div className="overflow-hidden">
              <p className="truncate font-semibold">Receive SMS notifications</p>
              <p className="text-description line-clamp-2">Receive messages via your phone</p>
            </div>
            <Switch className="self-end" size="sm" />
          </div>
        </div>
        <div>
          <p className="mb-2 font-semibold">ACtivity</p>
          <div className="mb-4 flex items-center justify-between gap-4 text-sm">
            <div className="overflow-hidden">
              <p className="truncate font-semibold">Task assignments</p>
              <p className="text-description line-clamp-2">when a task is assigned to you</p>
            </div>
            <Switch className="self-end" size="sm" defaultChecked />
          </div>
          <div className="flex items-center justify-between gap-4 text-sm">
            <div className="overflow-hidden">
              <p className="truncate font-semibold">Task comments</p>
              <p className="text-description line-clamp-2">Be noticed when someone comments or mention you</p>
            </div>
            <Switch className="self-end" size="sm" defaultChecked />
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
