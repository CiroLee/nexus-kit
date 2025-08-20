import DialogMain from './main';
import { getSourceCode } from '@/app/api/github';
export default async function LoadingPage() {
  const sourceCode = await getSourceCode('Loading/index.tsx');
  return <DialogMain sourceCode={sourceCode} />;
}
