import CalendarMain from './main';
import { getSourceCode } from '@/app/api/github';
export default async function DialogPage() {
  const source = await getSourceCode('Calendar/index.tsx');
  const core = await getSourceCode('shared/calendar.ts');
  return <CalendarMain sourceCode={[source, core]} />;
}
