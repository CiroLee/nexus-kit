'use client';
import { useEffect, useRef, useState } from 'react';
import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import CodeDrawer from '@/components/business/CodeDrawer';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';
import Loading from '@/components/ui/Loading';
import { IconLoader } from '@tabler/icons-react';
import { Button } from '@/components/ui/Button';
import ClientCode from '@/components/business/ClientCode';
import { defaultCode, backdropCode, customIndicatorCode, containLoadingCode } from '@/codes/demos/code.loadings';
import { getSourceCode } from '@/app/api/github';

const navList: AnchorItem[] = [
  { anchorId: 'default', label: 'default' },
  { anchorId: 'backdrop', label: 'backdrop' },
  { anchorId: 'container-loading', label: 'container loading' },
  { anchorId: 'custom-indicator', label: 'custom indicator' },
];

export default function LoadingPage() {
  const [sourceCode, setSourceCode] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [isLoading3, setIsLoading3] = useState(false);
  const [backdrop, setBackdrop] = useState<'opaque' | 'blur' | 'transparent'>('opaque');
  const timer = useRef<ReturnType<typeof setTimeout>>(null);
  const delayCloseLoading = (triggerFn: (...args: unknown[]) => void, delayFn?: () => void) => {
    triggerFn();
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      delayFn?.();
    }, 2000);
  };

  const getCode = async () => {
    const code = await getSourceCode('Loading/index.tsx');
    setSourceCode(code);
  };

  useEffect(() => {
    getCode();
  }, []);

  return (
    <div className="flex">
      <div className="main-container">
        <SectionIntro title="Loading" description="A loading component that can be used to display a loading state." />
        <CodeDrawer isClient code={sourceCode} />
        <PreviewAndCode anchorId="default" title="default" codeText={defaultCode} code={<ClientCode code={defaultCode} />}>
          <Button
            onClick={() => {
              delayCloseLoading(
                () => setIsLoading(true),
                () => setIsLoading(false),
              );
            }}>
            Loading
          </Button>
        </PreviewAndCode>
        <PreviewAndCode anchorId="backdrop" title="backdrop" codeText={backdropCode} code={<ClientCode code={backdropCode} />}>
          <div className="flex gap-4">
            <Button
              onClick={() => {
                delayCloseLoading(
                  () => {
                    setIsLoading(true);
                    setBackdrop('opaque');
                  },
                  () => setIsLoading(false),
                );
              }}>
              opaque
            </Button>
            <Button
              onClick={() => {
                delayCloseLoading(
                  () => {
                    setIsLoading(true);
                    setBackdrop('blur');
                  },
                  () => setIsLoading(false),
                );
              }}>
              blur
            </Button>
            <Button
              onClick={() => {
                delayCloseLoading(
                  () => {
                    setIsLoading(true);
                    setBackdrop('transparent');
                  },
                  () => setIsLoading(false),
                );
              }}>
              transparent
            </Button>
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="container-loading" title="container loading" codeText={containLoadingCode} code={<ClientCode code={containLoadingCode} />}>
          <div className="space-y-4">
            <Button
              onClick={() => {
                delayCloseLoading(
                  () => {
                    setIsLoading2(true);
                  },
                  () => setIsLoading2(false),
                );
              }}>
              container loading
            </Button>
            <Loading isFullscreen={false} open={isLoading2}>
              <div className="border-line relative rounded border p-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </div>
            </Loading>
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="custom-indicator" title="custom indicator" codeText={customIndicatorCode} code={<ClientCode code={customIndicatorCode} />}>
          <Button
            onClick={() => {
              delayCloseLoading(
                () => {
                  setIsLoading3(true);
                },
                () => {
                  setIsLoading3(false);
                },
              );
            }}>
            loading
          </Button>
        </PreviewAndCode>
      </div>
      <Loading isFullscreen backdrop={backdrop} open={isLoading} />
      <Loading
        isFullscreen
        indicator={
          <div className="flex flex-col items-center gap-1">
            <IconLoader size={32} className="text-secondary animate-spin" />
            <span>loading...</span>
          </div>
        }
        open={isLoading3}
      />
      <OnThisPage list={navList} />
    </div>
  );
}
