import CheckboxMain from './main';
import { getSourceCode } from '@/app/api/github';
export default async function DialogPage() {
  const sourceCode = await getSourceCode('Checkbox/index.tsx');
  return <CheckboxMain sourceCode={sourceCode} />;
}
