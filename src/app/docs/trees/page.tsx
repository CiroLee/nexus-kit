import { getSourceCode } from '@/app/api/github';
import SignaturePanelMain from './main';

export default async function SignaturePanelPage() {
  const sourceCode = await getSourceCode('Tree/index.tsx');
  return <SignaturePanelMain sourceCode={sourceCode} />;
}
