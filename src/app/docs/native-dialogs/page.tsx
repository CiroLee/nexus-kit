import DialogMain from './main';
import { getSourceCode } from '@/app/api/github';
export default async function DialogPage() {
  const sourceCode = await getSourceCode('NativeDialog/index.tsx');
  return <DialogMain sourceCode={sourceCode} />;
}
