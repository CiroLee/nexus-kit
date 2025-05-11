export const defaultCode = `import { useState } from 'react';
import Loading from "@/components/ui/Loading";
import Button from "@/components/ui/Button";

export default function Page() {
const [isLoading, setIsLoading] = useState(false);
const timer = useRef<ReturnType<typeof setTimeout>>(null);
 const delayCloseLoading = (triggerFn: (...args: any[]) => void, delayFn?: () => void) => {
    triggerFn();
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      delayFn?.();
    }, 2000);
  };
  return (
    <div>
      <Button
        onClick={() => {
          delayCloseLoading(
            () => setIsLoading(true),
            () => setIsLoading(false),
          );
        }}>
        Loading
      </Button>
      <Loading isFullscreen open={isLoading} />
    </div>
  )
}`;

export const backdropCode = `import { useState } from 'react';
import Loading from "@/components/ui/Loading";
import Button from "@/components/ui/Button";

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(null);
  const [backdrop, setBackdrop] = useState<'opaque' | 'blur' | 'transparent'>('opaque');
  const delayCloseLoading = (triggerFn: (...args: any[]) => void, delayFn?: () => void) => {
      triggerFn();
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => {
        delayFn?.();
      }, 2000);
    };
    return (
      <>
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
        <Loading isFullscreen open={isLoading} />
      </>
    )
}`;

export const containLoadingCode = `import { useState } from 'react';
import Loading from "@/components/ui/Loading";
import Button from "@/components/ui/Button";

export default function Page() {
const [isLoading, setIsLoading] = useState(false);
const timer = useRef<ReturnType<typeof setTimeout>>(null);
 const delayCloseLoading = (triggerFn: (...args: any[]) => void, delayFn?: () => void) => {
    triggerFn();
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      delayFn?.();
    }, 2000);
  };
  return (
    <div className="space-y-4">
      <Button
        onClick={() => {
          delayCloseLoading(
            () => {
              setIsLoading(true);
            },
            () => setIsLoading(false),
          );
        }}>
        container loading
      </Button>
      <Loading isFullscreen={false} open={isLoading}>
        <div className="border-line relative rounded border p-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </Loading>
    </div>
  )
}`;

export const customIndicatorCode = `import { useState } from 'react';
import { IconLoader } from '@tabler/icons-react';
import Loading from "@/components/ui/Loading";
import Button from "@/components/ui/Button";

export default function Page() {
const [isLoading, setIsLoading] = useState(false);
const timer = useRef<ReturnType<typeof setTimeout>>(null);
 const delayCloseLoading = (triggerFn: (...args: any[]) => void, delayFn?: () => void) => {
    triggerFn();
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      delayFn?.();
    }, 2000);
  };
  return (
    <div>
      <Button
        onClick={() => {
          delayCloseLoading(
            () => {
              setIsLoading(true);
            },
            () => {
              setIsLoading(false);
            },
          );
        }}>
        loading
      </Button>
      <Loading
        isFullscreen
        indicator={
          <div className="flex flex-col items-center gap-1">
            <IconLoader size={32} className="text-secondary animate-spin" />
            <span>loading...</span>
          </div>
        }
        open={isLoading}
      />
    </div>
  )
}`;
