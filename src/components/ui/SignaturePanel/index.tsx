'use client';
import { cn } from '@/lib/utils';
import { useRef, useEffect, useImperativeHandle, useState, useCallback } from 'react';
export interface SignaturePanelMethod {
  save: () => Promise<string | undefined>;
  clear: () => Promise<void>;
}

interface SignaturePanelProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<SignaturePanelMethod>;
  panelColor?: string;
  lineColor?: string;
  lineWidth?: number;
  onDrawStart?: () => void;
  onDrawing?: () => void;
  onDrawEnd?: () => void;
}

interface Position {
  x: number;
  y: number;
}
export default function SignaturePanel({ className, panelColor = '#f0f0f0', lineWidth = 2, lineColor = '#000', onDrawStart, onDrawEnd, onDrawing, ref, ...props }: SignaturePanelProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPending, setIsPending] = useState(false);
  const [startPosition, setStartPosition] = useState<Position>({ x: 0, y: 0 });

  const recordStartPosition = useCallback(
    (e: PointerEvent) => {
      setStartPosition({ x: e.offsetX, y: e.offsetY });
      setIsPending(true);
      onDrawStart?.();
    },
    [onDrawStart],
  );

  const drawLine = useCallback(
    (start: Position, end: Position) => {
      const ctx = canvasRef.current?.getContext('2d');
      if (!ctx) return;
      ctx.beginPath();
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = lineColor;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.moveTo(start.x, start.y);
      ctx.lineTo(end.x, end.y);
      ctx.stroke();
      ctx.closePath();

      setStartPosition({ x: end.x, y: end.y });
      onDrawing?.();
    },
    [lineWidth, lineColor, onDrawing],
  );

  const endDrawLine = useCallback(() => {
    setIsPending(false);
    setStartPosition({ x: 0, y: 0 });
    onDrawEnd?.();
  }, [onDrawEnd]);

  const handlePointerMove = useCallback(
    (e: PointerEvent) => {
      if (isPending) {
        drawLine(startPosition, { x: e.offsetX, y: e.offsetY });
      }
    },
    [isPending, startPosition, drawLine],
  );

  const handleClear = async (): Promise<void> => {
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;
    return new Promise((resolve) => {
      ctx.clearRect(0, 0, canvasRef.current?.width || 0, canvasRef.current?.height || 0);
      resolve();
    });
  };

  const handleSave = async (): Promise<string | undefined> => {
    return new Promise((resolve, reject) => {
      canvasRef.current?.toBlob(
        (blob) => {
          if (!blob) {
            reject(new Error('Failed to create blob'));
            return;
          }
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result as string);
          reader.readAsDataURL(blob as Blob);
        },
        'image/png',
        1,
      );
    });
  };

  useImperativeHandle(ref, () => ({
    save: handleSave,
    clear: handleClear,
  }));

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas?.addEventListener('pointerdown', recordStartPosition);
    canvas?.addEventListener('pointermove', handlePointerMove);
    canvas?.addEventListener('pointerup', endDrawLine);
    canvas?.addEventListener('pointerleave', endDrawLine);

    return () => {
      canvas?.removeEventListener('pointerdown', recordStartPosition);
      canvas?.removeEventListener('pointermove', handlePointerMove);
      canvas?.removeEventListener('pointerup', endDrawLine);
      canvas?.removeEventListener('pointerleave', endDrawLine);
    };
  }, [recordStartPosition, handlePointerMove, endDrawLine]);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;
    const { width, height } = containerRef.current.getBoundingClientRect();
    initCanvas({ canvas: canvasRef.current, width, height });
  }, []);

  return (
    <div ref={containerRef} className={cn('relative', className)} {...props}>
      <canvas className="size-full touch-none" ref={canvasRef} style={{ backgroundColor: panelColor }}></canvas>
    </div>
  );
}

function initCanvas({ canvas, width, height }: { canvas: HTMLCanvasElement; width: number; height: number }) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const dpr = window.devicePixelRatio || 1;
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  ctx.imageSmoothingEnabled = true;
  ctx.scale(dpr, dpr);
}
