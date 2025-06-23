import DialogMain from './main';
import { getSourceCode } from '@/app/api/github';
export default async function DialogPage() {
  const sourceCode = await getSourceCode('Dialog/index.tsx');
  return <DialogMain sourceCode={sourceCode} />;
}
