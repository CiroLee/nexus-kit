import { getSourceCode } from '@/app/api/github';
import TreeMain from './main';

export default async function SignaturePanelPage() {
  const sourceCode = await getSourceCode('Tree/index.tsx');
  return <TreeMain sourceCode={sourceCode} />;
}
