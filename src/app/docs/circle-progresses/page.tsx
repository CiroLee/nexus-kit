import CircleProgressMain from './main';
import { getSourceCode } from '@/app/api/github';
export default async function DialogPage() {
  const sourceCode = await getSourceCode('Progress/index.tsx');
  return <CircleProgressMain sourceCode={sourceCode} />;
}
